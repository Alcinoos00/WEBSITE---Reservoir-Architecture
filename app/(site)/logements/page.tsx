import type { Metadata } from "next";
import V2CategoryPage from "@/app/accueil-v2/V2CategoryPage";
import { V2_CATEGORIES } from "@/app/accueil-v2/v2Categories";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, getCollectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte logements collectifs en PACA",
    description:
        "Architecte pour vos opérations de logements collectifs et résidences en PACA. Promoteurs, bailleurs et maîtres d'ouvrage, de l'étude de faisabilité au permis et à la livraison.",
    alternates: { canonical: `${SITE_URL}/logements` },
    openGraph: {
        title: "Architecte logements collectifs en PACA - Reservoir Architecture",
        description:
            "Opérations de logements collectifs et résidences en PACA, du montage à la livraison, pour promoteurs et maîtres d'ouvrage.",
        url: `${SITE_URL}/logements`,
        type: "website",
    },
};

const FAQ_ITEMS = [
    {
        q: "Travaillez-vous avec les promoteurs et les bailleurs ?",
        a: "Oui. Nous intervenons pour des promoteurs, bailleurs, investisseurs et maîtres d'ouvrage privés sur des opérations de logements collectifs, du montage à la livraison.",
    },
    {
        q: "Réalisez-vous des études de faisabilité et du capacitaire ?",
        a: "Oui. À partir du foncier et du PLU(i), nous étudions le potentiel constructible, le nombre de logements et les typologies envisageables, pour cadrer votre opération et son équilibre économique dès le départ.",
    },
    {
        q: "Quelle taille d'opération traitez-vous ?",
        a: "Du petit collectif de quelques logements à la résidence de 30 logements et plus, en construction neuve comme en extension ou réhabilitation.",
    },
    {
        q: "Intervenez-vous partout en PACA ?",
        a: "Oui. Basée à Aix-en-Provence, l'agence conçoit des logements collectifs sur toute la région PACA, d'Aix à Marseille, ainsi que dans le Gard voisin où elle a réalisé de nombreuses résidences.",
    },
    {
        q: "Intégrez-vous la réglementation en vigueur (RE2020, accessibilité) ?",
        a: "Oui. La conformité réglementaire et environnementale est intégrée dès la conception, pas traitée en fin de parcours.",
    },
    {
        q: "Jusqu'où nous accompagnez-vous ?",
        a: "De l'étude de faisabilité et l'esquisse au dépôt du permis de construire, puis au suivi de chantier jusqu'à la livraison, avec un interlocuteur unique.",
    },
];

export default function LogementsPage() {
    const categoryProjects = PROJECTS.filter((p) => p.category === "LOGEMENTS");
    const jsonLd = getCollectionPageJsonLd({
        url: `${SITE_URL}/logements`,
        name: "Architecte logements collectifs en PACA",
        description:
            "Conception de logements collectifs, résidences et opérations immobilières en Provence-Alpes-Côte d'Azur.",
        items: categoryProjects,
    });

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2CategoryPage
                c={V2_CATEGORIES.find((c) => c.path === "logements")!}
                faq={{ title: "Architecte logements collectifs : vos questions", items: FAQ_ITEMS }}
            />
        </main>
    );
}
