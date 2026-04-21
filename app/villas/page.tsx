import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, getCollectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte villa contemporaine en Provence",
    description:
        "Conception et rénovation de villas modernes, maisons d'architecte de luxe à Aix-en-Provence, Marseille, Nîmes. 10 projets réalisés en Provence.",
    alternates: { canonical: `${SITE_URL}/villas` },
    openGraph: {
        title: "Architecte villa contemporaine — Reservoir Architecture",
        description:
            "Villas modernes, maisons d'architecte de luxe, rénovation et extension en Provence.",
        url: `${SITE_URL}/villas`,
        type: "website",
    },
};

export default function VillasPage() {
    const categoryProjects = PROJECTS.filter((p) => p.category === "VILLAS");
    const jsonLd = getCollectionPageJsonLd({
        url: `${SITE_URL}/villas`,
        name: "Architecte villa contemporaine en Provence",
        description:
            "Conception et rénovation de villas modernes, maisons d'architecte de luxe à Aix-en-Provence, Marseille, Nîmes.",
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
