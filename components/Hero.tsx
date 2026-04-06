"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import "./hero.css";
import { ProjectData } from "@/types/project";

interface HeroProps {
    project: ProjectData;
}

export default function Hero({ project }: HeroProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

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

    return (
        <section className="hero-container">
            <div className="hero-viewport">
                <div
                    className="hero-scroll-container"
                    ref={scrollRef}
                >
                    {project.heroImages.map((src, index) => (
                        <div key={`${project.id}-img-${index}`} className="hero-image-item">
                            <Image
                                src={src}
                                alt={`${project.title} ${index + 1}`}
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
        </section>
    );
}
