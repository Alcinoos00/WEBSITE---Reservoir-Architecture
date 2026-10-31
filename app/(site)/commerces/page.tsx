import type { Metadata } from "next";
import V2CategoryPage from "@/app/accueil-v2/V2CategoryPage";
import { V2_CATEGORIES } from "@/app/accueil-v2/v2Categories";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, getCollectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte commerce et showroom en PACA et en Occitanie",
    description:
        "Architecture commerciale, boutiques, showrooms et espaces de vente en PACA et en Occitanie. Reservoir Architecture conçoit des lieux de marque et de parcours client.",
    alternates: { canonical: `${SITE_URL}/commerces` },
    openGraph: {
        title: "Architecte commerce et showroom en PACA et en Occitanie - Reservoir Architecture",
        description:
            "Architecture commerciale, design retail, boutiques, showrooms et espaces de vente en Provence-Alpes-Côte d'Azur et en Occitanie.",
        url: `${SITE_URL}/commerces`,
        type: "website",
    },
};

export default function CommercesPage() {
    const categoryProjects = PROJECTS.filter((p) => p.category === "COMMERCES");
    const jsonLd = getCollectionPageJsonLd({
        url: `${SITE_URL}/commerces`,
        name: "Architecte commerce et showroom en PACA et en Occitanie",
        description:
            "Aménagement, architecture commerciale, boutiques, showrooms et espaces de vente en Provence-Alpes-Côte d'Azur et en Occitanie.",
        items: categoryProjects,
    });

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2CategoryPage c={V2_CATEGORIES.find((c) => c.path === "commerces")!} />
        </main>
    );
}


