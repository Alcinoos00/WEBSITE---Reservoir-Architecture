import type { Metadata } from "next";
import LandingPage, { LandingData } from "@/components/LandingPage";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte villa contemporaine à Aix-en-Provence",
    description:
        "Architecte DPLG à Aix-en-Provence, Reservoir Architecture conçoit votre villa contemporaine sur-mesure, du terrain au permis. Estimation sous 48h.",
    alternates: { canonical: `${SITE_URL}/villas-aix-en-provence` },
    openGraph: {
        title: "Architecte villa contemporaine à Aix-en-Provence - Reservoir Architecture",
        description:
            "Villa contemporaine sur-mesure à Aix-en-Provence, du choix du terrain au permis de construire. Estimation sous 48h.",
        url: `${SITE_URL}/villas-aix-en-provence`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

const data: LandingData = {
    hero: {
        eyebrow: "Architecte à Aix-en-Provence",
        h1: "Votre villa contemporaine à Aix-en-Provence",
        sub: "Reservoir Architecture conçoit votre maison sur-mesure, du choix du terrain au permis de construire et jusqu’au suivi du chantier. Une architecture juste, pensée pour votre site, vos usages et votre budget.",
        trust: "Architecte DPLG · Agence fondée en 2013 · 30+ projets dans le Sud · Estimation sous 48h",
        img: "/images/projects/1-villas/villa F/villaF_1.jpg",
        alt: "Villa contemporaine à Aix-en-Provence conçue par Reservoir Architecture",
        ctaPrimary: "Parler de mon projet",
        ctaEmail: "Email",
    },
    realisations: {
        eyebrow: "Nos réalisations",
        lead: "Que vous imaginiez une villa résolument contemporaine ou d’inspiration provençale, nous partons toujours de votre terrain. Orientation, vues, pente, lumière, règles d’urbanisme : votre maison est conçue pour son site, jamais plaquée dessus.",
        projects: [
            {
                title: "Villa F",
                img: "/images/projects/1-villas/villa F/villaF_2.jpg",
                alt: "Villa contemporaine F, vue aérienne avec piscine, par Reservoir Architecture",
                desc: "Villa contemporaine organisée autour d’une cour-piscine. Béton clair, bois brûlé, lignes ciselées, un haut de gamme sans ostentation.",
                specs: [
                    { icon: "surface", label: "401 m²" },
                    { icon: "mission", label: "Construction neuve" },
                    { icon: "pin", label: "Caissargues (30)" },
                ],
                cta: "Réaliser ma villa",
                loc: "card_villa_f",
            },
            {
                title: "Villa P",
                img: "/images/projects/1-villas/villa P1/villaP_1.jpg",
                alt: "Villa contemporaine P, restanque en surplomb du paysage, par Reservoir Architecture",
                desc: "Restanque contemporaine posée en surplomb du paysage, ancrée dans la pente par un soubassement en pierre qui dialogue avec la garrigue.",
                specs: [
                    { icon: "surface", label: "191 m²" },
                    { icon: "mission", label: "Construction neuve" },
                    { icon: "pin", label: "Nîmes (30)" },
                ],
                cta: "Estimation en 48h",
                loc: "card_villa_p",
            },
            {
                title: "Villa T",
                img: "/images/projects/1-villas/villa T/villaT_1.jpg",
                alt: "Villa contemporaine T, maison de ville réhabilitée à Aix-en-Provence, par Reservoir Architecture",
                desc: "Réhabilitation d’une maison de ville aixoise, prolongée d’extensions contemporaines largement ouvertes sur les terrasses et le jardin. La lumière provençale devient matière première.",
                specs: [
                    { icon: "surface", label: "202 m²" },
                    { icon: "mission", label: "Réhabilitation" },
                    { icon: "pin", label: "Aix-en-Provence (13)" },
                ],
                cta: "Échanger avec un architecte",
                loc: "card_villa_t",
            },
            {
                title: "Villa C",
                img: "/images/projects/1-villas/villa C/villaC_2.jpg",
                alt: "Villa contemporaine C, volumes blancs et piscine miroir, par Reservoir Architecture",
                desc: "Volumes blancs purs posés comme une sculpture horizontale dans le paysage méditerranéen, ouverts sur une terrasse en bois et une piscine miroir.",
                specs: [
                    { icon: "surface", label: "240 m²" },
                    { icon: "mission", label: "Construction neuve" },
                    { icon: "pin", label: "Nîmes (30)" },
                ],
                cta: "Réaliser ma villa",
                loc: "card_villa_c",
            },
            {
                title: "Villa S",
                img: "/images/projects/1-villas/villa S/villaS_1.jpg",
                alt: "Villa contemporaine S, maison entre les pins à Langlade, par Reservoir Architecture",
                desc: "Glissée entre les pins, la maison s’étire horizontalement pour préserver le paysage et dialoguer avec la forêt de chênes verts. Un refuge sobre et chaleureux.",
                specs: [
                    { icon: "surface", label: "193 m²" },
                    { icon: "mission", label: "Construction neuve" },
                    { icon: "pin", label: "Langlade (30)" },
                ],
                cta: "Estimation en 48h",
                loc: "card_villa_s",
            },
            {
                title: "Villa L",
                img: "/images/projects/1-villas/villa L/villaL_1.jpg",
                alt: "Villa contemporaine L, socle de pierre sèche et volumes enduits, par Reservoir Architecture",
                desc: "Ancrée dans un socle de pierre sèche et pensée comme un cadran solaire. Volumes enduits sobres et lumineux, protégés par de larges débords qui filtrent le soleil.",
                specs: [
                    { icon: "surface", label: "194 m²" },
                    { icon: "mission", label: "Construction neuve" },
                    { icon: "pin", label: "Nîmes (30)" },
                ],
                cta: "Échanger avec un architecte",
                loc: "card_villa_l",
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
                title: "Ancré à Aix-en-Provence.",
                text: "Connaissance du terrain, des PLU locaux et des contraintes du Pays d’Aix. Nous avons déjà conçu à Aix.",
            },
            {
                icon: "building",
                title: "Du choix du terrain au chantier.",
                text: "Un seul interlocuteur sur toute la chaîne : choix du terrain, conception, permis, consultation des entreprises, suivi des travaux.",
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
        alt: "Villa contemporaine avec piscine conçue par Reservoir Architecture",
        eyebrow: "Un architecte installé à",
        city: "Aix-en-Provence",
        paragraphs: [
            "Notre agence est basée à Aix-en-Provence, 1330 rue Jean René Guillibert Gauthier de la Lauzière. Nous intervenons sur Aix et le Pays d’Aix, les Bouches-du-Rhône et l’ensemble de la région PACA.",
            "Cette proximité nous permet de visiter votre terrain, de rencontrer les services d’urbanisme et de suivre le chantier de près.",
        ],
        cta: "Parler de mon projet",
        ctaLoc: "local",
    },
    faq: {
        eyebrow: "Questions fréquentes",
        items: [
            { q: "Faut-il obligatoirement un architecte pour une villa ?", a: "Oui dès que la surface de plancher dépasse 150 m². En dessous, l’architecte reste vivement conseillé pour la qualité, la valeur et la maîtrise du projet." },
            { q: "Quels sont les honoraires d’un architecte ?", a: "Ils dépendent de la nature et de l’étendue de la mission. Nous vous adressons une proposition claire après un premier échange. Pour le budget global de votre projet, l’estimation sous 48h vous donne une première vision." },
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
        h2: "Réaliser ma villa contemporaine à Aix",
        p: "Un premier échange pour qualifier votre projet, votre terrain et votre budget. Estimation sous 48h, sans engagement.",
        ctaPrimary: "Appeler l’agence",
        ctaEmail: "Écrire un email",
    },
};

export default function VillasAixPage() {
    return <LandingPage data={data} />;
}
