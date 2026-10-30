"use client";

import { useEffect, useRef, useState } from "react";

// Effet « VOIR » de l'accueil, sur une seule ligne : RESERVOIR → VOIR → PREVOIR → PERCEVOIR → ENTREVOIR → CONCEVOIR → RESERVOIR,
// « VOIR » toujours en gras, puis « architecture » en petit sous le dernier mot, comme sur le logo.
// Déclenché une seule fois, quand le bloc arrive à l'écran.
// TEMPORAIRE (aperçu du 2026-10-30) : sélecteur pour comparer 6 transitions. À retirer avant publication.
const WORDS = ["RESERVOIR", "VOIR", "PREVOIR", "PERCEVOIR", "ENTREVOIR", "CONCEVOIR", "RESERVOIR"];
const HOLD_MS = 1000; // mot affiché
const TRANS_MS = 1900; // durée d'une transition (doit correspondre à v2.css)

const EFFECTS = [
    { id: "balayage", label: "Balayage" },
    { id: "voirfixe", label: "VOIR fixe" },
    { id: "focus", label: "Mise au point" },
    { id: "tracking", label: "Lettres" },
    { id: "montee", label: "Montée" },
    { id: "reveal", label: "Révélation" },
] as const;
type Fx = (typeof EFFECTS)[number]["id"];

const stem = (w: string) => w.slice(0, -4);

export default function V2VoirCascade() {
    const ref = useRef<HTMLDivElement>(null);
    const [fx, setFx] = useState<Fx>("balayage");
    const [run, setRun] = useState(0); // 0 = pas encore lancé
    const [cur, setCur] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);
    const [entering, setEntering] = useState(false);
    const [started, setStarted] = useState(false);
    const [done, setDone] = useState(false);

    // Premier lancement quand le bloc arrive à l'écran
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    io.disconnect();
                    setRun((r) => (r === 0 ? 1 : r));
                }
            },
            { threshold: 0.6 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        if (run === 0) return;
        const last = WORDS.length - 1;
        const timers: number[] = [];
        const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

        setPrev(null);
        setCur(0);
        setDone(false);
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setStarted(true);
            setEntering(false);
            setCur(last);
            setDone(true);
            return;
        }
        setStarted(true);
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
    }, [run, fx]);

    const voirFixe = fx === "voirfixe";
    const layerText = (w: string) =>
        voirFixe ? (
            stem(w)
        ) : (
            <>
                {stem(w)}
                <strong>VOIR</strong>
            </>
        );

    return (
        <div ref={ref} className={`v2-voir fx-${fx}`}>
            <div role="img" aria-label="Reservoir : voir, prévoir, percevoir, entrevoir, concevoir. Reservoir Architecture.">
                <p className="v2-voir-word" aria-hidden="true">
                    <span className="v2-voir-stack">
                        {prev !== null && (
                            <span key={`out-${run}-${prev}`} className="v2-voir-layer is-out">
                                {layerText(WORDS[prev])}
                            </span>
                        )}
                        <span
                            key={`in-${run}-${cur}`}
                            className={`v2-voir-layer${!started ? " is-hidden" : entering ? " is-in" : ""}`}
                        >
                            {layerText(WORDS[cur])}
                            {"​"}
                        </span>
                    </span>
                    {voirFixe && <strong className={`v2-voir-fixed${started ? "" : " is-hidden"}`}>VOIR</strong>}
                </p>
                <p className={`v2-voir-sub${done ? " is-on" : ""}`} aria-hidden="true">
                    architecture
                </p>
            </div>
            <div className="v2-voir-switch" role="group" aria-label="Choix de l'effet (aperçu)">
                {EFFECTS.map((e) => (
                    <button
                        key={e.id}
                        type="button"
                        className={fx === e.id ? "is-on" : ""}
                        onClick={() => {
                            setFx(e.id);
                            setRun((r) => r + 1);
                        }}
                    >
                        {e.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
