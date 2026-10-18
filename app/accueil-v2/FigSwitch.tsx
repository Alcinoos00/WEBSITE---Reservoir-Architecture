"use client";

import { useState } from "react";

const STYLES = [
    { id: "a", label: "Cartouche" },
    { id: "b", label: "Ligne" },
    { id: "c", label: "Fiche" },
    { id: "d", label: "Éditorial" },
    { id: "e", label: "Légende" },
    { id: "f", label: "Tuiles" },
];

// Boutons flottants pour comparer les designs des chiffres clés sans recharger la page.
// Temporaire : à retirer une fois le design choisi.
export default function FigSwitch({ initial }: { initial: string }) {
    const [current, setCurrent] = useState(initial);

    const pick = (id: string) => {
        document.querySelectorAll(".v2-figs").forEach((el) => {
            el.classList.remove(...STYLES.map((s) => `v2-figs-${s.id}`));
            el.classList.add(`v2-figs-${id}`);
        });
        setCurrent(id);
    };

    return (
        <div className="v2-switch" role="group" aria-label="Design des chiffres">
            {STYLES.map((s) => (
                <button key={s.id} type="button" className={current === s.id ? "is-on" : ""} onClick={() => pick(s.id)}>
                    {s.label}
                </button>
            ))}
        </div>
    );
}
