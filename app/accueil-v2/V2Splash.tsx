"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// Page d'entrée animée (écran d'ouverture plein écran), 2026-11-01 — première visite seulement :
// fond blanc, RESER → PRE → PERCE → ENTRE → CONCE → RESER devant « VOIR » fixe (en gras), en fondus enchaînés,
// puis le mot se fond dans le logo encadré « RESERVOIR architecture », et l'écran s'efface sur l'accueil.
// Même adresse que l'accueil (pas de page séparée). Un toucher ou « Passer » l'interrompt.
// La classe « ra-intro » est posée sur <html> avant l'affichage (script dans HomeV2) : elle affiche l'écran tout de suite,
// sans laisser voir l'accueil une fraction de seconde. Visites suivantes et réduction des animations : accueil direct.
const STEMS = ["RESER", "PRE", "PERCE", "ENTRE", "CONCE", "RESER"];
const TRANS_MS = 800; // fondu enchaîné (doit correspondre à v2.css)
const HOLD_MS = 400; // mot affiché
const LOGO_MS = 800; // fondu du mot vers le logo
const LOGO_HOLD_MS = 900; // logo affiché
const OUT_MS = 700; // effacement de l'écran
export const INTRO_KEY = "ra-intro-vu";

export default function V2Splash() {
    const [cur, setCur] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);
    const [entering, setEntering] = useState(true);
    const [logo, setLogo] = useState(false);
    const timers = useRef<number[]>([]);

    const finish = useCallback(() => {
        timers.current.forEach((id) => window.clearTimeout(id));
        timers.current = [];
        try {
            localStorage.setItem(INTRO_KEY, "1");
        } catch {}
        const html = document.documentElement;
        html.classList.add("ra-intro-out");
        timers.current.push(window.setTimeout(() => html.classList.remove("ra-intro", "ra-intro-out"), OUT_MS));
    }, []);

    useEffect(() => {
        if (!document.documentElement.classList.contains("ra-intro")) return;
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
        at(t, () => setLogo(true));
        t += LOGO_MS + LOGO_HOLD_MS;
        at(t, finish);
        const list = timers.current;
        return () => list.forEach((id) => window.clearTimeout(id));
    }, [finish]);

    return (
        <div className={`v2-splash${logo ? " is-logo" : ""}`} onClick={finish}>
            <div className="v2-splash-stage" aria-hidden="true">
                <span className="v2-intro-line v2-splash-word">
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
                <Image src="/images/ui/logo_light_outline.svg" alt="" width={391} height={87} className="v2-splash-logo" />
            </div>
            <button type="button" className="v2-splash-skip" onClick={finish}>
                Passer
            </button>
        </div>
    );
}
