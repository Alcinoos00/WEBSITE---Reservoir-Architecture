"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export type ColumnItem = { href: string; img: string; alt: string; title: string; place: string };

const RATIOS = ["4 / 5", "1 / 1", "3 / 4", "4 / 3", "4 / 5", "3 / 4"];
const SPEED = [0, -0.12, 0.06];

// Vue « Colonnes » : trois colonnes de photos aux formats variés ; au défilement, les colonnes
// glissent à des vitesses différentes. Plusieurs projets restent visibles en même temps.
export default function V2Columns({ items }: { items: ColumnItem[] }) {
    const root = useRef<HTMLDivElement>(null);
    const cols = [0, 1, 2].map((c) => items.map((it, i) => ({ it, i })).filter(({ i }) => i % 3 === c));

    useEffect(() => {
        const el = root.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 768px)").matches) return;
        const columns = Array.from(el.querySelectorAll<HTMLElement>(".v2-cols-col"));
        let ticking = false;
        const update = () => {
            ticking = false;
            const r = el.getBoundingClientRect();
            const p = (window.innerHeight - r.top) / (window.innerHeight + r.height);
            columns.forEach((c, k) => {
                c.style.transform = `translate3d(0, ${(Math.max(0, Math.min(1, p)) * SPEED[k] * r.height).toFixed(1)}px, 0)`;
            });
        };
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="v2-cols" ref={root}>
            {cols.map((col, c) => (
                <ul key={c} className="v2-cols-col">
                    {col.map(({ it, i }) => (
                        <li key={it.href}>
                            <Link href={it.href}>
                                <span className="v2-cols-photo" style={{ aspectRatio: RATIOS[i % RATIOS.length] }}>
                                    <Image src={it.img} alt={it.alt} fill sizes="(max-width: 768px) 50vw, 33vw" />
                                </span>
                                <span className="v2-works-meta">
                                    <span className="v2-domain-caption">{it.title}</span>
                                    <span className="v2-domain-place">{it.place}</span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
}
