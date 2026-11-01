import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import V1Links from "./V1Links";

// Ancienne version du site, gardée en ligne sous /v1 pour comparer. Hors index :
// les pages gardent leur balise canonique vers l'adresse en ligne (sans /v1).
// Police de la v1, chargée seulement ici : le site v2 utilise Jost et Josefin Sans (gain d'un fichier de police sur chaque page).
// Hébergée sur le site (app/fonts) au lieu de Google Fonts, comme les polices de la v2.
const inter = localFont({
    src: "../fonts/inter-latin-var.woff",
    weight: "100 900",
    style: "normal",
    display: "swap",
    variable: "--font-inter",
    fallback: ["system-ui", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
    title: { default: "Site v1 | Reservoir Architecture", template: "%s | v1 Reservoir Architecture" },
    robots: { index: false, follow: false },
};

export default function V1Layout({ children }: { children: ReactNode }) {
    return (
        <div className={inter.variable} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            <V1Links />
            <Navbar />
            <div className="main-container">
                <div className="content-wrapper">{children}</div>
                <Footer />
            </div>
        </div>
    );
}
