"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type SplitItem = { href: string; img: string; alt: string; title: string; place: string; mission?: string; year?: string };

// Vue « Défilé » : à gauche, les projets défilent un par un ; à droite, une grande photo reste fixe
// et change en fondu à chaque projet. Sur téléphone, chaque projet affiche sa photo au-dessus du texte.
export default function V2Split({ items }: { items: SplitItem[] }) {
    const [active, setActive] = useState(0);
    const list = useRef<HTMLOListElement>(null);

    useEffect(() => {
        const el = list.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
                });
            },
            { rootMargin: "-45% 0px -45% 0px" },
        );
        el.querySelectorAll("li").forEach((li) => io.observe(li));
        return () => io.disconnect();
    }, []);

    return (
        <div className="v2-split">
            <ol className="v2-split-list" ref={list}>
                {items.map((it, i) => (
                    <li key={it.href} data-i={i} className={active === i ? "is-active" : ""}>
                        <span className="v2-split-thumb">
                            <Image src={it.img} alt={it.alt} fill sizes="100vw" />
                        </span>
                        <span className="v2-split-num">{String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
                        <Link href={it.href} className="v2-split-title">{it.title}</Link>
                        <span className="v2-tag">{it.place}{it.year ? ` · ${it.year}` : ""}</span>
                        {it.mission && <span className="v2-small">{it.mission}</span>}
                        <Link href={it.href} className="v2-cards-link">Voir le projet</Link>
                    </li>
                ))}
            </ol>
            <div className="v2-split-stage" aria-hidden="true">
                {items.map((it, i) => (
                    <div key={it.href} className={active === i ? "is-on" : ""}>
                        <Image src={it.img} alt="" fill sizes="55vw" priority={i === 0} />
                    </div>
                ))}
            </div>
        </div>
    );
}
