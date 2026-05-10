import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import SeoContentSection from "@/components/SeoContentSection";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, getCollectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte villa contemporaine en PACA",
    description:
        "Conception, rénovation et extension de villas contemporaines en PACA. Reservoir Architecture accompagne les maisons d'architecte depuis Aix-en-Provence.",
    alternates: { canonical: `${SITE_URL}/villas` },
    openGraph: {
        title: "Architecte villa contemporaine en PACA - Reservoir Architecture",
        description:
            "Villas contemporaines, maisons d'architecte, rénovation et extension en Provence-Alpes-Côte d'Azur.",
        url: `${SITE_URL}/villas`,
        type: "website",
    },
};

export default function VillasPage() {
    const categoryProjects = PROJECTS.filter((p) => p.category === "VILLAS");
    const jsonLd = getCollectionPageJsonLd({
        url: `${SITE_URL}/villas`,
        name: "Architecte villa contemporaine en PACA",
        description:
            "Conception, rénovation et extension de villas contemporaines et maisons d'architecte en PACA.",
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
                eyebrow="Villas et maisons d'architecte"
                title="Architecte villa contemporaine en PACA"
                subtitle="Depuis Aix-en-Provence, Reservoir Architecture accompagne la conception, la rénovation et l'extension de villas contemporaines dans des contextes méditerranéens variés."
                links={[{ href: "/contact", label: "Parler d'un projet" }, { href: "/", label: "Agence" }]}
            >
                <p>
                    Une villa contemporaine ne se limite pas à une image. Elle doit répondre au terrain, à l'orientation, aux vues, à la lumière, aux règles d'urbanisme et aux usages quotidiens. L'agence travaille ces paramètres pour construire une maison cohérente avec son site et durable dans le temps.
                </p>
                <p>
                    Les projets présentés regroupent des constructions neuves, rénovations, extensions et transformations de maisons existantes. Les réponses architecturales varient selon les contraintes : maison de ville à Aix-en-Provence, terrain en pente, site inondable, relation au jardin, cadrage des vues ou recherche d'intimité.
                </p>
                <p>
                    Reservoir Architecture intervient auprès de particuliers qui cherchent une maison précise, fonctionnelle et située, avec une attention portée à la matérialité, aux proportions, aux transitions intérieur-extérieur et à la maîtrise du projet.
                </p>
                <p>
                    Cette page rassemble les références de villas et maisons d'architecte de l'agence. Chaque fiche projet détaille le lieu, la mission, la surface, le calendrier et la démarche architecturale.
                </p>
            </SeoContentSection>
        </main>
    );
}


