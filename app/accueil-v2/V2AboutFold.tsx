"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Texte de l'agence en bas de l'accueil.
// Téléphone : replié derrière un titre cliquable (le texte reste dans le HTML, donc lu par Google).
// Ordinateur : toujours ouvert, le titre cliquable est masqué par v2.css (affichage inchangé).
export default function V2AboutFold({ summary, children }: { summary: string; children: ReactNode }) {
    const ref = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 769px)");
        const sync = () => {
            if (ref.current && mq.matches) ref.current.open = true;
        };
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    return (
        <details className="v2-about-fold" ref={ref}>
            <summary>{summary}</summary>
            {children}
        </details>
    );
}
