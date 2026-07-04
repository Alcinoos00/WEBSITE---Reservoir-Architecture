import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import SeoContentSection from "@/components/SeoContentSection";
import SeoFaqSection from "@/components/SeoFaqSection";
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
        a: "Oui. À partir du foncier et du PLU, nous étudions le potentiel constructible, le nombre de logements et les typologies envisageables, pour cadrer votre opération et son équilibre économique dès le départ.",
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
            <NavigationCarousel items={categoryProjects} />
            <SeoContentSection
                eyebrow="Logements collectifs et résidences"
                title="Architecte logements collectifs en PACA"
                subtitle="Reservoir Architecture conçoit résidences et opérations de logements collectifs pour promoteurs, bailleurs et maîtres d'ouvrage, de l'étude de faisabilité à la livraison, en PACA et dans le Gard."
                links={[{ href: "/contact", label: "Parler d'une opération" }, { href: "/equipements", label: "Équipements" }]}
            >
                <p>
                    Concevoir une opération de logement collectif, c'est arbitrer en permanence entre densité, qualité d'usage, insertion urbaine, équilibre économique et confort des habitants. L'agence aborde chaque programme comme une situation spécifique, de la petite résidence à l'opération de 30 logements et plus, plutôt qu'un modèle à dupliquer.
                </p>
                <p>
                    Nous travaillons aux côtés des promoteurs, bailleurs, investisseurs et maîtres d'ouvrage privés. Pour chaque opération, l'objectif est double : un projet qui se commercialise et se vit bien, et un projet qui tient son bilan, son planning et ses contraintes réglementaires.
                </p>
                <p>
                    En amont, l'agence réalise les études de faisabilité et le capacitaire : analyse du foncier, lecture du PLU, potentiel constructible, nombre de logements et typologies envisageables du T2 au T5, stationnement et gabarits. Ce cadrage sécurise votre opération avant tout engagement.
                </p>
                <p>
                    En phase projet, nous menons l'opération de l'esquisse au dépôt du permis de construire, puis jusqu'au suivi de chantier. Compacité, lumière, accès, intimité, prolongements extérieurs, lisibilité des espaces communs et conformité RE2020 sont traités dès la conception, pas ajoutés après coup.
                </p>
                <p>
                    Basée à Aix-en-Provence, l'agence intervient sur toute la région PACA, d'Aix à Marseille et au-delà, ainsi que dans le Gard voisin où elle a conçu de nombreuses résidences. Cette implantation facilite l'analyse du foncier, les échanges avec les services instructeurs et le suivi rapproché des opérations.
                </p>
                <p>
                    Les références présentées couvrent une résidence de 30 logements collectifs organisée autour d'un jardin patio, des petits collectifs insérés en tissu urbain dense, ainsi que des extensions et réhabilitations de résidences existantes. Chaque fiche projet précise le programme, la surface, la mission et le parti pris architectural de l'opération.
                </p>
            </SeoContentSection>
            <SeoFaqSection
                eyebrow="Questions fréquentes"
                title="Architecte logements collectifs : vos questions"
                items={FAQ_ITEMS}
            />
        </main>
    );
}
