"use client";

import { useEffect, useState } from "react";

type Option = { id: string; label: string };

// Sélecteur temporaire pour comparer deux mises en page : pose `data-<attr>` sur l'élément ciblé.
// Le choix est retenu d'une page à l'autre (localStorage, simple confort de comparaison).
// À retirer une fois le style choisi.
export default function StyleSwitch({ target, attr, storageKey, options }: { target: string; attr: string; storageKey: string; options: Option[] }) {
    const [current, setCurrent] = useState(options[0].id);

    const apply = (id: string) => {
        document.querySelector(target)?.setAttribute(`data-${attr}`, id);
        setCurrent(id);
    };

    useEffect(() => {
        let saved: string | null = null;
        try {
            saved = localStorage.getItem(storageKey);
        } catch {}
        if (saved && saved !== options[0].id && options.some((o) => o.id === saved)) {
            document.querySelector(target)?.setAttribute(`data-${attr}`, saved);
            // eslint-disable-next-line react-hooks/set-state-in-effect -- synchronise l'état avec le choix mémorisé
            setCurrent(saved);
        }
    }, [target, attr, storageKey, options]);

    const pick = (id: string) => {
        apply(id);
        try {
            localStorage.setItem(storageKey, id);
        } catch {}
    };

    return (
        <div className="v2-switch" role="group" aria-label="Choix de la mise en page">
            {options.map((o) => (
                <button key={o.id} type="button" className={current === o.id ? "is-on" : ""} onClick={() => pick(o.id)}>
                    {o.label}
                </button>
            ))}
        </div>
    );
}
