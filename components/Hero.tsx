"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import "./hero.css";
import { ProjectData } from "@/types/project";
import { getProjectAlt } from "@/lib/seo";
import { useDialogFocus } from "@/lib/useDialogFocus";

interface HeroProps {
    project: ProjectData;
}

export default function Hero({ project }: HeroProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const lightboxRef = useRef<HTMLDivElement>(null);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    useDialogFocus(lightboxRef, lightboxIndex !== null);

    const scroll = (direction: "left" | "right") => {
        const el = scrollRef.current;
        if (!el || el.children.length === 0) return;
        const first = el.children[0] as HTMLElement;
        const second = el.children[1] as HTMLElement | undefined;
        const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollBy({ left: direction === "left" ? -step : step, behavior: reduceMotion ? "auto" : "smooth" });
    };

    const lightboxPrev = useCallback(() => {
        setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : project.heroImages.length - 1));
    }, [project.heroImages.length]);

    const lightboxNext = useCallback(() => {
        setLightboxIndex((i) => (i !== null && i < project.heroImages.length - 1 ? i + 1 : 0));
    }, [project.heroImages.length]);

    const closeLightbox = useCallback(() => setLightboxIndex(null), []);

    // La molette verticale n'est plus détournée : avec l'aimantation (scroll-snap), les petits
    // incréments étaient annulés et la bande devenait une zone morte où la page ne défilait plus.
    // Défilement horizontal : flèches, geste horizontal natif, Maj + molette, clavier.

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
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setLightboxIndex(index);
                                }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label={`Agrandir l'image ${index + 1} sur ${project.heroImages.length}`}
                            style={{ cursor: "pointer" }}
                        >
                            {/* Hauteur fixe du bandeau (15.625rem mobile, 18.75rem tablette, 42vh desktop),
                                largeur libre : `sizes` couvre jusqu'aux photos panoramiques. */}
                            <Image
                                src={src}
                                alt={getProjectAlt(project, index)}
                                className="hero-image"
                                width={1200}
                                height={800}
                                sizes="(max-width: 768px) 400px, (max-width: 1024px) 540px, 76vh"
                                loading={index === 0 ? "eager" : "lazy"}
                                fetchPriority={index === 0 ? "high" : "auto"}
                            />
                        </div>
                    ))}
                </div>

                <button className="slider-nav prev" onClick={() => scroll("left")} aria-label="Image précédente">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <button className="slider-nav next" onClick={() => scroll("right")} aria-label="Image suivante">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

            {lightboxIndex !== null && (
                <div
                    className="lightbox-overlay"
                    ref={lightboxRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Galerie ${project.title}`}
                >
                    {/* Le conteneur couvre tout l'écran : un clic sur le fond (et non sur l'image
                        ou les boutons) ferme la galerie. */}
                    <div
                        className="lightbox-content"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) closeLightbox();
                        }}
                    >
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
