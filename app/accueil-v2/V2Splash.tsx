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
    const stageRef = useRef<HTMLDivElement>(null);
    const [logoBox, setLogoBox] = useState<{ x: number; w: number } | null>(null);

    // Le logo encadré se pose exactement sur le dernier « RESERVOIR » écrit (même début, même largeur)
    const placeLogo = useCallback(() => {
        const stage = stageRef.current;
        const word = stage?.querySelector<HTMLElement>(".v2-intro-layer:not(.v2-intro-sizer):not(.is-out)");
        const voir = stage?.querySelector<HTMLElement>(".v2-intro-voir");
        if (!stage || !word || !voir) return;
        const r = document.createRange();
        r.setStart(word.firstChild ?? word, 0);
        r.setEndAfter(word);
        const left = r.getBoundingClientRect().left;
        const right = voir.getBoundingClientRect().right;
        const s0 = stage.getBoundingClientRect().left;
        // les cases du logo débordent un peu des lettres : on élargit de 6 % de part et d'autre
        const w = (right - left) * 1.12;
        setLogoBox({ x: left - s0 - (right - left) * 0.06, w });
    }, []);

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
        at(t, () => {
            placeLogo();
            setLogo(true);
        });
        t += LOGO_MS + LOGO_HOLD_MS;
        at(t, finish);
        const list = timers.current;
        return () => list.forEach((id) => window.clearTimeout(id));
    }, [finish, placeLogo]);

    return (
        <div className={`v2-splash${logo ? " is-logo" : ""}`} onClick={finish}>
            <div className="v2-splash-stage" aria-hidden="true" ref={stageRef}>
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
                <Image src="/images/ui/logo_light_outline.svg" alt="" width={391} height={87} className="v2-splash-logo" style={logoBox ? { left: logoBox.x, width: logoBox.w } : undefined} />
            </div>
            <button type="button" className="v2-splash-skip" onClick={finish}>
                Passer
            </button>
        </div>
    );
}
