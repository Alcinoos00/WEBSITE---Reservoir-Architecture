import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, getCollectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte logements collectifs & promoteurs immobiliers",
    description:
        "Conception d'immeubles de logements et résidences en Provence (13, 30). Partenaire des promoteurs immobiliers à Aix-en-Provence, Marseille, Nîmes.",
    alternates: { canonical: `${SITE_URL}/logements` },
    openGraph: {
        title: "Architecte logements collectifs — Reservoir Architecture",
        description:
            "Immeubles de logements, résidences, projets immobiliers collectifs en Provence.",
        url: `${SITE_URL}/logements`,
        type: "website",
    },
};

export default function LogementsPage() {
    const categoryProjects = PROJECTS.filter((p) => p.category === "LOGEMENTS");
    const jsonLd = getCollectionPageJsonLd({
        url: `${SITE_URL}/logements`,
        name: "Architecte logements collectifs & promoteurs immobiliers",
        description:
            "Conception d'immeubles de logements et résidences en Provence. Partenaire des promoteurs immobiliers.",
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
