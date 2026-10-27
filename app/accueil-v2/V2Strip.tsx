"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import "@/components/hero.css";
import { getProjectAlt } from "@/lib/seo";
import { useDialogFocus } from "@/lib/useDialogFocus";
import type { ProjectData } from "@/types/project";

// Bandeau photo des fiches projet. Sur mobile, deux flèches font défiler d'une photo.
// Un clic sur une photo l'ouvre en plein écran (même lecteur que la fiche en ligne).
export default function V2Strip({ project }: { project: ProjectData }) {
    const ref = useRef<HTMLDivElement>(null);
    const lightboxRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<number | null>(null);
    const count = project.heroImages.length;
    useDialogFocus(lightboxRef, open !== null);

    const go = (dir: 1 | -1) => {
        const el = ref.current;
        const item = el?.firstElementChild as HTMLElement | null;
        if (!el || !item) return;
        el.scrollBy({ left: dir * (item.offsetWidth + 8), behavior: "smooth" });
    };

    const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + count) % count)), [count]);
    const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % count)), [count]);
    const close = useCallback(() => setOpen(null), []);

    useEffect(() => {
        if (open === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open, close, prev, next]);

    return (
        <div className="v2-pb-strip-wrap">
            <div className="v2-pb-strip v2-page-top-strip" ref={ref}>
                {project.heroImages.map((src, i) => (
                    <button
                        key={src}
                        type="button"
                        className="v2-pb-strip-item"
                        onClick={() => setOpen(i)}
                        aria-label={`Agrandir l'image ${i + 1} sur ${count}`}
                    >
                        <Image src={src} alt={getProjectAlt(project, i)} width={1200} height={800} sizes="(max-width: 768px) 90vw, 90vh" loading="lazy" fetchPriority={i === 0 ? "high" : "auto"} />
                    </button>
                ))}
            </div>
            <button type="button" className="v2-strip-nav is-prev" onClick={() => go(-1)} aria-label="Photo précédente">‹</button>
            <button type="button" className="v2-strip-nav is-next" onClick={() => go(1)} aria-label="Photo suivante">›</button>

            {open !== null && (
                <div className="lightbox-overlay" ref={lightboxRef} role="dialog" aria-modal="true" aria-label={`Galerie ${project.title}`}>
                    <div className="lightbox-content" onClick={(e) => e.target === e.currentTarget && close()}>
                        <button className="lightbox-close" onClick={close} aria-label="Fermer">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <button className="lightbox-nav lightbox-prev" onClick={prev} aria-label="Image précédente">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <Image src={project.heroImages[open]} alt={getProjectAlt(project, open)} className="lightbox-image" width={1920} height={1080} priority />
                        <button className="lightbox-nav lightbox-next" onClick={next} aria-label="Image suivante">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                        <div className="lightbox-counter">
                            {open + 1} / {count}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
