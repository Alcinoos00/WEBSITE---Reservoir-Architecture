import type { Metadata } from "next";
import LandingPage, { LandingData } from "@/components/LandingPage";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte villa et maison contemporaine à Nîmes",
    description:
        "Architecte DPLG pour votre villa ou maison contemporaine à Nîmes et dans le Gard. Du choix du terrain au permis de construire. Estimation sous 48h.",
    alternates: { canonical: `${SITE_URL}/villas-nimes` },
    openGraph: {
        title: "Architecte villa et maison contemporaine à Nîmes - Reservoir Architecture",
        description:
            "Villa ou maison contemporaine sur-mesure à Nîmes et dans le Gard, du terrain au permis de construire. Estimation sous 48h.",
        url: `${SITE_URL}/villas-nimes`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

const data: LandingData = {
    hero: {
        eyebrow: "Architecte à Nîmes et dans le Gard",
        h1: "Votre villa ou maison contemporaine à Nîmes",
        sub: "Reservoir Architecture conçoit votre maison sur-mesure à Nîmes, du choix du terrain au permis de construire et jusqu’au suivi du chantier. Une architecture pensée pour votre parcelle, la lumière du Gard et votre budget.",
        trust: "Architecte DPLG · Agence fondée en 2013 · De nombreuses villas conçues dans le Gard · Estimation sous 48h",
        img: "/images/projects/1-villas/villa P1/villaP_1.jpg",
        alt: "Villa contemporaine à Nîmes conçue par Reservoir Architecture",
        ctaPrimary: "Parler de mon projet",
        ctaEmail: "Email",
    },
    realisations: {
        eyebrow: "Nos réalisations",
        lead: "Restanques, garrigue, terrains en pente, sites méditerranéens : nous partons toujours de votre terrain. Orientation, vues, lumière, règles d’urbanisme, votre maison est conçue pour son site, jamais plaquée dessus.",
        projects: [
            {
                title: "Villa P",
                img: "/images/projects/1-villas/villa P1/villaP_2.jpg",
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
                title: "Villa C",
                img: "/images/projects/1-villas/villa C/villaC_2.jpg",
                alt: "Villa contemporaine C, volumes blancs et piscine miroir, par Reservoir Architecture",
                desc: "Volumes blancs purs posés comme une sculpture horizontale dans le paysage méditerranéen, ouverts sur une terrasse en bois et une piscine miroir.",
                specs: [
                    { icon: "surface", label: "240 m²" },
                    { icon: "mission", label: "Construction neuve" },
                ],
                cta: "Échanger avec un architecte",
                loc: "card_villa_c",
            },
            {
                title: "Villa D",
                img: "/images/projects/1-villas/villa P2/villaD_1.jpg",
                alt: "Villa contemporaine D, volume bois côté rue ouvert sur la pente, par Reservoir Architecture",
                desc: "Maison compacte bardée de bois côté rue, largement ouverte sur la pente et la végétation côté aval. Habiter l’entre-deux, entre intimité et forêt.",
                specs: [
                    { icon: "surface", label: "200 m²" },
                    { icon: "mission", label: "Construction neuve" },
                ],
                cta: "Réaliser ma villa",
                loc: "card_villa_d",
            },
            {
                title: "Villa S",
                img: "/images/projects/1-villas/villa S/villaS_1.jpg",
                alt: "Villa contemporaine S, maison entre les pins, par Reservoir Architecture",
                desc: "Glissée entre les pins, la maison s’étire horizontalement pour préserver le paysage et dialoguer avec la forêt de chênes verts. Un refuge sobre et chaleureux.",
                specs: [
                    { icon: "surface", label: "193 m²" },
                    { icon: "mission", label: "Construction neuve" },
                ],
                cta: "Estimation en 48h",
                loc: "card_villa_s",
            },
            {
                title: "Villa F",
                img: "/images/projects/1-villas/villa F/villaF_2.jpg",
                alt: "Villa contemporaine F, vue aérienne avec piscine, par Reservoir Architecture",
                desc: "Villa contemporaine organisée autour d’une cour-piscine. Béton clair, bois brûlé, lignes ciselées, un haut de gamme sans ostentation.",
                specs: [
                    { icon: "surface", label: "401 m²" },
                    { icon: "mission", label: "Construction neuve" },
                ],
                cta: "Échanger avec un architecte",
                loc: "card_villa_f",
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
                title: "Une connaissance fine du territoire nîmois.",
                text: "Terrains en restanques, garrigue, PLU du Gard : nous avons déjà conçu de nombreuses villas dans la région.",
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
        img: "/images/projects/1-villas/villa L/villaL_2.jpg",
        alt: "Villa contemporaine dans le Gard conçue par Reservoir Architecture",
        eyebrow: "Un architecte qui conçoit à",
        city: "Nîmes",
        paragraphs: [
            "Reservoir Architecture conçoit des villas et maisons contemporaines à Nîmes et dans tout le Gard depuis plus de quinze ans. Nous connaissons les restanques, la garrigue et les terrains en pente qui font le caractère des projets nîmois.",
            "Notre agence est basée à Aix-en-Provence, à moins d’une heure de Nîmes. Nous visitons votre terrain, échangeons avec les services d’urbanisme et suivons le chantier de près.",
        ],
        cta: "Parler de mon projet",
        ctaLoc: "local",
    },
    faq: {
        eyebrow: "Questions fréquentes",
        items: [
            { q: "Faut-il obligatoirement un architecte pour une villa ?", a: "Oui dès que la surface de plancher dépasse 150 m². En dessous, l’architecte reste vivement conseillé pour la qualité, la valeur et la maîtrise du projet." },
            { q: "Intervenez-vous à Nîmes et dans le Gard ?", a: "Oui. Nous avons conçu de nombreuses villas contemporaines dans le Gard, à Nîmes et dans les communes voisines. Notre agence aixoise intervient sur tout le département." },
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
        h2: "Réaliser ma villa contemporaine à Nîmes",
        p: "Un premier échange pour qualifier votre projet, votre terrain et votre budget. Estimation sous 48h, sans engagement.",
        ctaPrimary: "Appeler l’agence",
        ctaEmail: "Écrire un email",
    },
};

export default function VillasNimesPage() {
    return <LandingPage data={data} />;
}
