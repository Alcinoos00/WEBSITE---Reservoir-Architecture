"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./navigation-carousel.css";
import { ProjectData } from "@/types/project";
import { getProjectAlt, typologyLabel } from "@/lib/seo";
import { useAfterLoad } from "./AfterLoad";

interface NavigationCarouselProps {
    items: ProjectData[];
    // Controls whether clicking navigates to a category or a project
    isCategoryNav?: boolean;
}

// Défilement animé, sauf si le visiteur a demandé à réduire les animations.
const scrollBehavior = (): ScrollBehavior =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

// Helper to sluggify category names (remove accents and spaces)
const slugify = (text: string) => {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-');
};

export default function NavigationCarousel({ items, isCategoryNav = false }: NavigationCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);

    // La molette verticale n'est pas détournée : elle fait défiler la page, comme sur les fiches
    // projet. Défilement horizontal : flèches, barre, glisser, geste horizontal, Maj + molette.

    // Photos du bandeau : la première part tout de suite (image LCP). Les suivantes ne sont
    // rendues que si elles sont visibles au premier écran (desktop) ou peu après le chargement
    // de la page : elles ne concurrencent plus la photo principale sur mobile.
    const [visibleCount, setVisibleCount] = useState(1);
    const afterLoad = useAfterLoad();
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const viewport = el.clientWidth;
        const visible = Array.from(el.children).filter((child) => {
            const item = child as HTMLElement;
            return item.offsetLeft + item.offsetWidth * 0.25 < viewport;
        }).length;
        setVisibleCount(Math.max(1, visible));
    }, []);

    // --- Scrollbar sync ---
    const updateThumb = useCallback(() => {
        const el = scrollRef.current;
        const track = trackRef.current;
        const thumb = thumbRef.current;
        if (!el || !track || !thumb) return;

        const scrollable = el.scrollWidth - el.clientWidth;

        // Hide scrollbar if content fits perfectly (no scrolling needed)
        if (scrollable <= 0) {
            thumb.style.width = `100%`;
            thumb.style.transform = `translateX(0px)`;
            track.style.display = 'none';
            return;
        }

        track.style.display = 'block';
        const ratio = el.clientWidth / el.scrollWidth;
        const thumbWidth = Math.max(track.clientWidth * ratio, 40);
        const maxThumbLeft = track.clientWidth - thumbWidth;

        // Ensure we don't divide by zero if scrollable is exactly 0
        const scrollRatio = scrollable > 0 ? el.scrollLeft / scrollable : 0;
        const thumbLeft = scrollRatio * maxThumbLeft;

        thumb.style.width = `${thumbWidth}px`;
        thumb.style.transform = `translateX(${thumbLeft}px)`;
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        updateThumb();
        el.addEventListener("scroll", updateThumb, { passive: true });
        window.addEventListener("resize", updateThumb);
        return () => {
            el.removeEventListener("scroll", updateThumb);
            window.removeEventListener("resize", updateThumb);
        };
    }, [updateThumb]);

    // --- Scrollbar drag ---
    useEffect(() => {
        const track = trackRef.current;
        const thumb = thumbRef.current;
        const el = scrollRef.current;
        if (!track || !thumb || !el) return;

        let isDragging = false;
        let startX = 0;
        let startScrollLeft = 0;

        const onMouseDown = (e: MouseEvent) => {
            isDragging = true;
            startX = e.clientX;
            startScrollLeft = el.scrollLeft;
            document.body.style.userSelect = "none";
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const trackWidth = track.clientWidth;
            const thumbWidth = thumb.offsetWidth;
            const scrollableTrack = trackWidth - thumbWidth;
            const scrollable = el.scrollWidth - el.clientWidth;

            if (scrollableTrack > 0) {
                el.scrollLeft = startScrollLeft + (dx / scrollableTrack) * scrollable;
            }
        };

        const onMouseUp = () => {
            isDragging = false;
            document.body.style.userSelect = "";
        };

        // Click on track (not thumb) to jump
        const onTrackClick = (e: MouseEvent) => {
            if (e.target === thumb) return;
            const rect = track.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const thumbWidth = thumb.offsetWidth;
            const scrollableTrack = track.clientWidth - thumbWidth;
            const scrollable = el.scrollWidth - el.clientWidth;

            if (scrollableTrack > 0) {
                const ratio = (clickX - thumbWidth / 2) / scrollableTrack;
                el.scrollTo({ left: Math.max(0, Math.min(scrollable, ratio * scrollable)), behavior: scrollBehavior() });
            }
        };

        thumb.addEventListener("mousedown", onMouseDown);
        track.addEventListener("click", onTrackClick);
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);

        return () => {
            thumb.removeEventListener("mousedown", onMouseDown);
            track.removeEventListener("click", onTrackClick);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
    }, []);

    const scroll = (direction: "left" | "right") => {
        const el = scrollRef.current;
        if (!el || el.children.length === 0) return;
        const first = el.children[0] as HTMLElement;
        const second = el.children[1] as HTMLElement | undefined;
        const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
        el.scrollTo({
            left: el.scrollLeft + (direction === "left" ? -step : step),
            behavior: scrollBehavior()
        });
    };

    return (
        <section className="nav-carousel-container" ref={containerRef}>
            <div className="nav-carousel-viewport">
                <div
                    className="nav-carousel-scroll"
                    ref={scrollRef}
                >
                    {items.map((item, index) => {
                        const displayTitle = isCategoryNav ? item.category : (item.navigationTitle || item.title);
                        const categorySlug = item.category ? slugify(item.category) : "";
                        const href = item.href || (isCategoryNav ? `/${categorySlug}` : `/${categorySlug}/${item.slug}`);

                        return (
                            <Link key={`${item.id}-${index}`} href={href} className="nav-carousel-item">
                                {/* Largeur affichée = hauteur du bandeau x 1,5 (aspect-ratio 3:2), plafonnée à 86vw en mobile.
                                    Seule la première image, visible au chargement, part en priorité. */}
                                {(index < visibleCount || afterLoad) && <Image
                                    src={item.heroImages[0]}
                                    alt={isCategoryNav
                                        ? `${typologyLabel(item.category)}, projet ${item.title} de Reservoir Architecture`
                                        : getProjectAlt(item, 0)}
                                    className="nav-carousel-image"
                                    fill
                                    sizes="(max-width: 768px) 86vw, (max-width: 1024px) 60vh, 63vh"
                                    loading={index === 0 ? "eager" : "lazy"}
                                    fetchPriority={index === 0 ? "high" : "auto"}
                                    draggable={false}
                                />}
                                <div className="nav-carousel-overlay"></div>
                                {/* Libellé visuel, pas un titre : un <h3> ici passait avant le <h1> de la page. */}
                                {displayTitle && <span className="nav-carousel-title">{displayTitle}</span>}
                            </Link>
                        )
                    })}
                </div>

                <button className="slider-nav prev" onClick={() => scroll("left")} aria-label="Projets précédents">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <button className="slider-nav next" onClick={() => scroll("right")} aria-label="Projets suivants">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>

                {/* Custom scrollbar — inside viewport to avoid parent overflow clipping */}
                <div className="nav-carousel-scrollbar-track" ref={trackRef}>
                    <div className="nav-carousel-scrollbar-thumb" ref={thumbRef}></div>
                </div>
            </div>
        </section>
    );
}
