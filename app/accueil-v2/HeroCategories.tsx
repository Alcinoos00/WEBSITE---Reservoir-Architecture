"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type HeroCategory = { label: string; href: string; count: number; img: string; alt: string };

// Les 4 catégories à la place de la photo du hero : des panneaux dont un seul est agrandi.
// Ordinateur : côte à côte, le survol choisit le panneau agrandi.
// Téléphone : empilés et collés à l'écran pendant qu'on fait défiler ; chaque quart du
// défilement agrandit la catégorie suivante (Villas, puis Logements, Commerces, Équipements).
export default function HeroCategories({ items }: { items: HeroCategory[] }) {
    const [active, setActive] = useState(0);
    const wrap = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 768px)");
        let ticking = false;
        const update = () => {
            ticking = false;
            const el = wrap.current;
            if (!el || !mq.matches) return;
            const r = el.getBoundingClientRect();
            const run = r.height - window.innerHeight;
            const p = run > 0 ? Math.min(1, Math.max(0, -r.top / run)) : 0;
            setActive(Math.min(items.length - 1, Math.floor(p * items.length)));
        };
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [items.length]);

    return (
        <div className="v2-cats-scroll" ref={wrap}>
            <div className="v2-cats-panels">
                {items.map((c, i) => (
                    <Link
                        key={c.href}
                        href={c.href}
                        className={`v2-panel${active === i ? " is-active" : ""}`}
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                    >
                        <Image
                            src={c.img}
                            alt={c.alt}
                            fill
                            priority={i === 0}
                            loading={i === 0 ? undefined : "eager"}
                            sizes="(max-width: 768px) 100vw, 60vw"
                        />
                        <span className="v2-panel-label">
                            <span className="v2-panel-name">{c.label}</span>
                            <span className="v2-panel-count">{c.count} projets</span>
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
