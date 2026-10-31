import type { Metadata } from "next";
import V2CategoryPage from "@/app/accueil-v2/V2CategoryPage";
import { V2_CATEGORIES } from "@/app/accueil-v2/v2Categories";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, getCollectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte équipements publics en PACA et en Occitanie",
    description:
        "Conception, réhabilitation et extension d'équipements publics en PACA et en Occitanie : bâtiments municipaux, gendarmerie, capitainerie, archives et services techniques.",
    alternates: { canonical: `${SITE_URL}/equipements` },
    openGraph: {
        title: "Architecte équipements publics en PACA et en Occitanie - Reservoir Architecture",
        description:
            "Équipements publics, bâtiments municipaux et projets pour collectivités en Provence-Alpes-Côte d'Azur et en Occitanie.",
        url: `${SITE_URL}/equipements`,
        type: "website",
    },
};

export default function EquipementsPage() {
    const categoryProjects = PROJECTS.filter((p) => p.category === "ÉQUIPEMENTS");
    const jsonLd = getCollectionPageJsonLd({
        url: `${SITE_URL}/equipements`,
        name: "Architecte équipements publics en PACA et en Occitanie",
        description:
            "Conception, réhabilitation et extension d'équipements publics et bâtiments pour collectivités en Provence-Alpes-Côte d'Azur et en Occitanie.",
        items: categoryProjects,
    });

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2CategoryPage c={V2_CATEGORIES.find((c) => c.path === "equipements")!} />
        </main>
    );
}


