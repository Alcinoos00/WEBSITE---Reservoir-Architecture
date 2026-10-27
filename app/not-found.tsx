import type { Metadata } from "next";
import Link from "next/link";
import V2Shell from "./accueil-v2/V2Shell";

// Next ajoute lui-même <meta name="robots" content="noindex"> sur la page 404.
// Rendue hors du groupe (site) : l'habillage v2 est donc posé ici.
export const metadata: Metadata = {
    title: "Page introuvable",
};

const LINKS = [
    { href: "/", label: "Accueil" },
    { href: "/villas", label: "Villas" },
    { href: "/logements", label: "Logements" },
    { href: "/commerces", label: "Commerces" },
    { href: "/equipements", label: "Équipements" },
    { href: "/contact", label: "Contact" },
];

export default function NotFound() {
    return (
        <div className="main-container">
            <div className="content-wrapper">
                <V2Shell>
                    <main>
                        <section className="v2-section v2-page-top">
                            <div className="v2-stack v2-stack-top">
                                <p className="v2-tag">Erreur 404</p>
                                <h1 className="v2-h2">Cette page n&apos;existe pas</h1>
                                <p className="v2-small">
                                    L&apos;adresse a peut-être changé. Les projets de l&apos;agence restent accessibles depuis les pages ci-dessous.
                                </p>
                            </div>
                            <nav className="v2-local-links" aria-label="Pages du site">
                                {LINKS.map((l) => (
                                    <Link key={l.href} href={l.href}>{l.label}</Link>
                                ))}
                            </nav>
                        </section>
                    </main>
                </V2Shell>
            </div>
        </div>
    );
}
