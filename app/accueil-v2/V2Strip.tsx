"use client";

import Image from "next/image";
import { useRef } from "react";
import { getProjectAlt } from "@/lib/seo";
import type { ProjectData } from "@/types/project";

// Bandeau photo des fiches projet. Sur mobile, deux flèches font défiler d'une photo.
export default function V2Strip({ project }: { project: ProjectData }) {
    const ref = useRef<HTMLDivElement>(null);

    const go = (dir: 1 | -1) => {
        const el = ref.current;
        const item = el?.firstElementChild as HTMLElement | null;
        if (!el || !item) return;
        el.scrollBy({ left: dir * (item.offsetWidth + 8), behavior: "smooth" });
    };

    return (
        <div className="v2-pb-strip-wrap">
            <div className="v2-pb-strip v2-page-top-strip" ref={ref}>
                {project.heroImages.map((src, i) => (
                    <div key={src} className="v2-pb-strip-item">
                        <Image src={src} alt={getProjectAlt(project, i)} width={1200} height={800} sizes="(max-width: 768px) 200vw, 90vh" loading={i < 3 ? "eager" : "lazy"} />
                    </div>
                ))}
            </div>
            <button type="button" className="v2-strip-nav is-prev" onClick={() => go(-1)} aria-label="Photo précédente">‹</button>
            <button type="button" className="v2-strip-nav is-next" onClick={() => go(1)} aria-label="Photo suivante">›</button>
        </div>
    );
}
