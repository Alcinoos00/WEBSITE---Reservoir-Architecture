import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, getCollectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte équipements publics",
    description:
        "Conception d'équipements publics : gendarmeries, capitaineries, bâtiments municipaux. Architecte en Provence pour collectivités.",
    alternates: { canonical: `${SITE_URL}/equipements` },
    openGraph: {
        title: "Architecte équipements publics — Reservoir Architecture",
        description:
            "Équipements publics et bâtiments pour collectivités en Provence.",
        url: `${SITE_URL}/equipements`,
        type: "website",
    },
};

export default function EquipementsPage() {
    const categoryProjects = PROJECTS.filter((p) => p.category === "ÉQUIPEMENTS");
    const jsonLd = getCollectionPageJsonLd({
        url: `${SITE_URL}/equipements`,
        name: "Architecte équipements publics",
        description:
            "Conception d'équipements publics et bâtiments pour collectivités en Provence.",
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
