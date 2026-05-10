import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import SeoContentSection from "@/components/SeoContentSection";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, getCollectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte commerce et showroom en PACA",
    description:
        "Architecture commerciale, boutiques, showrooms et espaces de vente en PACA. Reservoir Architecture conçoit des lieux de marque et de parcours client.",
    alternates: { canonical: `${SITE_URL}/commerces` },
    openGraph: {
        title: "Architecte commerce et showroom en PACA - Reservoir Architecture",
        description:
            "Architecture commerciale, design retail, boutiques, showrooms et espaces de vente en Provence-Alpes-Côte d'Azur.",
        url: `${SITE_URL}/commerces`,
        type: "website",
    },
};

export default function CommercesPage() {
    const categoryProjects = PROJECTS.filter((p) => p.category === "COMMERCES");
    const jsonLd = getCollectionPageJsonLd({
        url: `${SITE_URL}/commerces`,
        name: "Architecte commerce et showroom en PACA",
        description:
            "Aménagement, architecture commerciale, boutiques, showrooms et espaces de vente en Provence-Alpes-Côte d'Azur.",
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
                eyebrow="Commerces et lieux de marque"
                title="Architecte commerce et showroom en PACA"
                subtitle="L'agence conçoit des espaces commerciaux, boutiques, showrooms et lieux de marque où l'architecture sert autant l'usage que la perception."
                links={[{ href: "/contact", label: "Présenter un projet" }, { href: "/villas", label: "Villas" }]}
            >
                <p>
                    Un commerce ou un showroom doit être lisible, identifiable et efficace sans devenir un décor jetable. Reservoir Architecture travaille les parcours, la lumière, les matériaux, la visibilité des produits et la cohérence entre l'espace et l'identité de marque.
                </p>
                <p>
                    L'expérience de l'agence dans l'univers retail et scénographique nourrit une approche précise des espaces de vente : boutiques, boulangeries, restaurants, showrooms nautiques, programmes mixtes et lieux de services.
                </p>
                <p>
                    Les projets commerciaux présentés montrent des réponses adaptées à des contextes très différents, de l'aménagement intérieur à la création d'un ensemble de commerces. Chaque opération combine contraintes techniques, flux clients, image, budget et durabilité.
                </p>
                <p>
                    Depuis Aix-en-Provence, l'agence accompagne des maîtres d'ouvrage en PACA et dans le sud de la France pour transformer un programme commercial en lieu clair, mémorable et exploitable.
                </p>
            </SeoContentSection>
        </main>
    );
}


