"use client";

import { useEffect, useState, type ReactNode } from "react";

// Affiche ses enfants peu après la fin du chargement de la page. Sert aux photos hors du
// premier écran : sans ça, le navigateur les télécharge en même temps que la photo principale
// (seuil de chargement anticipé de 1 250 px et plus) et retarde son affichage en 4G.
// Le conteneur parent porte déjà la taille : aucun saut de mise en page.
export function useAfterLoad(delayMs = 1000) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let timer: number | undefined;
        const arm = () => {
            timer = window.setTimeout(() => setReady(true), delayMs);
        };
        if (document.readyState === "complete") arm();
        else window.addEventListener("load", arm, { once: true });
        return () => {
            window.removeEventListener("load", arm);
            if (timer !== undefined) window.clearTimeout(timer);
        };
    }, [delayMs]);

    return ready;
}

export default function AfterLoad({ children, delayMs }: { children: ReactNode; delayMs?: number }) {
    const ready = useAfterLoad(delayMs);
    return ready ? <>{children}</> : null;
}
