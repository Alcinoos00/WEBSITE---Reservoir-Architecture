import type { ReactNode } from "react";
import { Manrope, Cormorant_Garamond, Italiana, Barlow_Condensed, Josefin_Sans } from "next/font/google";
import TitleFontSwitch from "./TitleFontSwitch";
import V2Motion from "./V2Motion";
import V2Nav from "./V2Nav";
import V2Footer from "./V2Footer";

import "./v2.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--v2-font" });
// TEMPORAIRE : polices candidates pour les titres (comparaison sur l'aperçu), chargées seulement si utilisées.
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500"], variable: "--tf-cormorant", preload: false });
const italiana = Italiana({ subsets: ["latin"], weight: ["400"], variable: "--tf-italiana", preload: false });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["400"], variable: "--tf-barlow", preload: false });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["300"], variable: "--tf-josefin", preload: false });

// Habillage commun à toutes les pages v2 : police, animations, barre du haut et pied de page.
// La barre et le pied de page du site actuel sont masqués par v2.css sur ces pages.
export default function V2Shell({ children }: { children: ReactNode }) {
    return (
        <div className={`v2 ${manrope.variable} ${cormorant.variable} ${italiana.variable} ${barlow.variable} ${josefin.variable}`}>
            <V2Motion />
            <V2Nav />
            {children}
            <V2Footer />
            <TitleFontSwitch />
        </div>
    );
}
