"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export type HeroCategory = { label: string; href: string; count: number; img: string; alt: string };

// Trois façons de présenter les 4 catégories à la place de la photo du hero.
// Le sélecteur en bas de l'écran sert uniquement à comparer : il disparaîtra une fois l'option choisie.
export default function HeroCategories({ items }: { items: HeroCategory[] }) {
    const [variant, setVariant] = useState<1 | 2 | 3>(1);
    const [active, setActive] = useState(0);
    const track = useRef<HTMLDivElement>(null);

    const pick = (v: 1 | 2 | 3) => {
        setVariant(v);
        setActive(0);
    };

    return (
        <>
            {variant === 1 && (
                <div className="v2-cats-panels">
                    {items.map((c, i) => (
                        <Link
                            key={c.href}
                            href={c.href}
                            className={`v2-panel${active === i ? " is-active" : ""}`}
                            onMouseEnter={() => setActive(i)}
                            onFocus={() => setActive(i)}
                        >
                            <Image src={c.img} alt={c.alt} fill priority={i === 0} loading={i === 0 ? undefined : "eager"} sizes="(max-width: 768px) 100vw, 60vw" />
                            <span className="v2-panel-label">
                                <span className="v2-panel-name">{c.label}</span>
                                <span className="v2-panel-count">{c.count} projets</span>
                            </span>
                        </Link>
                    ))}
                </div>
            )}

            {variant === 2 && (
                <div className="v2-cats-list">
                    {items.map((c, i) => (
                        <Image
                            key={c.href}
                            src={c.img}
                            alt={active === i ? c.alt : ""}
                            fill
                            priority={i === 0}
                            loading={i === 0 ? undefined : "eager"}
                            sizes="(max-width: 768px) 100vw, calc(100vw - 48px)"
                            className={active === i ? "is-active" : ""}
                        />
                    ))}
                    <ul>
                        {items.map((c, i) => (
                            <li key={c.href}>
                                <Link
                                    href={c.href}
                                    className={active === i ? "is-active" : ""}
                                    onMouseEnter={() => setActive(i)}
                                    onFocus={() => setActive(i)}
                                >
                                    {c.label}
                                    <span>{c.count}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {variant === 3 && (
                <div className="v2-cats-strip">
                    <div className="v2-strip-track" ref={track}>
                        {items.map((c, i) => (
                            <Link key={c.href} href={c.href} className="v2-strip-card">
                                <span className="v2-strip-photo">
                                    <Image src={c.img} alt={c.alt} fill priority={i === 0} sizes="(max-width: 768px) 86vw, 42vw" />
                                </span>
                                <span className="v2-strip-meta">
                                    <span>{c.label}</span>
                                    <span>{c.count} projets</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="v2-strip-arrows">
                        <button type="button" aria-label="Catégorie précédente" onClick={() => track.current?.scrollBy({ left: -track.current.clientWidth * 0.6, behavior: "smooth" })}>←</button>
                        <button type="button" aria-label="Catégorie suivante" onClick={() => track.current?.scrollBy({ left: track.current.clientWidth * 0.6, behavior: "smooth" })}>→</button>
                    </div>
                </div>
            )}

            <div className="v2-switch" role="group" aria-label="Comparer les options du hero">
                <span>Option</span>
                {([1, 2, 3] as const).map((v) => (
                    <button key={v} type="button" aria-pressed={variant === v} onClick={() => pick(v)}>
                        {v}
                    </button>
                ))}
            </div>
        </>
    );
}
