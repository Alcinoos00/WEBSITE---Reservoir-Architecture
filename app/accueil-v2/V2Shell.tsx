import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import V2Motion from "./V2Motion";
import V2Nav from "./V2Nav";
import V2Footer from "./V2Footer";
import StyleSwitch from "./StyleSwitch";

// Largeurs max du contenu à comparer (sélecteur temporaire en bas à gauche, retenu d'une page à l'autre).
const WIDTHS = [
    { id: "1200", label: "1200" },
    { id: "1320", label: "1320" },
    { id: "1440", label: "1440" },
    { id: "1600", label: "1600" },
    { id: "fluid", label: "Marges 5 %" },
];
import "./v2.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--v2-font" });

// Habillage commun à toutes les pages v2 : police, animations, barre du haut et pied de page.
// La barre et le pied de page du site actuel sont masqués par v2.css sur ces pages.
export default function V2Shell({ children }: { children: ReactNode }) {
    return (
        <div className={`v2 ${manrope.variable}`} data-width="1200">
            <StyleSwitch target=".v2" attr="width" storageKey="v2-width" options={WIDTHS} className="v2-switch-width" label="Largeur du contenu" />
            <V2Motion />
            <V2Nav />
            {children}
            <V2Footer />
        </div>
    );
}
