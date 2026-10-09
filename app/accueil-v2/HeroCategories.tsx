"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type MouseEvent } from "react";

export type HeroCategory = { label: string; href: string; count: number; img: string; alt: string };

// Les 4 catégories à la place de la photo du hero : des panneaux dont celui survolé s'élargit.
// Sur ordinateur, côte à côte ; sur téléphone, empilés, et le premier appui agrandit le panneau
// (le second ouvre la catégorie), puisqu'il n'y a pas de survol au doigt.
export default function HeroCategories({ items }: { items: HeroCategory[] }) {
    const [active, setActive] = useState(0);

    const onClick = (e: MouseEvent, i: number) => {
        if (i !== active && window.matchMedia("(max-width: 768px)").matches) {
            e.preventDefault();
            setActive(i);
        }
    };

    return (
        <div className="v2-cats-panels">
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
