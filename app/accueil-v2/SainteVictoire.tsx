// MIS DE CÔTÉ (2026-10-19) : validé par Emeric mais pas affiché pour l'instant.
// Pour le remettre en fond derrière « RESERVOIR ARCHITECTURE » : dans HomeV2.tsx, ajouter
// <SainteVictoire variant="plans" className="v2-sv v2-sv-plans" /> en premier enfant de .v2-hero-top
// et data-sv="plans" sur .v2-hero-top (styles déjà dans v2.css, bloc « Illustration Sainte-Victoire »).
// Sainte-Victoire vue d'Aix (profil « à la Cézanne »), avec plans successifs : montagne lointaine,
// montagne et ses bancs de roche, collines, pins parasols et cyprès au premier plan. Purement décoratif.
// Deux rendus : aplats « plans » (retenu) et trame de points.

const W = 600;
const H = 200;

// Points clés de la crête, puis crête détaillée (petites aspérités rocheuses, tirage déterministe).
const KEY: [number, number][] = [
    [0, 176], [50, 170], [100, 162], [140, 150], [168, 134], [188, 112], [204, 88], [216, 66], [226, 50],
    [233, 42], [240, 47], [252, 60], [266, 63], [284, 68], [300, 65], [322, 72], [348, 76], [378, 82],
    [408, 88], [438, 95], [468, 107], [498, 121], [528, 136], [560, 152], [600, 164],
];

function rng(seed: number) {
    let s = seed;
    return () => {
        s = (s * 16807) % 2147483647;
        return s / 2147483647;
    };
}

function jag(pts: [number, number][], steps: number, amp: number, seed: number): [number, number][] {
    const r = rng(seed);
    const out: [number, number][] = [];
    for (let i = 0; i < pts.length - 1; i++) {
        const [x0, y0] = pts[i];
        const [x1, y1] = pts[i + 1];
        for (let j = 0; j < steps; j++) {
            const t = j / steps;
            const n = j === 0 ? 0 : (r() - 0.5) * amp * (1 + Math.abs(y1 - y0) / 20);
            out.push([x0 + (x1 - x0) * t, y0 + (y1 - y0) * t + n]);
        }
    }
    out.push(pts[pts.length - 1]);
    return out;
}

const RIDGE = jag(KEY, 4, 2.2, 7);
const FAR = jag(KEY.map(([x, y]) => [x * 0.9 - 40, H - (H - y) * 0.72] as [number, number]).concat([[W, 170]]), 3, 1.6, 11);
const HILLS = jag(
    [[0, 178], [70, 172], [140, 179], [210, 168], [290, 175], [360, 166], [440, 173], [520, 165], [600, 170]],
    5, 1.4, 23,
);

const d = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
// À gauche, chaque aplat redescend en pente douce jusqu'au sol (hors du cadre de dessin),
// pour que le relief s'éteigne au lieu d'être coupé ; le fondu CSS termine le travail.
const area = (pts: [number, number][]) => {
    const [x0, y0] = pts[0];
    return `M${x0 - 420},${H} Q${x0 - 170},${y0.toFixed(1)} ${x0},${y0.toFixed(1)} L${d(pts).slice(1)} L${W},${H} Z`;
};

// Bancs de roche de la face sud : traits obliques sous la crête, entre le sommet et l'est.
const STRATA = Array.from({ length: 9 }, (_, i) => {
    const x = 214 + i * 34;
    const top = KEY.reduce((acc, [kx, ky], k) => (kx <= x && KEY[k + 1] && KEY[k + 1][0] > x ? ky + ((KEY[k + 1][1] - ky) * (x - kx)) / (KEY[k + 1][0] - kx) : acc), 0);
    return `M${x},${top + 6} l${-14 - i},${22 + i * 1.5}`;
});

// Pins parasols (tronc + houppier plat) et cyprès (fuseau), posés sur les collines.
const PINES: [number, number, number][] = [[70, 174, 1], [112, 178, 0.75], [330, 172, 1.1], [372, 168, 0.8], [488, 171, 0.95], [556, 168, 1.1]];
const CYPRESS: [number, number, number][] = [[148, 179, 1], [158, 180, 0.75], [420, 172, 1.05], [432, 173, 0.8], [590, 170, 0.9]];

// Pin parasol : tronc légèrement penché + houppier plat en trois masses. Cyprès : fuseau étroit.
const pine = ([x, y, s]: [number, number, number]) => {
    const k = s * 1.7;
    const tx = x - 2 * k;
    const ty = y - 16 * k;
    return [
        `M${x - 0.9 * k},${y} L${tx - 0.5 * k},${ty} L${tx + 0.7 * k},${ty} L${x + 0.9 * k},${y} Z`,
        `M${tx - 13 * k},${ty + 1 * k} c${1 * k},${-5 * k} ${7 * k},${-7 * k} ${12 * k},${-6 * k} c${3 * k},${-3 * k} ${10 * k},${-3 * k} ${13 * k},${0} c${4 * k},${0} ${6 * k},${3 * k} ${4 * k},${6 * k} c${-8 * k},${2 * k} ${-21 * k},${2 * k} ${-29 * k},${0} Z`,
    ].join(" ");
};
const cypress = ([x, y, s]: [number, number, number]) => {
    const k = s * 1.6;
    return `M${x},${y} c${-3.8 * k},${-7 * k} ${-3.6 * k},${-20 * k} 0,${-32 * k} c${3.6 * k},${12 * k} ${3.8 * k},${25 * k} 0,${32 * k} Z`;
};

const TREES = [...PINES.map(pine), ...CYPRESS.map(cypress)].join(" ");
const CROSS = "M233,42 v-9 M230,36 h6"; // Croix de Provence au sommet

export type SvStyle = "plans" | "trame";
export const SV_STYLES: { id: SvStyle; label: string }[] = [
    { id: "plans", label: "Plans" },
    { id: "trame", label: "Trame" },
];

// Bandes horizontales de trame : points plus gros vers le bas (effet de demi-teinte).
const BANDS = [
    { y: 30, h: 40, r: 0.55 },
    { y: 70, h: 30, r: 0.8 },
    { y: 100, h: 30, r: 1.05 },
    { y: 130, h: 30, r: 1.3 },
    { y: 160, h: 40, r: 1.6 },
];

export default function SainteVictoire({ variant, className }: { variant: SvStyle; className?: string }) {
    const common = { className, viewBox: `0 0 ${W} ${H}`, fill: "none", "aria-hidden": true, focusable: false, preserveAspectRatio: "xMaxYMax meet", overflow: "visible" } as const;

    if (variant === "plans") {
        return (
            <svg {...common}>
                <path d={area(FAR)} fill="#f1eee8" />
                <path d={area(RIDGE)} fill="#e6e1d7" />
                <g stroke="#d3ccbe" strokeWidth={0.8} strokeLinecap="round" vectorEffect="non-scaling-stroke">
                    {STRATA.map((s) => <path key={s} d={s} />)}
                </g>
                <path d={d(RIDGE)} stroke="#cfc7b8" strokeWidth={1} vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
                <path d={CROSS} stroke="#bdb4a3" strokeWidth={1} vectorEffect="non-scaling-stroke" />
                <path d={area(HILLS)} fill="#dcd5c8" />
                <path d={TREES} fill="#c8bfae" />
            </svg>
        );
    }

    return (
        <svg {...common}>
            <defs>
                {BANDS.map((b, i) => (
                    <pattern key={i} id={`sv-dot-${i}`} width="5" height="5" patternUnits="userSpaceOnUse">
                        <circle cx="2.5" cy="2.5" r={b.r} fill="currentColor" />
                    </pattern>
                ))}
                <pattern id="sv-dot-far" width="5" height="5" patternUnits="userSpaceOnUse">
                    <circle cx="2.5" cy="2.5" r="0.45" fill="currentColor" />
                </pattern>
                <clipPath id="sv-clip-ridge"><path d={area(RIDGE)} /></clipPath>
            </defs>
            <path d={area(FAR)} fill="url(#sv-dot-far)" />
            <g clipPath="url(#sv-clip-ridge)">
                <rect x="0" y="0" width={W} height={H} fill="#fff" />
                {BANDS.map((b, i) => <rect key={i} x="0" y={b.y} width={W} height={b.h} fill={`url(#sv-dot-${i})`} />)}
            </g>
            <path d={d(RIDGE)} stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
            <path d={CROSS} stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" />
            <path d={area(HILLS)} fill="#fff" />
            <path d={area(HILLS)} fill="url(#sv-dot-4)" />
            <path d={TREES} fill="currentColor" />
        </svg>
    );
}
