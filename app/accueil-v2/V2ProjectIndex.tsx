"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";

export type IndexRow = { href: string; img: string; alt: string; title: string; place: string; mission?: string; year?: string };

// Vue « Index » : liste typographique façon catalogue d'agence. Au survol d'une ligne,
// la photo du projet apparaît et suit le curseur. Sur écran tactile, une vignette est affichée en tête de ligne.
export default function V2ProjectIndex({ rows }: { rows: IndexRow[] }) {
    const [active, setActive] = useState<number | null>(null);
    const preview = useRef<HTMLDivElement>(null);

    const move = (e: MouseEvent) => {
        const el = preview.current;
        if (el) el.style.transform = `translate3d(${e.clientX + 24}px, ${e.clientY - 120}px, 0)`;
    };

    return (
        <div className="v2-index" onMouseMove={move} onMouseLeave={() => setActive(null)}>
            <div className="v2-index-head" aria-hidden="true">
                <span>N°</span>
                <span>Projet</span>
                <span>Lieu</span>
                <span>Programme</span>
                <span>Année</span>
            </div>
            <ol>
                {rows.map((r, i) => (
                    <li key={r.href} className={active === i ? "is-active" : ""} onMouseEnter={() => setActive(i)}>
                        <Link href={r.href}>
                            <span className="v2-index-num">{String(i + 1).padStart(2, "0")}</span>
                            <span className="v2-index-thumb">
                                <Image src={r.img} alt="" fill sizes="96px" />
                            </span>
                            <span className="v2-index-title">{r.title}</span>
                            <span className="v2-index-place">{r.place}</span>
                            <span className="v2-index-mission">{r.mission}</span>
                            <span className="v2-index-year">{r.year}</span>
                        </Link>
                    </li>
                ))}
            </ol>
            <div className={`v2-index-preview${active !== null ? " is-on" : ""}`} ref={preview} aria-hidden="true">
                {rows.map((r, i) => (
                    <div key={r.href} className={active === i ? "is-on" : ""}>
                        <Image src={r.img} alt="" fill sizes="360px" />
                    </div>
                ))}
            </div>
        </div>
    );
}
