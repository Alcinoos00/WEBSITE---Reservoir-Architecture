"use client";

import { useEffect, useRef, useState } from "react";

// Effet « VOIR fixe » de l'accueil (choisi par Emeric le 2026-10-30), sur une seule ligne :
// « VOIR » reste immobile, en gras ; seul le début du mot change en fondu enchaîné devant lui :
// RESER → PRE → PERCE → ENTRE → CONCE → RESER. Puis « architecture » apparaît sous le dernier mot,
// aligné sur son bord droit. Déclenché une seule fois, quand le bloc arrive à l'écran.
const STEMS = ["RESER", "PRE", "PERCE", "ENTRE", "CONCE", "RESER"];
const HOLD_MS = 1000; // mot affiché
const TRANS_MS = 1900; // fondu enchaîné (doit correspondre à v2.css)

export default function V2VoirCascade() {
    const ref = useRef<HTMLDivElement>(null);
    const [run, setRun] = useState(false);
    const [cur, setCur] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);
    const [entering, setEntering] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    io.disconnect();
                    setRun(true);
                }
            },
            { threshold: 0.6 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        if (!run) return;
        const last = STEMS.length - 1;
        const timers: number[] = [];
        const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setCur(last);
            setDone(true);
            return;
        }
        setEntering(true);
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
            if (i < last) t += HOLD_MS;
        }
        at(t + 200, () => setDone(true));
        return () => timers.forEach((id) => window.clearTimeout(id));
    }, [run]);

    const last = STEMS.length - 1;

    return (
        <div ref={ref} className="v2-voir fx-voirfixe" role="img" aria-label="Reservoir : prévoir, percevoir, entrevoir, concevoir. Reservoir Architecture.">
            <p className="v2-voir-word" aria-hidden="true">
                <span className="v2-voir-stack">
                    {/* Débuts de mots invisibles : donnent sa largeur exacte à la pile, pour que VOIR ne bouge pas */}
                    {Array.from(new Set(STEMS)).map((st) => (
                        <span key={`sizer-${st}`} className="v2-voir-layer v2-voir-sizer">
                            {st}
                        </span>
                    ))}
                    {prev !== null && (
                        <span key={`out-${prev}`} className="v2-voir-layer is-out">
                            {STEMS[prev]}
                        </span>
                    )}
                    <span key={`in-${cur}`} className={`v2-voir-layer${!run ? " is-hidden" : entering ? " is-in" : ""}`}>
                        {STEMS[cur]}
                    </span>
                </span>
                <strong className={`v2-voir-fixed${run ? "" : " is-hidden"}`}>VOIR</strong>
                {/* « architecture » aligné sur le bord droit de RESERVOIR (fin du R de VOIR) */}
                {cur === last && <span className={`v2-voir-sub${done ? " is-on" : ""}`}>architecture</span>}
            </p>
        </div>
    );
}
