"use client";

import { useState } from "react";
import { SV_STYLES, type SvStyle } from "./SainteVictoire";

// Sélecteur temporaire pour comparer les styles de la Sainte-Victoire. À retirer une fois le style choisi.
export default function SvSwitch() {
    const [current, setCurrent] = useState<SvStyle>("plans");
    const pick = (id: SvStyle) => {
        document.querySelector(".v2-hero-top")?.setAttribute("data-sv", id);
        setCurrent(id);
    };
    return (
        <div className="v2-switch" role="group" aria-label="Style de l'illustration">
            {SV_STYLES.map((s) => (
                <button key={s.id} type="button" className={current === s.id ? "is-on" : ""} onClick={() => pick(s.id)}>
                    {s.label}
                </button>
            ))}
        </div>
    );
}
