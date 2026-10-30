"use client";

import StyleSwitch from "./StyleSwitch";

// TEMPORAIRE (aperçu du 2026-10-30) : comparer des polices pour le texte courant. À retirer avant publication.
const OPTIONS = [
    { id: "actuelle", label: "Manrope" },
    { id: "jost", label: "Jost" },
    { id: "dmsans", label: "DM Sans" },
    { id: "sourceserif", label: "Source Serif" },
];

export default function BodyFontSwitch() {
    return <StyleSwitch target=".v2" attr="bf" storageKey="v2-body-font" options={OPTIONS} label="Police du texte" className="v2-tf-switch" />;
}
