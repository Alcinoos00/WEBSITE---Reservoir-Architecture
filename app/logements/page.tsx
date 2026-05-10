import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import SeoContentSection from "@/components/SeoContentSection";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, getCollectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte logements collectifs en PACA",
    description:
        "Conception de logements collectifs, résidences et opérations immobilières en PACA. Reservoir Architecture accompagne promoteurs et maîtres d'ouvrage.",
    alternates: { canonical: `${SITE_URL}/logements` },
    openGraph: {
        title: "Architecte logements collectifs en PACA - Reservoir Architecture",
        description:
            "Immeubles de logements, résidences et projets immobiliers collectifs en Provence-Alpes-Côte d'Azur.",
        url: `${SITE_URL}/logements`,
        type: "website",
    },
};

export default function LogementsPage() {
    const categoryProjects = PROJECTS.filter((p) => p.category === "LOGEMENTS");
    const jsonLd = getCollectionPageJsonLd({
        url: `${SITE_URL}/logements`,
        name: "Architecte logements collectifs en PACA",
        description:
            "Conception de logements collectifs, résidences et opérations immobilières en Provence-Alpes-Côte d'Azur.",
        items: categoryProjects,
    });

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <NavigationCarousel items={categoryProjects} />
            <SeoContentSection
                eyebrow="Logements collectifs"
                title="Architecte logements collectifs en PACA"
                subtitle="Reservoir Architecture conçoit des résidences et opérations de logements collectifs pour promoteurs, maîtres d'ouvrage privés et opérations urbaines à échelle maîtrisée."
                links={[{ href: "/contact", label: "Contacter l'agence" }, { href: "/equipements", label: "Équipements" }]}
            >
                <p>
                    Un projet de logements collectifs doit articuler densité, qualité d'usage, insertion urbaine, économie de construction et confort des habitants. L'agence aborde chaque opération comme une situation spécifique plutôt qu'un modèle à répéter.
                </p>
                <p>
                    Les références présentées couvrent des résidences, petits collectifs, extensions et opérations de logements en contexte urbain ou paysager. Les enjeux portent sur la compacité, la lumière, les accès, l'intimité, les prolongements extérieurs et la lisibilité des espaces communs.
                </p>
                <p>
                    Depuis Aix-en-Provence, Reservoir Architecture intervient en PACA et dans les territoires voisins auprès de maîtres d'ouvrage qui recherchent une réponse architecturale rigoureuse, adaptée au site et compatible avec les contraintes opérationnelles.
                </p>
                <p>
                    Les fiches projet permettent d'identifier les programmes, surfaces, années, missions et partis pris architecturaux de chaque opération de logement.
                </p>
            </SeoContentSection>
        </main>
    );
}


