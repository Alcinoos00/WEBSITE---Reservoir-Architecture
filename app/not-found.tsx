import type { Metadata } from "next";
import SeoContentSection from "@/components/SeoContentSection";

// Next ajoute lui-même <meta name="robots" content="noindex"> sur la page 404.
export const metadata: Metadata = {
    title: "Page introuvable",
};

export default function NotFound() {
    return (
        <main>
            <SeoContentSection
                eyebrow="Erreur 404"
                title="Cette page n’existe pas"
                subtitle="L’adresse a peut-être changé. Les projets de l’agence restent accessibles depuis les pages ci-dessous."
                links={[
                    { href: "/", label: "Accueil" },
                    { href: "/villas", label: "Villas" },
                    { href: "/logements", label: "Logements" },
                    { href: "/commerces", label: "Commerces" },
                    { href: "/equipements", label: "Équipements" },
                    { href: "/contact", label: "Contact" },
                ]}
            >
                <p>
                    Reservoir Architecture, agence d’architecture à Aix-en-Provence, conçoit villas, logements, commerces et équipements publics en région PACA.
                </p>
            </SeoContentSection>
        </main>
    );
}
