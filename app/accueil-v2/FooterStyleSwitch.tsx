"use client";

import StyleSwitch from "./StyleSwitch";

// TEMPORAIRE (aperçu du 2026-10-30) : comparer deux habillages du pied de page. À retirer avant publication.
const OPTIONS = [
    { id: "cadres", label: "Titres encadrés" },
    { id: "noir", label: "Fond noir" },
];

export default function FooterStyleSwitch() {
    return <StyleSwitch target=".v2-foot" attr="foot" storageKey="v2-footer-style" options={OPTIONS} label="Style du pied de page" className="v2-foot-switch" />;
}
