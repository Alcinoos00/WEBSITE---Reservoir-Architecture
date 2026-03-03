"use client";

import { useRef } from "react";
import "./hero.css";

const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
    "https://images.unsplash.com/photo-1600570996302-3760438cf78e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
];

export default function Hero() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="hero-container">
            <div className="hero-viewport">
                <div className="hero-scroll-container" ref={scrollRef}>
                    {HERO_IMAGES.map((src, index) => (
                        <div key={src} className="hero-image-item">
                            <img
                                src={src}
                                alt={`Architecture ${index + 1}`}
                                className="hero-image"
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

                <div className="hero-overlay-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 12 0 L 14.59 9.41 L 24 12 L 14.59 14.59 L 12 24 L 9.41 14.59 L 0 12 L 9.41 9.41 L 12 0 Z" fill="white" opacity="0.8" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
