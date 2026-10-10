"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";

export type HeroCategory = { label: string; href: string; count: number; img: string; alt: string };

// Les 4 catégories à la place de la photo du hero : des panneaux dont celui survolé s'élargit.
// Sur ordinateur, côte à côte ; sur téléphone, empilés, et le premier appui agrandit le panneau
// (le second ouvre la catégorie), puisqu'il n'y a pas de survol au doigt. Toujours sur téléphone,
// la page défile normalement (rien n'est bloqué) et la catégorie agrandie suit le défilement :
// le bloc garde une hauteur fixe, et la distance défilée choisit le panneau agrandi.
export default function HeroCategories({ items }: { items: HeroCategory[] }) {
    const [active, setActive] = useState(0);
    const box = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 768px)");
        const update = () => {
            const el = box.current;
            if (!el || !mq.matches) return;
            // 0 en haut de page (Villas), 1 après avoir défilé ~80 % de la hauteur du bloc
            const p = Math.min(0.999, Math.max(0, window.scrollY / (el.offsetHeight * 0.8)));
            setActive(Math.floor(p * items.length));
        };
        // Calcul très léger : fait directement à chaque défilement, sans attendre la prochaine image.
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, [items.length]);

    const onClick = (e: MouseEvent, i: number) => {
        if (i !== active && window.matchMedia("(max-width: 768px)").matches) {
            e.preventDefault();
            setActive(i);
        }
    };

    return (
        <div className="v2-cats-panels" ref={box}>
            {items.map((c, i) => (
                <Link
                    key={c.href}
                    href={c.href}
                    className={`v2-panel${active === i ? " is-active" : ""}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={(e) => onClick(e, i)}
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
    );
}
