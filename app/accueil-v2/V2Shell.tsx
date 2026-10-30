import type { ReactNode } from "react";
import { Manrope, Josefin_Sans, Jost, DM_Sans, Source_Serif_4 } from "next/font/google";
import BodyFontSwitch from "./BodyFontSwitch";
import V2Motion from "./V2Motion";
import V2Nav from "./V2Nav";
import V2Footer from "./V2Footer";

import "./v2.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--v2-font" });
// Titres en Josefin Sans (choisie par Emeric le 2026-10-30).
const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["300"], variable: "--tf-josefin" });
// TEMPORAIRE : polices candidates pour le texte courant (comparaison sur l'aperçu). À retirer avant publication.
const jost = Jost({ subsets: ["latin"], weight: ["400", "500"], variable: "--bf-jost", preload: false });
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--bf-dmsans", preload: false });
const sourceserif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600"], variable: "--bf-sourceserif", preload: false });

// Habillage commun à toutes les pages v2 : police, animations, barre du haut et pied de page.
// La barre et le pied de page du site actuel sont masqués par v2.css sur ces pages.
export default function V2Shell({ children }: { children: ReactNode }) {
    return (
        <div className={`v2 ${manrope.variable} ${josefin.variable} ${jost.variable} ${dmsans.variable} ${sourceserif.variable}`}>
            <V2Motion />
            <V2Nav />
            {children}
            <V2Footer />
            <BodyFontSwitch />
        </div>
    );
}
