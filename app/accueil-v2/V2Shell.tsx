import type { ReactNode } from "react";
import localFont from "next/font/local";
import V2Motion from "./V2Motion";
import V2Nav from "./V2Nav";
import V2Footer from "./V2Footer";

import "./v2.css";

// Texte courant, boutons et menu en Jost ; titres en Josefin Sans (choix d'Emeric le 2026-10-30, à la place de Manrope).
// Polices hébergées sur le site (2026-11-01) au lieu d'être téléchargées depuis Google Fonts à chaque mise en ligne :
// deux mises en ligne Vercel avaient échoué faute de pouvoir télécharger les polices.
// Fichiers : app/fonts (versions variables, jeu de caractères latin, licence SIL OFL jointe).
const jost = localFont({
    src: "../fonts/jost-latin-var.woff",
    weight: "100 900",
    style: "normal",
    display: "swap",
    variable: "--v2-font",
    fallback: ["system-ui", "Arial", "sans-serif"],
});
const josefin = localFont({
    src: "../fonts/josefin-sans-latin-var.woff",
    weight: "100 700",
    style: "normal",
    display: "swap",
    variable: "--tf-josefin",
    fallback: ["system-ui", "Arial", "sans-serif"],
});

// Habillage commun à toutes les pages v2 : police, animations, barre du haut et pied de page.
// La barre et le pied de page du site actuel sont masqués par v2.css sur ces pages.
export default function V2Shell({ children }: { children: ReactNode }) {
    return (
        <div className={`v2 ${jost.variable} ${josefin.variable}`}>
            <V2Motion />
            <V2Nav />
            {children}
            <V2Footer />
        </div>
    );
}
