// Coordonnées approximatives (centre de la commune) des projets, pour la vue « Carte » de la v2.
// Les projets hors du cadre Gard / Hérault / Bouches-du-Rhône / Vaucluse n'y figurent pas.
export const PROJECT_GEO: Record<string, [number, number]> = {
    "villa-f": [43.795, 4.378], // Caissargues
    "villa-p1": [43.837, 4.36], // Nîmes
    "villa-s": [43.803, 4.258], // Langlade
    "villa-l": [43.837, 4.36],
    "villa-p2": [43.837, 4.36],
    "villa-v": [43.716, 4.088], // Vérargues
    "villa-c": [43.837, 4.36],
    "villa-t": [43.529, 5.447], // Aix-en-Provence
    "maison-g": [43.685, 4.209], // Aimargues
    samaritaine: [43.837, 4.36],
    jacou: [43.661, 3.911],
    romi: [43.976, 4.69], // Rochefort-du-Gard
    vacquerolles: [43.837, 4.36],
    "martin-pierre": [43.837, 4.36],
    trentini: [43.837, 4.36],
    wauquiez: [43.519, 4.13], // Port-Camargue
    "food-village": [43.837, 4.36],
    puyricard: [43.586, 5.418],
    denim: [43.837, 4.36],
    "anha-ciudad": [43.949, 4.806], // Avignon
    "fournil-st-honore": [43.611, 3.877], // Montpellier
    garons: [43.769, 4.43],
    "super-u": [43.924, 4.267], // La Calmette
    "regie-des-eaux": [43.529, 5.447],
    vitrolles: [43.46, 5.248],
    gendarmerie: [43.452, 5.414], // Bouc-Bel-Air
    cucurron: [43.773, 5.439],
    "la-tour-daigues": [43.726, 5.55],
    clapiers: [43.658, 3.888],
    grans: [43.607, 5.063],
    capitainerie: [43.296, 5.37], // Marseille
    lodeve: [43.732, 3.319],
    ferrigno: [43.387, 4.803], // Port-Saint-Louis-du-Rhône
    "salon-de-provence": [43.64, 5.097],
};

// Villes repères affichées en fond de carte.
export const GEO_LANDMARKS: { name: string; at: [number, number] }[] = [
    { name: "Montpellier", at: [43.611, 3.877] },
    { name: "Nîmes", at: [43.837, 4.36] },
    { name: "Avignon", at: [43.949, 4.806] },
    { name: "Aix-en-Provence", at: [43.529, 5.447] },
    { name: "Marseille", at: [43.296, 5.37] },
];

// Cadre de la carte (degrés) et conversion en pourcentages, avec la latitude corrigée (cos 43,6°).
export const GEO_BOX = { west: 3.15, east: 5.75, south: 43.22, north: 44.06 };
export function geoToPct([lat, lon]: [number, number]) {
    const x = ((lon - GEO_BOX.west) / (GEO_BOX.east - GEO_BOX.west)) * 100;
    const y = ((GEO_BOX.north - lat) / (GEO_BOX.north - GEO_BOX.south)) * 100;
    return { x, y };
}
// Rapport largeur / hauteur réel du cadre (1° de longitude ≈ 0,724 × 1° de latitude ici).
export const GEO_RATIO = ((GEO_BOX.east - GEO_BOX.west) * 0.724) / (GEO_BOX.north - GEO_BOX.south);

// Tracés simplifiés pour le fond de carte (lat, lon) : côte méditerranéenne, Rhône, Durance.
export const GEO_COAST: [number, number][] = [
    [43.43, 3.15], [43.47, 3.6], [43.53, 3.93], [43.56, 4.08], [43.53, 4.14], [43.45, 4.43], [43.38, 4.58],
    [43.37, 4.8], [43.4, 4.93], [43.33, 5.04], [43.33, 5.11], [43.36, 5.31], [43.29, 5.36], [43.21, 5.45], [43.2, 5.75],
];
export const GEO_RHONE: [number, number][] = [
    [44.06, 4.72], [43.95, 4.8], [43.81, 4.66], [43.68, 4.63], [43.55, 4.7], [43.33, 4.84],
];
export const GEO_DURANCE: [number, number][] = [
    [43.92, 4.85], [43.85, 5.05], [43.76, 5.2], [43.73, 5.3], [43.7, 5.45], [43.68, 5.75],
];
export function geoPath(pts: [number, number][]) {
    return pts.map((g, i) => {
        const { x, y } = geoToPct(g);
        return `${i ? "L" : "M"}${x.toFixed(2)},${y.toFixed(2)}`;
    }).join(" ");
}
