"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import "./hero.css";
import { ProjectData } from "@/types/project";
import { getProjectAlt } from "@/lib/seo";

interface HeroProps {
    project: ProjectData;
}

export default function Hero({ project }: HeroProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const lightboxPrev = useCallback(() => {
        setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : project.heroImages.length - 1));
    }, [project.heroImages.length]);

    const lightboxNext = useCallback(() => {
        setLightboxIndex((i) => (i !== null && i < project.heroImages.length - 1 ? i + 1 : 0));
    }, [project.heroImages.length]);

    const closeLightbox = useCallback(() => setLightboxIndex(null), []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                let delta = e.deltaY;
                if (e.deltaMode === 1) delta *= 40;
                if (e.deltaMode === 2) delta *= el.clientWidth;

                el.scrollLeft += delta * 1.5;
                e.preventDefault();
            }
        };

        el.addEventListener("wheel", handleWheel, { passive: false });
        return () => el.removeEventListener("wheel", handleWheel);
    }, []);

    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") lightboxPrev();
            if (e.key === "ArrowRight") lightboxNext();
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKey);
        };
    }, [lightboxIndex, closeLightbox, lightboxPrev, lightboxNext]);

    return (
        <section className="hero-container">
            <div className="hero-viewport">
                <div
                    className="hero-scroll-container"
                    ref={scrollRef}
                >
                    {project.heroImages.map((src, index) => (
                        <div
                            key={`${project.id}-img-${index}`}
                            className="hero-image-item"
                            onClick={() => setLightboxIndex(index)}
                            style={{ cursor: "pointer" }}
                        >
                            <Image
                                src={src}
                                alt={getProjectAlt(project, index)}
                                className="hero-image"
                                width={1200}
                                height={800}
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>

                <button className="slider-nav prev" onClick={() => scroll("left")} aria-label="Previous slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <button className="slider-nav next" onClick={() => scroll("right")} aria-label="Next slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

            {lightboxIndex !== null && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox} aria-label="Fermer">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        <button className="lightbox-nav lightbox-prev" onClick={lightboxPrev} aria-label="Image précédente">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>

                        <Image
                            src={project.heroImages[lightboxIndex]}
                            alt={getProjectAlt(project, lightboxIndex)}
                            className="lightbox-image"
                            width={1920}
                            height={1080}
                            priority
                        />

                        <button className="lightbox-nav lightbox-next" onClick={lightboxNext} aria-label="Image suivante">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>

                        <div className="lightbox-counter">
                            {lightboxIndex + 1} / {project.heroImages.length}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
