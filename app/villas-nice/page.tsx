import type { Metadata } from "next";
import LandingPage, { LandingData } from "@/components/LandingPage";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte villa et maison contemporaine à Nice",
    description:
        "Architecte DPLG pour votre villa ou maison contemporaine à Nice et sur la Côte d’Azur. Du terrain au permis de construire. Estimation sous 48h.",
    alternates: { canonical: `${SITE_URL}/villas-nice` },
    openGraph: {
        title: "Architecte villa et maison contemporaine à Nice - Reservoir Architecture",
        description:
            "Villa ou maison contemporaine sur-mesure à Nice et dans les Alpes-Maritimes, du terrain au permis. Estimation sous 48h.",
        url: `${SITE_URL}/villas-nice`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

const data: LandingData = {
    hero: {
        eyebrow: "Architecte villa à Nice",
        h1: "Votre villa ou maison contemporaine à Nice",
        sub: "Reservoir Architecture conçoit votre maison sur-mesure à Nice, du choix du terrain au permis de construire et jusqu’au suivi du chantier. Une architecture juste, pensée pour la lumière, les vues et l’art de vivre méditerranéen.",
        trust: "Architecte DPLG · Agence fondée en 2013 · 30+ projets dans le Sud · Estimation sous 48h",
        img: "/images/projects/1-villas/villa F/villaF_1.jpg",
        alt: "Villa contemporaine sur la Côte d’Azur conçue par Reservoir Architecture",
        ctaPrimary: "Parler de mon projet",
        ctaEmail: "Email",
    },
    realisations: {
        eyebrow: "Nos réalisations",
        lead: "Vues sur la mer, terrains en pente, lumière du littoral : nous partons toujours de votre terrain. Orientation, panorama, règles d’urbanisme, votre maison est conçue pour son site, jamais plaquée dessus.",
        projects: [
            {
                title: "Villa F",
                img: "/images/projects/1-villas/villa F/villaF_2.jpg",
                alt: "Villa contemporaine F, vue aérienne avec piscine, par Reservoir Architecture",
                desc: "Villa contemporaine organisée autour d’une cour-piscine. Béton clair, bois brûlé, lignes ciselées, un haut de gamme sans ostentation.",
                specs: [
                    { icon: "surface", label: "401 m²" },
                    { icon: "mission", label: "Construction neuve" },
                ],
                cta: "Réaliser ma villa",
                loc: "card_villa_f",
            },
            {
                title: "Villa C",
                img: "/images/projects/1-villas/villa C/villaC_2.jpg",
                alt: "Villa contemporaine C, volumes blancs et piscine miroir, par Reservoir Architecture",
                desc: "Volumes blancs purs posés comme une sculpture horizontale dans le paysage méditerranéen, ouverts sur une terrasse en bois et une piscine miroir.",
                specs: [
                    { icon: "surface", label: "240 m²" },
                    { icon: "mission", label: "Construction neuve" },
                ],
                cta: "Réaliser ma villa",
                loc: "card_villa_c",
            },
            {
                title: "Villa T",
                img: "/images/projects/1-villas/villa T/villaT_1.jpg",
                alt: "Villa contemporaine T, maison de ville réhabilitée, par Reservoir Architecture",
                desc: "Réhabilitation d’une maison méditerranéenne, prolongée d’extensions contemporaines largement ouvertes sur les terrasses et le jardin. La lumière du Sud devient matière première.",
                specs: [
                    { icon: "surface", label: "202 m²" },
                    { icon: "mission", label: "Réhabilitation" },
                ],
                cta: "Échanger avec un architecte",
                loc: "card_villa_t",
            },
            {
                title: "Villa L",
                img: "/images/projects/1-villas/villa L/villaL_1.jpg",
                alt: "Villa contemporaine L, socle de pierre sèche et volumes enduits, par Reservoir Architecture",
                desc: "Ancrée dans un socle de pierre sèche et pensée comme un cadran solaire. Volumes enduits sobres et lumineux, protégés par de larges débords qui filtrent le soleil.",
                specs: [
                    { icon: "surface", label: "194 m²" },
                    { icon: "mission", label: "Construction neuve" },
                ],
                cta: "Estimation en 48h",
                loc: "card_villa_l",
            },
            {
                title: "Villa P",
                img: "/images/projects/1-villas/villa P1/villaP_1.jpg",
                alt: "Villa contemporaine P, restanque en surplomb du paysage, par Reservoir Architecture",
                desc: "Restanque contemporaine posée en surplomb du paysage, ancrée dans la pente par un soubassement en pierre qui dialogue avec la garrigue.",
                specs: [
                    { icon: "surface", label: "191 m²" },
                    { icon: "mission", label: "Construction neuve" },
                ],
                cta: "Réaliser ma villa",
                loc: "card_villa_p",
            },
            {
                title: "Villa V",
                img: "/images/projects/1-villas/villa V/villaV_1.jpg",
                alt: "Villa contemporaine V, volumes minéraux dans la garrigue, par Reservoir Architecture",
                desc: "Volumétrie sobre et minérale où les enduits clairs captent la lumière du sud. Larges baies, pergola et toitures plates pour une écriture épurée tournée vers l’horizon.",
                specs: [
                    { icon: "surface", label: "201 m²" },
                    { icon: "mission", label: "Construction neuve" },
                ],
                cta: "Estimation en 48h",
                loc: "card_villa_v",
            },
        ],
    },
    reassurance: {
        reasonsEyebrow: "Pourquoi Reservoir Architecture",
        reasons: [
            {
                icon: "shield",
                title: "Un architecte DPLG, pas un dessinateur.",
                text: "Responsabilité, assurance et vision d’ensemble du projet, de la faisabilité à la réception.",
            },
            {
                icon: "pin",
                title: "Un architecte pour la Côte d’Azur.",
                text: "Nous concevons des villas contemporaines sur Nice, les Alpes-Maritimes et tout le littoral méditerranéen.",
            },
            {
                icon: "building",
                title: "Du choix du terrain au chantier.",
                text: "Un seul interlocuteur sur toute la chaîne : terrain, conception, permis, consultation des entreprises, suivi des travaux.",
            },
        ],
        stepsEyebrow: "Comment se passe votre projet",
        steps: [
            { title: "Échange et qualification.", text: "Nous écoutons votre programme, votre terrain, votre budget. Estimation sous 48h." },
            { title: "Faisabilité et esquisse.", text: "Analyse du terrain et des règles d’urbanisme, première intention architecturale." },
            { title: "Conception et permis de construire.", text: "Plans détaillés, dépôt et suivi du permis." },
            { title: "Réalisation.", text: "Consultation des entreprises, suivi de chantier, réception." },
        ],
        cta: "Échanger avec un expert architecte",
        ctaLoc: "reassurance",
    },
    local: {
        img: "/images/projects/1-villas/villa V/villaV_1.jpg",
        alt: "Villa contemporaine dans les Alpes-Maritimes conçue par Reservoir Architecture",
        eyebrow: "Un architecte qui conçoit à",
        city: "Nice",
        paragraphs: [
            "Reservoir Architecture conçoit des villas et maisons contemporaines à Nice et dans les Alpes-Maritimes. Volumes lumineux, ouverture sur la mer, art de vivre méditerranéen : nous concevons des maisons pensées pour la lumière et les vues de la Côte d’Azur.",
            "Nous intervenons sur toute la région PACA et nous déplaçons pour visiter votre terrain, rencontrer les services d’urbanisme et suivre votre projet.",
        ],
        cta: "Parler de mon projet",
        ctaLoc: "local",
    },
    faq: {
        eyebrow: "Questions fréquentes",
        items: [
            { q: "Faut-il obligatoirement un architecte pour une villa ?", a: "Oui dès que la surface de plancher dépasse 150 m². En dessous, l’architecte reste vivement conseillé pour la qualité, la valeur et la maîtrise du projet." },
            { q: "Intervenez-vous à Nice et sur la Côte d’Azur ?", a: "Oui. Nous concevons des villas et maisons contemporaines sur Nice et l’ensemble des Alpes-Maritimes, avec le même niveau d’exigence que sur le reste de la région." },
            { q: "Comment fonctionne l’estimation en 48h ?", a: "Vous nous décrivez votre projet par téléphone ou email (terrain, surface, intentions). Nous revenons vers vous sous 48h avec une première estimation chiffrée." },
            { q: "Quels délais pour une villa contemporaine ?", a: "Ils dépendent de la complexité du projet et de l’instruction du permis. Nous vous communiquons un calendrier prévisionnel dès la phase de faisabilité." },
            { q: "Intervenez-vous en rénovation et extension ?", a: "Oui : construction neuve, rénovation, extension et transformation de maisons existantes." },
            { q: "Je n’ai pas encore de terrain, pouvez-vous m’aider ?", a: "Oui. Nous vous accompagnons dans le choix de votre terrain et étudions son potentiel au regard de votre projet." },
        ],
        cta: "Poser une question",
        ctaLoc: "faq",
    },
    finalCta: {
        img: "/images/projects/1-villas/villa C/villaC_1.jpg",
        h2: "Réaliser ma villa contemporaine à Nice",
        p: "Un premier échange pour qualifier votre projet, votre terrain et votre budget. Estimation sous 48h, sans engagement.",
        ctaPrimary: "Appeler l’agence",
        ctaEmail: "Écrire un email",
    },
};

export default function VillasNicePage() {
    return <LandingPage data={data} />;
}
