import type { Metadata } from "next";
import LandingPage, { LandingData } from "@/components/LandingPage";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte pour investisseurs immobiliers en Provence et dans le Gard",
    description:
        "Architecte DPLG à Aix-en-Provence pour investisseurs : faisabilité, division, réhabilitation, changement d’usage et petits collectifs. Échangeons sur votre bien.",
    alternates: { canonical: `${SITE_URL}/investisseurs` },
    openGraph: {
        title: "Architecte pour investisseurs immobiliers - Reservoir Architecture",
        description:
            "Faisabilité, division, réhabilitation, changement d’usage et petits collectifs en Provence et dans le Gard.",
        url: `${SITE_URL}/investisseurs`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

const data: LandingData = {
    hero: {
        eyebrow: "Architecte pour investisseurs",
        h1: "Valoriser votre bien, sécuriser votre opération",
        sub: "Avant d’acheter ou de lancer des travaux, Reservoir Architecture étudie ce que votre bien ou votre terrain permet vraiment : division en logements, réhabilitation, surélévation, changement d’usage ou petit collectif. Une réponse claire sur le potentiel, les règles d’urbanisme et le budget.",
        trust: "Architecte DPLG · Agence fondée en 2013 · Provence et Gard · De la faisabilité au suivi de chantier",
        img: "/images/projects/2-logements/martin-pierre/guillot_1.jpg",
        alt: "Petit collectif de logements conçu par Reservoir Architecture",
        ctaPrimary: "Étudier mon bien",
        ctaEmail: "Email",
    },
    realisations: {
        eyebrow: "Des opérations qui transforment l’existant",
        lead: "Petits collectifs insérés dans un tissu de maisons de ville, rénovation complète, bâtiments transformés pour un nouvel usage : ces projets montrent comment nous tirons le meilleur d’un foncier ou d’un bâtiment existant, dans le respect des règles et du budget.",
        projects: [
            {
                title: "Le Guillot",
                img: "/images/projects/2-logements/martin-pierre/guillot_1.jpg",
                alt: "Résidence Le Guillot de 6 logements T3 par Reservoir Architecture",
                desc: "Six logements T3 sur une parcelle de centre-ville, entre maisons existantes. Loggias creusées et retraits pour préserver l’intimité de chaque logement.",
                specs: [
                    { icon: "units", label: "6 logements T3" },
                    { icon: "surface", label: "382 m²" },
                    { icon: "mission", label: "ESQ à DPC" },
                ],
                cta: "Étudier mon opération",
                loc: "inv_card_guillot",
            },
            {
                title: "Childebert",
                img: "/images/projects/2-logements/trentini/childebert_1.jpg",
                alt: "Petit immeuble Childebert de 2 logements T3 par Reservoir Architecture",
                desc: "Deux logements T3 sur une parcelle étroite, insérés entre les constructions voisines. Volume compact, loggias et terrasse en attique.",
                specs: [
                    { icon: "units", label: "2 logements T3" },
                    { icon: "surface", label: "235 m²" },
                    { icon: "mission", label: "ESQ à DPC" },
                ],
                cta: "Étudier mon bien",
                loc: "inv_card_childebert",
            },
            {
                title: "Villa T",
                img: "/images/projects/1-villas/villa T/villaT_1.jpg",
                alt: "Rénovation de la maison de ville Villa T à Aix-en-Provence par Reservoir Architecture",
                desc: "Rénovation complète d’une maison de ville à Aix-en-Provence, de la conception à la réception du chantier.",
                specs: [
                    { icon: "surface", label: "202 m²" },
                    { icon: "mission", label: "Mission complète" },
                ],
                cta: "Échanger avec l’agence",
                loc: "inv_card_villa_t",
            },
            {
                title: "Régie des eaux",
                img: "/images/projects/4-equipements/regie-des-eaux/regiedeseaux_1.jpg",
                alt: "Ateliers transformés en bureaux pour la Régie des eaux d’Aix-en-Provence",
                desc: "Transformation d’ateliers en bureaux à Aix-en-Provence : réhabilitation, restructuration et extension d’un bâtiment existant pour un nouvel usage.",
                specs: [
                    { icon: "surface", label: "3 080 m²" },
                    { icon: "mission", label: "Changement d’usage" },
                ],
                cta: "Étudier mon bien",
                loc: "inv_card_regie",
            },
            {
                title: "Archives de Vitrolles",
                img: "/images/projects/4-equipements/vitrolles/vitrolles_1.jpg",
                alt: "Hangar transformé en archives municipales à Vitrolles par Reservoir Architecture",
                desc: "Un hangar de stockage réhabilité, étendu et transformé en archives municipales.",
                specs: [
                    { icon: "surface", label: "516 m²" },
                    { icon: "mission", label: "Changement d’usage" },
                ],
                cta: "Échanger avec l’agence",
                loc: "inv_card_vitrolles",
            },
            {
                title: "Gendarmerie de Bouc-Bel-Air",
                img: "/images/projects/4-equipements/gendarmerie/gendarmerie_1.jpg",
                alt: "Réhabilitation, extension et surélévation de la gendarmerie de Bouc-Bel-Air",
                desc: "Réhabilitation, extension et surélévation d’un bâtiment existant : gagner des mètres carrés sans repartir de zéro.",
                specs: [
                    { icon: "surface", label: "600 m²" },
                    { icon: "mission", label: "Surélévation" },
                ],
                cta: "Étudier mon bien",
                loc: "inv_card_gendarmerie",
            },
        ],
    },
    reassurance: {
        reasonsEyebrow: "Pourquoi un architecte dès le départ",
        reasons: [
            {
                icon: "building",
                title: "Connaître le vrai potentiel.",
                text: "Surface constructible, nombre de logements possible, surélévation ou changement d’usage : nous lisons le PLU et le bâti avant que vous ne vous engagiez.",
            },
            {
                icon: "shield",
                title: "Limiter les mauvaises surprises.",
                text: "Règles d’urbanisme, stationnement, normes et contraintes techniques identifiées en amont, pour un budget et un calendrier réalistes.",
            },
            {
                icon: "award",
                title: "Un bien qui se loue ou se revend.",
                text: "Typologies adaptées, lumière, espaces extérieurs et qualité d’usage : les leviers concrets de la valeur d’un logement.",
            },
        ],
        stepsEyebrow: "Comment se passe votre projet",
        steps: [
            { title: "Premier échange.", text: "Vous nous présentez le bien ou le terrain, votre objectif et votre budget." },
            { title: "Étude de faisabilité.", text: "Analyse du PLU, du bâti existant et du potentiel : division, extension, surélévation ou changement d’usage." },
            { title: "Conception et autorisations.", text: "Plans, pièces réglementaires, dépôt et suivi du permis de construire ou de la déclaration préalable." },
            { title: "Travaux.", text: "Consultation des entreprises et suivi de chantier jusqu’à la réception, si vous le souhaitez." },
        ],
        cta: "Étudier mon bien",
        ctaLoc: "inv_reassurance",
    },
    local: {
        img: "/images/projects/4-equipements/regie-des-eaux/regiedeseaux_2.jpg",
        alt: "Bâtiment réhabilité par Reservoir Architecture à Aix-en-Provence",
        eyebrow: "Un architecte installé à",
        city: "Aix-en-Provence",
        paragraphs: [
            "Notre agence est basée à Aix-en-Provence. Nous accompagnons les investisseurs dans le Pays d’Aix, les Bouches-du-Rhône, le reste de la Provence et le Gard.",
            "Nous travaillons aussi avec les agents immobiliers, marchands de biens et conseillers en patrimoine qui accompagnent vos acquisitions.",
        ],
        cta: "Parler de mon projet",
        ctaLoc: "inv_local",
    },
    faq: {
        eyebrow: "Questions fréquentes",
        items: [
            { q: "Pouvez-vous étudier un bien avant que je l’achète ?", a: "Oui. C’est même le meilleur moment : une étude de faisabilité vous indique ce que le bien permet réellement avant de signer." },
            { q: "Peut-on diviser une maison ou un immeuble en plusieurs logements ?", a: "Souvent, mais cela dépend du PLU, du stationnement exigé, de la structure et des réseaux. Nous vérifions ces points au cas par cas." },
            { q: "Faut-il obligatoirement un architecte ?", a: "Pour un particulier, oui dès que le projet soumis à permis de construire dépasse 150 m² de surface de plancher. Si vous investissez via une société, comme une SCI, l’architecte est obligatoire pour tout permis de construire, quelle que soit la surface." },
            { q: "Quelles missions proposez-vous ?", a: "Selon vos besoins : la faisabilité seule, la conception jusqu’au permis de construire, ou une mission complète jusqu’à la réception des travaux." },
            { q: "Quels sont vos honoraires ?", a: "Ils dépendent du projet, de sa taille et du niveau de mission. Nous vous remettons une proposition après un premier échange." },
            { q: "Où intervenez-vous ?", a: "À Aix-en-Provence, dans les Bouches-du-Rhône, en Provence et dans le Gard." },
        ],
        cta: "Poser une question",
        ctaLoc: "inv_faq",
    },
    finalCta: {
        img: "/images/projects/2-logements/trentini/childebert_2.jpg",
        h2: "Faire étudier mon bien",
        p: "Présentez-nous votre bien ou votre terrain et votre objectif. Nous vous disons ce qu’il permet et comment avancer.",
        ctaPrimary: "Appeler l’agence",
        ctaEmail: "Écrire un email",
    },
};

export default function InvestisseursPage() {
    return <LandingPage data={data} />;
}
