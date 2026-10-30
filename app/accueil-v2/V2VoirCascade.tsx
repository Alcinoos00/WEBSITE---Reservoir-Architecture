"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Effet « VOIR » de l'accueil (2026-10-30), sur une seule ligne, tout en fondus doux :
// chaque mot apparaît par un balayage lent de gauche à droite, reste affiché, puis s'efface dans le même mouvement
// pendant que le suivant apparaît à la même place. « VOIR » est toujours en gras.
// À la fin, « architecture » apparaît en fondu sous le dernier RESERVOIR, plus petit, comme sur le logo.
// Déclenché une seule fois, quand le bloc arrive à l'écran.
const WORDS = ["RESERVOIR", "VOIR", "PRÉVOIR", "PERCEVOIR", "ENTREVOIR", "CONCEVOIR", "RESERVOIR"];
const HOLD_MS = 1000; // mot affiché
const WIPE_MS = 1900; // fondu enchaîné horizontal (doit correspondre à v2.css)

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
    const [started, setStarted] = useState(false);
    const [cur, setCur] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);
    const [entering, setEntering] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const last = WORDS.length - 1;
        const timers: number[] = [];
        const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setStarted(true);
            setCur(last);
            setDone(true);
            return;
        }

        const play = () => {
            // Premier mot : apparition par balayage, sans mot sortant
            setStarted(true);
            setEntering(true);
            let t = WIPE_MS;
            at(t, () => setEntering(false));
            t += HOLD_MS;
            for (let i = 1; i <= last; i++) {
                at(t, () => {
                    setPrev(i - 1);
                    setCur(i);
                    setEntering(true);
                });
                t += WIPE_MS;
                at(t, () => {
                    setPrev(null);
                    setEntering(false);
                });
                if (i < last) t += HOLD_MS;
            }
            at(t + 200, () => setDone(true));
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

    return (
        <div ref={ref} className="v2-voir" role="img" aria-label="Reservoir : voir, prévoir, percevoir, entrevoir, concevoir. Reservoir Architecture.">
            <p className="v2-voir-word" aria-hidden="true">
                {prev !== null && (
                    <span key={`out-${prev}`} className="v2-voir-layer is-out">
                        <Word text={WORDS[prev]} />
                    </span>
                )}
                <span key={`in-${cur}`} className={`v2-voir-layer${!started ? " is-hidden" : entering ? " is-in" : ""}`}>
                    <Word text={WORDS[cur]} />
                </span>
            </p>
            <p className={`v2-voir-sub${done ? " is-on" : ""}`} aria-hidden="true">
                architecture
            </p>
        </div>
    );
}
