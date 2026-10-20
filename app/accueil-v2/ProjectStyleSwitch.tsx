"use client";

import { useEffect, useState } from "react";

const STYLES = [
    { id: "a", label: "Style Teras" },
    { id: "b", label: "Style actuel" },
];
const KEY = "v2-project-style";

// Sélecteur temporaire des deux styles de fiche projet. Le choix est retenu d'une fiche à l'autre
// (localStorage, simple confort de comparaison). À retirer une fois le style choisi.
export default function ProjectStyleSwitch() {
    const [current, setCurrent] = useState("a");

    const apply = (id: string) => {
        document.querySelector(".v2-project")?.setAttribute("data-pstyle", id);
        setCurrent(id);
    };

    useEffect(() => {
        let saved: string | null = null;
        try {
            saved = localStorage.getItem(KEY);
        } catch {}
        if (saved === "b") document.querySelector(".v2-project")?.setAttribute("data-pstyle", "b");
        // eslint-disable-next-line react-hooks/set-state-in-effect -- synchronise l'état avec le choix mémorisé
        if (saved === "b") setCurrent("b");
    }, []);

    const pick = (id: string) => {
        apply(id);
        try {
            localStorage.setItem(KEY, id);
        } catch {}
    };

    return (
        <div className="v2-switch" role="group" aria-label="Style de la fiche projet">
            {STYLES.map((s) => (
                <button key={s.id} type="button" className={current === s.id ? "is-on" : ""} onClick={() => pick(s.id)}>
                    {s.label}
                </button>
            ))}
        </div>
    );
}
