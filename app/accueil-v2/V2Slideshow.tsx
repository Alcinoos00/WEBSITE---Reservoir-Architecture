"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export type SlideItem = { href: string; img: string; alt: string; title: string; place: string };

const DELAY = 5000;

// Vue « Diaporama » : un projet à la fois en grand, qui s'enchaîne tout seul (barre de progression),
// avec flèches et une rangée de titres cliquables dessous. Pause au survol.
export default function V2Slideshow({ items }: { items: SlideItem[] }) {
    const [i, setI] = useState(0);
    const [paused, setPaused] = useState(false);
    const go = useCallback((n: number) => setI((n + items.length) % items.length), [items.length]);

    useEffect(() => {
        if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const t = window.setTimeout(() => go(i + 1), DELAY);
        return () => window.clearTimeout(t);
    }, [i, paused, go]);

    const cur = items[i];
    return (
        <div className="v2-slides" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="v2-slides-stage">
                {items.map((it, k) => (
                    <div key={it.href} className={k === i ? "is-on" : ""} aria-hidden={k !== i}>
                        <Image src={it.img} alt={it.alt} fill sizes="100vw" priority={k === 0} loading={k === 0 ? undefined : "eager"} />
                    </div>
                ))}
                <Link href={cur.href} className="v2-slides-caption">
                    <span className="v2-slides-count">{String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
                    <span className="v2-slides-title">{cur.title}</span>
                    <span>{cur.place}</span>
                </Link>
                <div className="v2-slides-arrows">
                    <button type="button" onClick={() => go(i - 1)} aria-label="Projet précédent">←</button>
                    <button type="button" onClick={() => go(i + 1)} aria-label="Projet suivant">→</button>
                </div>
                <span key={`${i}-${paused}`} className={`v2-slides-progress${paused ? " is-paused" : ""}`} style={{ animationDuration: `${DELAY}ms` }} />
            </div>
            <ol className="v2-slides-nav">
                {items.map((it, k) => (
                    <li key={it.href}>
                        <button type="button" className={k === i ? "is-on" : ""} onClick={() => go(k)}>
                            <span>{String(k + 1).padStart(2, "0")}</span> {it.title}
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}
