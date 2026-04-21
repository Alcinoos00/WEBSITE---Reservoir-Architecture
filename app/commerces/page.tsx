import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, getCollectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte commerce, boutique & showroom",
    description:
        "Aménagement et design de magasins, showrooms, espaces de vente. Architecture commerciale en Provence (Aix-en-Provence, Marseille, Nîmes).",
    alternates: { canonical: `${SITE_URL}/commerces` },
    openGraph: {
        title: "Architecte commerce & showroom — Reservoir Architecture",
        description:
            "Aménagement de magasins, showrooms et espaces de vente. Design retail en Provence.",
        url: `${SITE_URL}/commerces`,
        type: "website",
    },
};

export default function CommercesPage() {
    const categoryProjects = PROJECTS.filter((p) => p.category === "COMMERCES");
    const jsonLd = getCollectionPageJsonLd({
        url: `${SITE_URL}/commerces`,
        name: "Architecte commerce, boutique & showroom",
        description:
            "Aménagement et design de magasins, showrooms, espaces de vente en Provence.",
        items: categoryProjects,
    });

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <NavigationCarousel items={categoryProjects} />
        </main>
    );
}
