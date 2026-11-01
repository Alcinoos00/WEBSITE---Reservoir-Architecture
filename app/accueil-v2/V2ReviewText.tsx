"use client";

import { useEffect, useRef, useState } from "react";

// Texte d'un avis limité à 4 lignes, avec « Lire la suite » quand il dépasse.
// Le texte complet reste dans la page (transparence des avis et référencement).
export default function V2ReviewText({ text }: { text: string }) {
    const ref = useRef<HTMLQuoteElement>(null);
    const [open, setOpen] = useState(false);
    const [long, setLong] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const check = () => setLong(el.scrollHeight > el.clientHeight + 2);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <>
            <blockquote ref={ref} className={open ? "is-open" : "is-clamped"}>
                « {text} »
            </blockquote>
            {(long || open) && (
                <button type="button" className="v2-review-more" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
                    {open ? "Réduire" : "Lire la suite"}
                </button>
            )}
        </>
    );
}
