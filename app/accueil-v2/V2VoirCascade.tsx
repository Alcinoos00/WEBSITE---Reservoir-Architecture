"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Effet « VOIR » de l'accueil (2026-10-30), sur une seule ligne :
// le premier RESERVOIR s'écrit lettre par lettre ; ensuite chaque mot reste une seconde, puis un fondu horizontal
// (de gauche à droite) l'efface en faisant apparaître le mot suivant à la même place. « VOIR » est toujours en gras.
// À la fin, « architecture » s'écrit sous le dernier RESERVOIR, plus petit, comme sur le logo.
// Déclenché une seule fois, quand le bloc arrive à l'écran.
const WORDS = ["RESERVOIR", "VOIR", "PRÉVOIR", "PERCEVOIR", "ENTREVOIR", "CONCEVOIR", "RESERVOIR"];
const SUB = "architecture";
const LETTER_MS = 90; // écriture du premier mot
const HOLD_MS = 1000; // mot affiché une seconde
const WIPE_MS = 1600; // fondu horizontal (doit correspondre à v2.css)

function Word({ text }: { text: string }): ReactNode {
    return (
        <>
            {text.slice(0, -4)}
            <strong>{text.slice(-4)}</strong>
        </>
    );
}

export default function V2VoirCascade() {
    const ref = useRef<HTMLDivElement>(null);
    const [cur, setCur] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);
    const [chars, setChars] = useState(0); // lettres visibles du premier mot
    const [sub, setSub] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const last = WORDS.length - 1;
        const timers: number[] = [];
        const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setCur(last);
            setChars(WORDS[last].length);
            setSub(SUB.length);
            return;
        }

        const play = () => {
            let t = 0;
            for (let c = 1; c <= WORDS[0].length; c++) at(c * LETTER_MS, () => setChars(c));
            t = WORDS[0].length * LETTER_MS + HOLD_MS;
            for (let i = 1; i <= last; i++) {
                at(t, () => {
                    setPrev(i - 1);
                    setCur(i);
                });
                t += WIPE_MS;
                at(t, () => setPrev(null));
                if (i < last) t += HOLD_MS;
            }
            for (let c = 1; c <= SUB.length; c++) at(t + 300 + c * 60, () => setSub(c));
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

    const first = cur === 0;

    return (
        <div ref={ref} className="v2-voir" role="img" aria-label="Reservoir : voir, prévoir, percevoir, entrevoir, concevoir. Reservoir Architecture.">
            <p className="v2-voir-word" aria-hidden="true">
                {prev !== null && (
                    <span key={`out-${prev}`} className="v2-voir-layer is-out">
                        <Word text={WORDS[prev]} />
                    </span>
                )}
                <span key={`in-${cur}`} className={`v2-voir-layer${prev !== null ? " is-in" : ""}`}>
                    {first ? (
                        <>
                            {WORDS[0].slice(0, chars).slice(0, WORDS[0].length - 4)}
                            <strong>{WORDS[0].slice(0, chars).slice(WORDS[0].length - 4)}</strong>
                        </>
                    ) : (
                        <Word text={WORDS[cur]} />
                    )}
                    {"​"}
                </span>
            </p>
            <p className="v2-voir-sub" aria-hidden="true">
                {SUB.slice(0, sub)}
                {"​"}
            </p>
        </div>
    );
}
