"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export type CarouselItem = { href: string; img: string; alt: string; title: string; place: string };

// Bandeau horizontal de projets, pleine largeur : défilement natif (doigt, trackpad) + flèches.
export default function V2Carousel({ items }: { items: CarouselItem[] }) {
    const track = useRef<HTMLUListElement>(null);

    const go = (dir: 1 | -1) => {
        const el = track.current;
        const card = el?.querySelector("li");
        if (!el || !card) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 12), behavior: reduce ? "auto" : "smooth" });
    };

    return (
        <div className="v2-carousel">
            <ul className="v2-carousel-track" ref={track}>
                {items.map((it, i) => (
                    <li key={it.href}>
                        <Link href={it.href}>
                            <span className="v2-carousel-photo">
                                <Image src={it.img} alt={it.alt} fill sizes="(max-width: 768px) 85vw, 42vw" priority={i < 2} />
                            </span>
                            <span className="v2-works-meta">
                                <span className="v2-domain-caption">{it.title}</span>
                                <span className="v2-domain-place">{it.place}</span>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="v2-carousel-nav">
                <span className="v2-tag">{items.length} projets</span>
                <div>
                    <button type="button" onClick={() => go(-1)} aria-label="Projets précédents">←</button>
                    <button type="button" onClick={() => go(1)} aria-label="Projets suivants">→</button>
                </div>
            </div>
        </div>
    );
}
