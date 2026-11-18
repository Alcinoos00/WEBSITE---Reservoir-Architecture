import type { Metadata } from "next";
import V2CategoryPage from "@/app/accueil-v2/V2CategoryPage";
import { V2_CATEGORIES } from "@/app/accueil-v2/v2Categories";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, getCollectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    // Title et description réécrits le 2026-11-18 : la page avait 217 impressions et 0 clic sur Google
    // (requêtes : « villa paca », « architecte villa contemporaine », « maison d'architecte paca »).
    // « absolute » : sans le suffixe « | Reservoir Architecture », trop long pour Google (environ 60 caractères affichés).
    title: { absolute: "Architecte villa contemporaine, maison d'architecte en PACA" },
    description:
        "Villa contemporaine, maison d'architecte, extension ou surélévation : architecte DPLG en PACA et Occitanie, de l'esquisse au permis et au chantier.",
    alternates: { canonical: `${SITE_URL}/villas` },
    openGraph: {
        title: "Architecte villa contemporaine et maison d'architecte en PACA - Reservoir Architecture",
        description:
            "Villas contemporaines, maisons d'architecte, extensions et surélévations en Provence-Alpes-Côte d'Azur et en Occitanie.",
        url: `${SITE_URL}/villas`,
        type: "website",
    },
};

export default function VillasPage() {
    const categoryProjects = PROJECTS.filter((p) => p.category === "VILLAS");
    const jsonLd = getCollectionPageJsonLd({
        url: `${SITE_URL}/villas`,
        name: "Architecte villa contemporaine en PACA et en Occitanie",
        description:
            "Conception, rénovation et extension de villas contemporaines et maisons d'architecte en PACA et en Occitanie.",
        items: categoryProjects,
    });

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2CategoryPage c={V2_CATEGORIES.find((c) => c.path === "villas")!} />
        </main>
    );
}


