"use client";

import { useEffect, useRef, useState } from "react";

// Cascade « VOIR » de l'accueil (2026-10-30) : les mots apparaissent l'un après l'autre au défilement.
// Le mot en cours est noir, « VOIR » en gras ; les mots précédents passent en gris.
const WORDS = ["RESERVOIR", "VOIR", "PRÉVOIR", "PERCEVOIR", "ENTREVOIR", "CONCEVOIR", "RESERVOIR"];

export default function V2VoirCascade() {
    const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(-1);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setActive(WORDS.length - 1);
            return;
        }
        let raf = 0;
        const update = () => {
            raf = 0;
            const r = el.getBoundingClientRect();
            const vh = window.innerHeight;
            // 0 quand le centre du bloc est à 85 % de la hauteur d'écran, 1 quand il arrive à 35 %
            const p = (vh * 0.85 - (r.top + r.height / 2)) / (vh * 0.5);
            setActive(p <= 0 ? -1 : Math.min(WORDS.length - 1, Math.floor(p * WORDS.length)));
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div ref={ref} className="v2-voir" role="img" aria-label="Reservoir : voir, prévoir, percevoir, entrevoir, concevoir. Reservoir.">
            {WORDS.map((w, i) => (
                <p key={i} aria-hidden="true" className={`v2-voir-line ${i === active ? "is-on" : i < active ? "is-past" : "is-off"}`}>
                    {w.slice(0, -4)}
                    <strong>VOIR</strong>
                </p>
            ))}
        </div>
    );
}
