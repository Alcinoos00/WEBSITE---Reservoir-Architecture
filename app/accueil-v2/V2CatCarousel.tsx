"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { ProjectData } from "@/types/project";
import { v2ProjectHref } from "./v2Links";

// Pages catégorie, mobile uniquement : les projets en carrousel tout en haut, le texte passe dessous.
// Mêmes classes que le bandeau photo des fiches projet (aperçu de la photo suivante, flèches en verre).
export default function V2CatCarousel({ projects }: { projects: ProjectData[] }) {
    const ref = useRef<HTMLDivElement>(null);

    const go = (dir: 1 | -1) => {
        const el = ref.current;
        const item = el?.firstElementChild as HTMLElement | null;
        if (!el || !item) return;
        el.scrollBy({ left: dir * (item.offsetWidth + 8), behavior: "smooth" });
    };

    return (
        <div className="v2-pb-strip-wrap v2-cat-carousel">
            <div className="v2-pb-strip" ref={ref}>
                {projects.map((p, i) => (
                    <Link key={p.id} href={v2ProjectHref(p)} className="v2-pb-strip-item">
                        <Image src={p.heroImages[0]} alt={`${p.title}, ${p.subtitle}`} fill sizes="90vw" priority={i === 0} />
                        <span className="v2-bento-cap">
                            <span className="v2-bento-title">{p.title}</span>
                            <span>{p.subtitle}</span>
                        </span>
                    </Link>
                ))}
            </div>
            <button type="button" className="v2-strip-nav is-prev" onClick={() => go(-1)} aria-label="Projet précédent">‹</button>
            <button type="button" className="v2-strip-nav is-next" onClick={() => go(1)} aria-label="Projet suivant">›</button>
        </div>
    );
}
