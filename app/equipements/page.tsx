import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import SeoContentSection from "@/components/SeoContentSection";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, getCollectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte équipements publics en PACA",
    description:
        "Conception, réhabilitation et extension d'équipements publics en PACA : bâtiments municipaux, gendarmerie, capitainerie, archives et services techniques.",
    alternates: { canonical: `${SITE_URL}/equipements` },
    openGraph: {
        title: "Architecte équipements publics en PACA - Reservoir Architecture",
        description:
            "Équipements publics, bâtiments municipaux et projets pour collectivités en Provence-Alpes-Côte d'Azur.",
        url: `${SITE_URL}/equipements`,
        type: "website",
    },
};

export default function EquipementsPage() {
    const categoryProjects = PROJECTS.filter((p) => p.category === "ÉQUIPEMENTS");
    const jsonLd = getCollectionPageJsonLd({
        url: `${SITE_URL}/equipements`,
        name: "Architecte équipements publics en PACA",
        description:
            "Conception, réhabilitation et extension d'équipements publics et bâtiments pour collectivités en Provence-Alpes-Côte d'Azur.",
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
                eyebrow="Équipements publics"
                title="Architecte équipements publics en PACA"
                subtitle="Reservoir Architecture accompagne des collectivités et maîtres d'ouvrage publics sur des projets de réhabilitation, extension, transformation et construction d'équipements."
                links={[{ href: "/contact", label: "Contacter l'agence" }, { href: "/logements", label: "Logements" }]}
            >
                <p>
                    Les équipements publics demandent une architecture robuste, lisible et attentive aux usages quotidiens. Les contraintes techniques, réglementaires et budgétaires y sont fortes, mais elles peuvent devenir le cadre d'une réponse claire et durable.
                </p>
                <p>
                    Les références de l'agence comprennent des bâtiments municipaux, gendarmeries, capitaineries, archives, centres techniques, équipements jeunesse et services publics. Les interventions portent autant sur la réhabilitation que sur l'extension, la surélévation ou la transformation de bâtiments existants.
                </p>
                <p>
                    Depuis Aix-en-Provence, Reservoir Architecture intervient en PACA auprès des collectivités avec une attention portée à la pérennité constructive, à l'intégration urbaine, à la qualité des parcours et à la maintenance future des ouvrages.
                </p>
                <p>
                    Cette sélection de projets présente les programmes, missions, surfaces, calendriers et intentions architecturales des équipements publics réalisés ou étudiés par l'agence.
                </p>
            </SeoContentSection>
        </main>
    );
}


