import type { Metadata } from "next";
import LandingPage, { LandingData } from "@/components/LandingPage";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte logements collectifs à Aix-en-Provence",
    description:
        "Architecte DPLG à Aix-en-Provence pour vos opérations de logements collectifs. Conception, permis et suivi, du montage à la livraison. Échangeons sur votre programme.",
    alternates: { canonical: `${SITE_URL}/logements-aix-en-provence` },
    openGraph: {
        title: "Architecte logements collectifs à Aix-en-Provence - Reservoir Architecture",
        description:
            "Opérations de logements collectifs en PACA, du montage à la livraison. Densité maîtrisée et qualité d’usage.",
        url: `${SITE_URL}/logements-aix-en-provence`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

const data: LandingData = {
    hero: {
        eyebrow: "Architecte à Aix-en-Provence",
        h1: "Vos logements collectifs à Aix-en-Provence",
        sub: "Reservoir Architecture conçoit et accompagne vos opérations de logements, du montage à la livraison. Densité maîtrisée, qualité d’usage et insertion urbaine, au service de la commercialisation.",
        trust: "Architecte DPLG · Agence fondée en 2013 · Opérations de 2 à 30 logements · Du montage à la livraison",
        img: "/images/projects/2-logements/samaritaine/samaritaine_2.jpg",
        alt: "Résidence de logements collectifs conçue par Reservoir Architecture",
        ctaPrimary: "Parler de mon programme",
        ctaEmail: "Email",
    },
    realisations: {
        eyebrow: "Nos réalisations",
        lead: "Du petit collectif à la résidence de trente logements, chaque opération conjugue contraintes de programme, règles d’urbanisme, équilibre économique et qualité d’usage. Nous concevons des projets qui s’insèrent dans leur tissu urbain et qui se commercialisent.",
        projects: [
            {
                title: "Samaritaine",
                img: "/images/projects/2-logements/samaritaine/samaritaine_1.jpg",
                alt: "Résidence Samaritaine de 30 logements par Reservoir Architecture",
                desc: "Résidence de 30 logements collectifs organisée autour d’un jardin patio. Façades en béton teinté, loggias et claustras bois, pour un îlot dense mais respirant.",
                specs: [
                    { icon: "units", label: "30 logements" },
                    { icon: "surface", label: "3 000 m²" },
                    { icon: "mission", label: "ESQ à DPC" },
                ],
                cta: "Étudier mon opération",
                loc: "card_samaritaine",
            },
            {
                title: "Les Terrasses de la Plaine",
                img: "/images/projects/2-logements/jacou/plaine_1.jpg",
                alt: "Résidence Les Terrasses de la Plaine à Jacou par Reservoir Architecture",
                desc: "Résidence de 6 logements conçue dans un esprit de villa, déployée dans la pente avec terrasses, coursives et espaces extérieurs généreux.",
                specs: [
                    { icon: "units", label: "6 logements" },
                    { icon: "surface", label: "650 m²" },
                    { icon: "mission", label: "ESQ à DPC" },
                ],
                cta: "Estimation en 48h",
                loc: "card_plaine",
            },
            {
                title: "Les Jardins de Rosalie",
                img: "/images/projects/2-logements/romi/rosalie_1.jpg",
                alt: "Résidence Les Jardins de Rosalie par Reservoir Architecture",
                desc: "Extension d’une résidence en logements T2 à T4, réinterprétation contemporaine de la bastide provençale autour d’un cœur extérieur structurant.",
                specs: [
                    { icon: "units", label: "Logements T2 à T4" },
                    { icon: "surface", label: "450 m²" },
                    { icon: "mission", label: "ESQ à DPC" },
                ],
                cta: "Échanger avec l’agence",
                loc: "card_rosalie",
            },
            {
                title: "Le Guillot",
                img: "/images/projects/2-logements/martin-pierre/guillot_1.jpg",
                alt: "Résidence Le Guillot de 6 logements T3 par Reservoir Architecture",
                desc: "Petit collectif résidentiel de 6 logements T3 inséré avec retenue dans un tissu de maisons de ville. Loggias creusées et retraits pour l’intimité des logements.",
                specs: [
                    { icon: "units", label: "6 logements T3" },
                    { icon: "surface", label: "382 m²" },
                    { icon: "mission", label: "ESQ à DPC" },
                ],
                cta: "Étudier mon opération",
                loc: "card_guillot",
            },
            {
                title: "Childebert",
                img: "/images/projects/2-logements/trentini/childebert_1.jpg",
                alt: "Petit immeuble Childebert de 2 logements T3 par Reservoir Architecture",
                desc: "Petit immeuble de 2 logements T3 à volumétrie compacte, inséré entre les constructions existantes. Retraits, loggias et terrasse en attique.",
                specs: [
                    { icon: "units", label: "2 logements T3" },
                    { icon: "surface", label: "235 m²" },
                    { icon: "mission", label: "ESQ à DPC" },
                ],
                cta: "Estimation en 48h",
                loc: "card_childebert",
            },
            {
                title: "Les Hauts de Vacquerolles",
                img: "/images/projects/2-logements/vacquerolles/vacquerolles_1.jpg",
                alt: "Résidence Les Hauts de Vacquerolles par Reservoir Architecture",
                desc: "Deux volumes méditerranéens, un T3 et un T5, dialoguant avec la topographie de la garrigue nîmoise. Façades minérales ocre et larges terrasses.",
                specs: [
                    { icon: "units", label: "T3 et T5" },
                    { icon: "surface", label: "180 m²" },
                    { icon: "mission", label: "ESQ à DPC" },
                ],
                cta: "Échanger avec l’agence",
                loc: "card_vacquerolles",
            },
        ],
    },
    reassurance: {
        reasonsEyebrow: "Pourquoi Reservoir Architecture",
        reasons: [
            {
                icon: "building",
                title: "Capacité à livrer.",
                text: "Des opérations menées de l’esquisse au dépôt de permis et au suivi de chantier, sur des programmes de 30 logements et plus.",
            },
            {
                icon: "shield",
                title: "Insertion et conformité.",
                text: "Maîtrise des PLU, de la densité, du stationnement et des normes en vigueur sur le territoire aixois.",
            },
            {
                icon: "award",
                title: "Un projet qui se commercialise.",
                text: "Qualité d’usage, espaces extérieurs, lumière et identité, les leviers de valeur d’une résidence.",
            },
        ],
        stepsEyebrow: "Comment se passe votre opération",
        steps: [
            { title: "Échange et faisabilité.", text: "Analyse du foncier, du PLU et du potentiel constructible. Estimation sous 48h." },
            { title: "Esquisse et capacitaire.", text: "Définition du nombre de logements, des typologies et de l’équilibre du programme." },
            { title: "Conception et permis de construire.", text: "Plans, pièces réglementaires, dépôt et suivi du permis." },
            { title: "Réalisation.", text: "Consultation des entreprises et suivi de chantier jusqu’à la livraison." },
        ],
        cta: "Échanger avec l’agence",
        ctaLoc: "reassurance",
    },
    local: {
        img: "/images/projects/2-logements/romi/rosalie_2.jpg",
        alt: "Résidence de logements en Provence conçue par Reservoir Architecture",
        eyebrow: "Un architecte installé à",
        city: "Aix-en-Provence",
        paragraphs: [
            "Notre agence est basée à Aix-en-Provence. Nous accompagnons promoteurs, bailleurs et investisseurs sur Aix, le Pays d’Aix et l’ensemble des Bouches-du-Rhône.",
            "Cette proximité facilite l’analyse du foncier, les échanges avec les services instructeurs et le suivi des opérations.",
        ],
        cta: "Parler de mon programme",
        ctaLoc: "local",
    },
    faq: {
        eyebrow: "Questions fréquentes",
        items: [
            { q: "Travaillez-vous avec les promoteurs et bailleurs ?", a: "Oui. Nous intervenons pour des opérateurs privés sur des opérations de logements collectifs, du montage à la livraison." },
            { q: "Réalisez-vous des études de faisabilité ?", a: "Oui. À partir du foncier et du PLU, nous étudions le potentiel constructible et le nombre de logements envisageable, pour cadrer votre opération dès le départ." },
            { q: "Intégrez-vous les normes en vigueur (RE2020, accessibilité) ?", a: "Oui, la conformité réglementaire est intégrée dès la conception." },
            { q: "Quels délais pour une opération de logements ?", a: "Ils dépendent de la taille de l’opération et de l’instruction du permis. Nous établissons un calendrier prévisionnel dès l’étude de faisabilité." },
            { q: "Quelle taille d’opération traitez-vous ?", a: "Du petit collectif de 2 logements à la résidence de 30 logements, en neuf comme en extension." },
            { q: "Pouvez-vous nous communiquer des références ?", a: "Oui, plusieurs résidences réalisées en PACA et en région. Contactez-nous pour le détail." },
        ],
        cta: "Poser une question",
        ctaLoc: "faq",
    },
    finalCta: {
        img: "/images/projects/2-logements/vacquerolles/vacquerolles_3.jpg",
        h2: "Étudier mon opération à Aix",
        p: "Présentez-nous votre foncier et votre programme, nous évaluons la faisabilité et le potentiel. Premier retour et estimation sous 48h.",
        ctaPrimary: "Appeler l’agence",
        ctaEmail: "Écrire un email",
    },
};

export default function LogementsAixPage() {
    return <LandingPage data={data} />;
}
