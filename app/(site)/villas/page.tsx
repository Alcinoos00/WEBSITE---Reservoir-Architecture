import type { Metadata } from "next";
import V2CategoryPage from "@/app/accueil-v2/V2CategoryPage";
import { V2_CATEGORIES } from "@/app/accueil-v2/v2Categories";
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
            <V2CategoryPage c={V2_CATEGORIES.find((c) => c.path === "villas")!} />
        </main>
    );
}


