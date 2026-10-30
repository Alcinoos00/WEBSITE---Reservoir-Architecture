"use client";

import StyleSwitch from "./StyleSwitch";

// TEMPORAIRE (aperçu du 2026-10-30) : comparer des polices pour les titres. À retirer avant publication.
const OPTIONS = [
    { id: "actuelle", label: "Actuelle" },
    { id: "cormorant", label: "Cormorant" },
    { id: "italiana", label: "Italiana" },
    { id: "barlow", label: "Barlow" },
    { id: "josefin", label: "Josefin" },
];

export default function TitleFontSwitch() {
    return <StyleSwitch target=".v2" attr="tf" storageKey="v2-title-font" options={OPTIONS} label="Police des titres" className="v2-tf-switch" />;
}
