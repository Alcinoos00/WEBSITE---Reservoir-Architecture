"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// Page d'entrée animée (écran d'ouverture plein écran), 2026-11-01 — première visite seulement, environ 4 secondes :
// fond blanc, RESER → PRE → CONCE → RESER devant « VOIR » fixe (en gras), en fondus enchaînés, puis :
//  - fin « logo »  : le mot se fond dans le logo encadré « RESERVOIR architecture » ;
//  - fin « texte » : « architecture » apparaît en petit sous RESERVOIR, aligné sur son bord droit (comme le stop motion).
// Même adresse que l'accueil (pas de page séparée). Un toucher ou « Passer » l'interrompt.
// La classe « ra-intro » est posée sur <html> avant l'affichage (script dans HomeV2).
// TEMPORAIRE (aperçu) : ?entree=logo ou ?entree=texte rejoue l'écran à chaque chargement pour comparer les deux fins.
const STEMS = ["RESER", "PRE", "CONCE", "RESER"];
const FX_MS = 500; // fondu enchaîné entre deux mots (transmis au CSS par --fx)
const HOLD_MS = 150; // mot affiché
const END_MS = 450; // apparition de la fin (logo ou « architecture »)
const END_HOLD_MS = 450; // fin affichée
const OUT_MS = 500; // effacement de l'écran
export const INTRO_KEY = "ra-intro-vu";

type Ending = "logo" | "texte";

export default function V2Splash() {
    const [ending, setEnding] = useState<Ending>("logo");
    const [cur, setCur] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);
    const [entering, setEntering] = useState(true);
    const [end, setEnd] = useState(false);
    const timers = useRef<number[]>([]);
    const stageRef = useRef<HTMLDivElement>(null);
    const [logoBox, setLogoBox] = useState<{ x: number; w: number } | null>(null);

    // Fin « logo » : le logo encadré se pose exactement sur le dernier « RESERVOIR » écrit
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
        setLogoBox({ x: left - s0 - (right - left) * 0.06, w: (right - left) * 1.12 });
    }, []);

    const finish = useCallback(() => {
        timers.current.forEach((id) => window.clearTimeout(id));
        timers.current = [];
        try {
            if (!new URLSearchParams(location.search).has("entree")) localStorage.setItem(INTRO_KEY, "1");
        } catch {}
        const html = document.documentElement;
        html.classList.add("ra-intro-out");
        timers.current.push(window.setTimeout(() => html.classList.remove("ra-intro", "ra-intro-out"), OUT_MS));
    }, []);

    useEffect(() => {
        if (!document.documentElement.classList.contains("ra-intro")) return;
        const param = new URLSearchParams(location.search).get("entree");
        if (param === "texte") setEnding("texte");
        const at = (ms: number, fn: () => void) => timers.current.push(window.setTimeout(fn, ms));
        const last = STEMS.length - 1;
        let t = FX_MS;
        at(t, () => setEntering(false));
        t += HOLD_MS;
        for (let i = 1; i <= last; i++) {
            at(t, () => {
                setPrev(i - 1);
                setCur(i);
                setEntering(true);
            });
            t += FX_MS;
            at(t, () => {
                setPrev(null);
                setEntering(false);
            });
            if (i < last) t += HOLD_MS;
        }
        at(t, () => {
            placeLogo();
            setEnd(true);
        });
        t += END_MS + END_HOLD_MS;
        at(t, finish);
        const list = timers.current;
        return () => list.forEach((id) => window.clearTimeout(id));
    }, [finish, placeLogo]);

    return (
        <div
            className={`v2-splash end-${ending}${end ? " is-end" : ""}`}
            style={{ ["--fx" as string]: `${FX_MS}ms`, ["--end" as string]: `${END_MS}ms`, ["--out" as string]: `${OUT_MS}ms` }}
            onClick={finish}
        >
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
                    {ending === "texte" && <span className="v2-splash-sub">architecture</span>}
                </span>
                {ending === "logo" && (
                    <Image
                        src="/images/ui/logo_light_outline.svg"
                        alt=""
                        width={391}
                        height={87}
                        className="v2-splash-logo"
                        style={logoBox ? { left: logoBox.x, width: logoBox.w } : undefined}
                    />
                )}
            </div>
            <button type="button" className="v2-splash-skip" onClick={finish}>
                Passer
            </button>
        </div>
    );
}
