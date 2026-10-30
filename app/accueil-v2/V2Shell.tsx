import type { ReactNode } from "react";
import { Jost, Josefin_Sans } from "next/font/google";
import V2Motion from "./V2Motion";
import V2Nav from "./V2Nav";
import V2Footer from "./V2Footer";

import "./v2.css";

// Texte courant, boutons et menu en Jost ; titres en Josefin Sans (choix d'Emeric le 2026-10-30, à la place de Manrope).
const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--v2-font" });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--tf-josefin" });

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
