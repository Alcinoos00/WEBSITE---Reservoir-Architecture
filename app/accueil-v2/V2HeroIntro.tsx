"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Animation d'entrée du logo de l'accueil (2026-11-01), jouée à la première visite seulement :
// RESER → PRE → PERCE → ENTRE → CONCE → RESER devant « VOIR » fixe (en gras), en fondus enchaînés,
// puis le mot se fond dans le logo encadré « RESERVOIR architecture ». Environ 9 secondes, un toucher la passe.
// La classe « ra-intro » est posée sur <html> avant l'affichage par un petit script (voir HomeV2) :
// elle masque le logo fixe pendant l'animation. Visites suivantes et réduction des animations : logo direct.
const STEMS = ["RESER", "PRE", "PERCE", "ENTRE", "CONCE", "RESER"];
const HOLD_MS = 500;
const TRANS_MS = 1000; // doit correspondre à v2.css (.v2-intro)
const OUT_MS = 900;
export const INTRO_KEY = "ra-intro-vu";

export default function V2HeroIntro() {
    const [active, setActive] = useState(false);
    const [cur, setCur] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);
    const [entering, setEntering] = useState(true);
    const timers = useRef<number[]>([]);

    const finish = useCallback(() => {
        timers.current.forEach((id) => window.clearTimeout(id));
        timers.current = [];
        try {
            localStorage.setItem(INTRO_KEY, "1");
        } catch {}
        const html = document.documentElement;
        html.classList.add("ra-intro-out");
        timers.current.push(
            window.setTimeout(() => {
                html.classList.remove("ra-intro", "ra-intro-out");
                setActive(false);
            }, OUT_MS),
        );
    }, []);

    useEffect(() => {
        if (!document.documentElement.classList.contains("ra-intro")) return;
        setActive(true);
        const at = (ms: number, fn: () => void) => timers.current.push(window.setTimeout(fn, ms));
        const last = STEMS.length - 1;
        let t = TRANS_MS;
        at(t, () => setEntering(false));
        t += HOLD_MS;
        for (let i = 1; i <= last; i++) {
            at(t, () => {
                setPrev(i - 1);
                setCur(i);
                setEntering(true);
            });
            t += TRANS_MS;
            at(t, () => {
                setPrev(null);
                setEntering(false);
            });
            t += HOLD_MS;
        }
        at(t + 300, finish);
        const list = timers.current;
        return () => list.forEach((id) => window.clearTimeout(id));
    }, [finish]);

    if (!active) return null;

    return (
        <button type="button" className="v2-intro" onClick={finish} aria-label="Passer l'animation">
            <span className="v2-intro-line" aria-hidden="true">
                <span className="v2-intro-stack">
                    {Array.from(new Set(STEMS)).map((st) => (
                        <span key={`sizer-${st}`} className="v2-intro-layer v2-intro-sizer">
                            {st}
                        </span>
                    ))}
                    {prev !== null && (
                        <span key={`out-${prev}`} className="v2-intro-layer is-out">
                            {STEMS[prev]}
                        </span>
                    )}
                    <span key={`in-${cur}`} className={`v2-intro-layer${entering ? " is-in" : ""}`}>
                        {STEMS[cur]}
                    </span>
                </span>
                <strong className="v2-intro-voir">VOIR</strong>
            </span>
        </button>
    );
}
