"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Effet « VOIR fixe » de l'accueil (choisi par Emeric le 2026-10-30), sur une seule ligne :
// « VOIR » reste immobile, en gras ; seul le début du mot change en fondu enchaîné devant lui :
// RESER → PRE → PERCE → ENTRE → CONCE → RESER. Puis « architecture » apparaît sous le dernier mot,
// aligné sur son bord droit. Déclenché une seule fois, quand le bloc arrive à l'écran.
const STEMS = ["RESER", "PRE", "PERCE", "ENTRE", "CONCE", "RESER"];
const HOLD_MS = 1000; // mot affiché
const TRANS_MS = 1900; // fondu enchaîné (doit correspondre à v2.css)
const LOGO_DELAY_MS = 1400; // après « architecture », avant le passage au logo encadré

// toLogo : à la fin, fondu enchaîné de gauche à droite vers le logo encadré (les cadres gagnent les lettres une à une).
export default function V2VoirCascade({ toLogo = false }: { toLogo?: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    const [run, setRun] = useState(false);
    const [cur, setCur] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);
    const [entering, setEntering] = useState(false);
    const [done, setDone] = useState(false);
    const [logo, setLogo] = useState(false);
    const [logoBox, setLogoBox] = useState<{ x: number; y: number; w: number } | null>(null);

    // Pose le logo exactement sur le RESERVOIR final : même largeur (cadres compris), cadres centrés sur les lettres
    const placeLogo = useCallback(() => {
        const box = ref.current;
        const fin = box?.querySelector<HTMLElement>(".v2-voir-sizer.is-final");
        const voir = box?.querySelector<HTMLElement>(".v2-voir-fixed");
        if (!box || !fin || !voir) return;
        const b = box.getBoundingClientRect();
        const f = fin.getBoundingClientRect();
        const v = voir.getBoundingClientRect();
        const left = f.left - b.left;
        const width = v.right - f.left;
        const w = width * 1.12;
        const h = (w * 65.25) / 293.25;
        const midY = (v.top + v.bottom) / 2 - b.top;
        setLogoBox({ x: left - width * 0.06, y: midY - h * (23 / 65.25), w });
    }, []);

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
            if (toLogo) {
                placeLogo();
                setLogo(true);
            }
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
        if (toLogo) {
            at(t + 200 + LOGO_DELAY_MS, () => {
                placeLogo();
                setLogo(true);
            });
        }
        return () => timers.forEach((id) => window.clearTimeout(id));
    }, [run, toLogo, placeLogo]);

    useEffect(() => {
        if (!logo) return;
        window.addEventListener("resize", placeLogo);
        return () => window.removeEventListener("resize", placeLogo);
    }, [logo, placeLogo]);

    const last = STEMS.length - 1;

    return (
        <div ref={ref} className={`v2-voir fx-voirfixe${logo ? " is-logo" : ""}`} role="img" aria-label="Reservoir : prévoir, percevoir, entrevoir, concevoir. Reservoir Architecture.">
            <p className="v2-voir-word" aria-hidden="true">
                <span className="v2-voir-stack">
                    {/* Débuts de mots invisibles : donnent sa largeur exacte à la pile, pour que VOIR ne bouge pas */}
                    {Array.from(new Set(STEMS)).map((st) => (
                        <span key={`sizer-${st}`} className={`v2-voir-layer v2-voir-sizer${st === STEMS[STEMS.length - 1] ? " is-final" : ""}`}>
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
            {toLogo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src="/images/ui/logo_light_outline.svg"
                    alt=""
                    aria-hidden="true"
                    className="v2-voir-logo"
                    style={logoBox ? { left: logoBox.x, top: logoBox.y, width: logoBox.w } : undefined}
                />
            )}
        </div>
    );
}
