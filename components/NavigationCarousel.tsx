"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import "./navigation-carousel.css";
import { ProjectData } from "@/types/project";

interface NavigationCarouselProps {
    items: ProjectData[];
    // Controls whether clicking navigates to a category or a project
    isCategoryNav?: boolean;
}

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

    // --- Smooth wheel scroll ---
    useEffect(() => {
        const container = containerRef.current;
        const el = scrollRef.current;
        if (!container || !el) return;

        let targetScrollLeft = el.scrollLeft;
        let rafId: number | null = null;
        let isAnimating = false;

        const animate = () => {
            // Always re-read real position so buttons / drag don't desync
            const current = el.scrollLeft;
            const diff = targetScrollLeft - current;

            if (Math.abs(diff) < 0.5) {
                el.scrollLeft = targetScrollLeft;
                isAnimating = false;
                rafId = null;
                return;
            }

            el.scrollLeft += diff * 0.12;
            rafId = requestAnimationFrame(animate);
        };

        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                let delta = e.deltaY;
                if (e.deltaMode === 1) delta *= 40;
                if (e.deltaMode === 2) delta *= el.clientWidth;

                // Sync target with current real position before adding delta
                if (!isAnimating) {
                    targetScrollLeft = el.scrollLeft;
                }

                const maxScroll = el.scrollWidth - el.clientWidth;
                targetScrollLeft = Math.max(0, Math.min(maxScroll, targetScrollLeft + delta * 1.5));

                e.preventDefault();
                e.stopPropagation();

                if (!isAnimating) {
                    isAnimating = true;
                    rafId = requestAnimationFrame(animate);
                }
            }
        };

        container.addEventListener("wheel", handleWheel, { passive: false, capture: true });
        return () => {
            container.removeEventListener("wheel", handleWheel, { capture: true });
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
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
                el.scrollTo({ left: Math.max(0, Math.min(scrollable, ratio * scrollable)), behavior: "smooth" });
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
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollTo({
                left: scrollLeft + scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="nav-carousel-container" ref={containerRef}>
            <div className="nav-carousel-viewport">
                <div
                    className="nav-carousel-scroll"
                    ref={scrollRef}
                >
                    {items.map((item, index) => {
                        const displayTitle = isCategoryNav ? item.category : item.title;
                        const categorySlug = item.category ? slugify(item.category) : "";
                        const href = item.href || (isCategoryNav ? `/${categorySlug}` : `/${categorySlug}/${item.slug}`);

                        return (
                            <Link key={`${item.id}-${index}`} href={href} className="nav-carousel-item">
                                <img
                                    src={item.heroImages[0]}
                                    alt={displayTitle || item.title}
                                    className="nav-carousel-image"
                                />
                                <div className="nav-carousel-overlay"></div>
                                {displayTitle && <h3 className="nav-carousel-title">{displayTitle}</h3>}
                            </Link>
                        )
                    })}
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

                {/* Custom scrollbar — inside viewport to avoid parent overflow clipping */}
                <div className="nav-carousel-scrollbar-track" ref={trackRef}>
                    <div className="nav-carousel-scrollbar-thumb" ref={thumbRef}></div>
                </div>
            </div>
        </section>
    );
}
