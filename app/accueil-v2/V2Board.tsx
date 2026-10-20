"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type BoardItem = { href: string; img: string; alt: string; title: string; place: string; mission?: string };

// Vue « Planche » : à gauche, toutes les vignettes des projets ; à droite, un grand aperçu du projet
// survolé avec son nom, son lieu et son programme. On voit tout le corpus et un projet en grand à la fois.
export default function V2Board({ items }: { items: BoardItem[] }) {
    const [i, setI] = useState(0);
    const cur = items[i];
    return (
        <div className="v2-board">
            <ul className="v2-board-thumbs">
                {items.map((it, k) => (
                    <li key={it.href}>
                        <Link href={it.href} className={k === i ? "is-on" : ""} onMouseEnter={() => setI(k)} onFocus={() => setI(k)}>
                            <Image src={it.img} alt={it.alt} fill sizes="(max-width: 768px) 33vw, 12vw" />
                            <span className="v2-board-thumb-name">{it.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href={cur.href} className="v2-board-preview">
                <span className="v2-board-photo">
                    {items.map((it, k) => (
                        <span key={it.href} className={k === i ? "is-on" : ""}>
                            <Image src={it.img} alt="" fill sizes="(max-width: 768px) 100vw, 55vw" />
                        </span>
                    ))}
                </span>
                <span className="v2-works-meta">
                    <span className="v2-board-title">{cur.title}</span>
                    <span className="v2-domain-place">{cur.place}</span>
                </span>
                {cur.mission && <span className="v2-tag">{cur.mission}</span>}
            </Link>
        </div>
    );
}
