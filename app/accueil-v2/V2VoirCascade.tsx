"use client";

import { useEffect, useRef, useState } from "react";

// Effet « stop motion » de l'accueil (2026-10-30), sur une seule ligne :
// chaque mot s'écrit lettre par lettre (« VOIR » en gras), reste affiché une seconde, puis s'efface en fondu pour le suivant.
// Le dernier RESERVOIR reste, et « architecture » s'écrit dessous, plus petit, comme sur le logo.
// Déclenché une seule fois, quand le bloc arrive à l'écran.
const WORDS = ["RESERVOIR", "VOIR", "PRÉVOIR", "PERCEVOIR", "ENTREVOIR", "CONCEVOIR", "RESERVOIR"];
const SUB = "architecture";
const LETTER_MS = 90; // une image par lettre
const HOLD_MS = 1000; // mot terminé : affiché une seconde
const FADE_MS = 700; // fondu de sortie
const GAP_MS = 120; // ligne vide entre deux mots

export default function V2VoirCascade() {
    const ref = useRef<HTMLDivElement>(null);
    const [word, setWord] = useState(0);
    const [chars, setChars] = useState(0);
    const [sub, setSub] = useState(0);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const last = WORDS.length - 1;
        const timers: number[] = [];
        const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setWord(last);
            setChars(WORDS[last].length);
            setSub(SUB.length);
            return;
        }

        const play = () => {
            let t = 0;
            WORDS.forEach((w, i) => {
                at(t, () => {
                    setWord(i);
                    setChars(0);
                });
                for (let c = 1; c <= w.length; c++) at(t + c * LETTER_MS, () => setChars(c));
                t += w.length * LETTER_MS + HOLD_MS;
                if (i < last) {
                    at(t, () => setFading(true));
                    t += FADE_MS;
                    at(t, () => {
                        setChars(0);
                        setFading(false);
                    });
                    t += GAP_MS;
                }
            });
            const start = t - HOLD_MS + 300;
            for (let c = 1; c <= SUB.length; c++) at(start + c * 60, () => setSub(c));
        };

        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    io.disconnect();
                    play();
                }
            },
            { threshold: 0.6 },
        );
        io.observe(el);
        return () => {
            io.disconnect();
            timers.forEach((id) => window.clearTimeout(id));
        };
    }, []);

    const w = WORDS[word];
    const stemLen = w.length - 4;
    const shown = w.slice(0, chars);

    return (
        <div ref={ref} className="v2-voir" role="img" aria-label="Reservoir : voir, prévoir, percevoir, entrevoir, concevoir. Reservoir Architecture.">
            <p className={`v2-voir-word${fading ? " is-fading" : ""}`} aria-hidden="true">
                {shown.slice(0, stemLen)}
                <strong>{shown.slice(stemLen)}</strong>
                {"​"}
            </p>
            <p className="v2-voir-sub" aria-hidden="true">
                {SUB.slice(0, sub)}
                {"​"}
            </p>
        </div>
    );
}
