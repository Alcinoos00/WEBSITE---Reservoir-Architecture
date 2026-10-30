import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import V1Links from "./V1Links";

// Ancienne version du site, gardée en ligne sous /v1 pour comparer. Hors index :
// les pages gardent leur balise canonique vers l'adresse en ligne (sans /v1).
// Police de la v1, chargée seulement ici : le site v2 utilise Manrope (gain d'un fichier de police sur chaque page).
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

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
