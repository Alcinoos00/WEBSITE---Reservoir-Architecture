import type { Metadata } from "next";
import LandingPage, { LandingData } from "@/components/LandingPage";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Étude de faisabilité et étude capacitaire : investisseurs, entreprises, particuliers",
    description:
        "Architecte DPLG à Aix-en-Provence : études de faisabilité et capacitaires pour investisseurs, projets commerciaux et d’activité en ZAC, et particuliers avant l’achat d’un terrain.",
    alternates: { canonical: `${SITE_URL}/etude-de-faisabilite` },
    openGraph: {
        title: "Étude de faisabilité et étude capacitaire - Reservoir Architecture",
        description:
            "Connaître le potentiel d’un terrain ou d’un bâtiment avant d’acheter ou d’investir, en Provence et dans le Gard.",
        url: `${SITE_URL}/etude-de-faisabilite`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

const data: LandingData = {
    hero: {
        eyebrow: "Étude de faisabilité · Étude capacitaire",
        h1: "Connaître le potentiel avant d’acheter ou d’investir",
        sub: "Terrain à bâtir, immeuble à diviser, local commercial ou bâtiment d’activité : avant de vous engager, Reservoir Architecture étudie ce que le site permet vraiment. Règles d’urbanisme, surface constructible, contraintes du terrain et budget, pour décider en connaissance de cause.",
        trust: "Architecte DPLG · Agence fondée en 2013 · Investisseurs, entreprises et particuliers · Provence et Gard",
        img: "/images/projects/2-logements/martin-pierre/guillot_1.jpg",
        alt: "Petit collectif de logements conçu par Reservoir Architecture",
        ctaPrimary: "Faire étudier mon projet",
        ctaEmail: "Email",
    },
    realisations: {
        eyebrow: "Des projets qui partent d’une étude",
        lead: "Logements sur une parcelle de centre-ville, ensemble commercial, extension d’un supermarché, entrepôt d’activité, maison sur un terrain contraint : chaque projet a commencé par la même question, que permet ce site ?",
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
                desc: "Une ancienne remise démolie pour construire un petit immeuble de deux logements T3, inséré entre les constructions voisines.",
                specs: [
                    { icon: "units", label: "2 logements T3" },
                    { icon: "surface", label: "235 m²" },
                    { icon: "mission", label: "ESQ à DPC" },
                ],
                cta: "Étudier mon bien",
                loc: "inv_card_childebert",
            },
            {
                title: "Esprit Bastide",
                img: "/images/projects/3-commerces/puyricard/puyricard_1.jpg",
                alt: "Ensemble de commerces et services Esprit Bastide à Puyricard par Reservoir Architecture",
                desc: "Construction d’un ensemble de commerces et services à Puyricard, organisé autour d’un patio planté d’oliviers.",
                specs: [
                    { icon: "tag", label: "Commerces et services" },
                    { icon: "mission", label: "Construction neuve" },
                ],
                cta: "Étudier mon projet commercial",
                loc: "inv_card_puyricard",
            },
            {
                title: "Super U La Calmette",
                img: "/images/projects/4-equipements/super-u/superu_1.jpg",
                alt: "Réhabilitation et extension d’un supermarché Super U à La Calmette",
                desc: "Réhabilitation et extension d’un supermarché : reprendre un bâtiment commercial existant pour l’agrandir et le moderniser.",
                specs: [
                    { icon: "surface", label: "2 600 m²" },
                    { icon: "mission", label: "ESQ à DPC" },
                ],
                cta: "Étudier mon projet commercial",
                loc: "inv_card_superu",
            },
            {
                title: "Entrepôt Ferrigno",
                img: "/images/projects/4-equipements/ferrigno/ferrigno_1.jpg",
                alt: "Entrepôt de stockage et conserverie à Port-Saint-Louis-du-Rhône par Reservoir Architecture",
                desc: "Entrepôt de stockage et conserverie dans le delta du Rhône : un bâtiment d’activité implanté dans un site naturel sensible.",
                specs: [
                    { icon: "surface", label: "3 000 m²" },
                    { icon: "mission", label: "ESQ à DPC" },
                ],
                cta: "Étudier mon projet d’activité",
                loc: "inv_card_ferrigno",
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
                title: "Villa P2",
                img: "/images/projects/1-villas/villa P2/villaD_1.jpg",
                alt: "Villa contemporaine sur un terrain en pente et inondable à Nîmes par Reservoir Architecture",
                desc: "Une villa sur un terrain en pente, en site sensible inondable : le type de terrain dont il faut connaître les contraintes avant l’achat.",
                specs: [
                    { icon: "surface", label: "200 m²" },
                    { icon: "mission", label: "Conception et PC" },
                ],
                cta: "Faire étudier mon terrain",
                loc: "inv_card_villa_p2",
            },
        ],
    },
    reassurance: {
        reasonsEyebrow: "Une étude préalable, pour qui ?",
        reasons: [
            {
                icon: "building",
                title: "Investisseurs.",
                text: "Division d’une maison ou d’un immeuble, surélévation, changement d’usage, petit collectif : nous évaluons le nombre de logements possible et le potentiel réel avant que vous ne signiez.",
            },
            {
                icon: "store",
                title: "Entreprises et projets d’activité.",
                text: "Étude capacitaire pour commerces, locaux d’activité, entrepôts ou bâtiments industriels, en ZAC, en zone d’activité ou en ville : surface constructible, implantation, stationnement, accès et règles applicables.",
            },
            {
                icon: "pin",
                title: "Particuliers avant l’achat d’un terrain.",
                text: "Que peut-on construire sur ce terrain ? Nous lisons le PLU (qui a remplacé l’ancien POS), les risques, les servitudes, la pente et les accès, pour éviter les mauvaises surprises après la signature.",
            },
        ],
        stepsEyebrow: "Comment se passe l’étude",
        steps: [
            { title: "Premier échange.", text: "Vous nous présentez le terrain ou le bâtiment, votre projet et votre budget." },
            { title: "Analyse du site et des règles.", text: "PLU ou règlement de ZAC, risques, servitudes, réseaux, accès, bâti existant." },
            { title: "Capacitaire et esquisse.", text: "Surface constructible, implantation, nombre de logements ou de locaux, premières esquisses." },
            { title: "Conclusions et suite.", text: "Un rendu clair pour décider. Si vous le souhaitez, nous poursuivons jusqu’au permis de construire et au chantier." },
        ],
        cta: "Faire étudier mon projet",
        ctaLoc: "inv_reassurance",
        secondaryCta: { label: "Particulier : étude de terrain à 250 € TTC", href: "/etude-terrain" },
    },
    local: {
        img: "/images/projects/3-commerces/puyricard/puyricard_2.jpg",
        alt: "Ensemble commercial à Puyricard conçu par Reservoir Architecture",
        eyebrow: "Un architecte installé à",
        city: "Aix-en-Provence",
        paragraphs: [
            "Notre agence est basée à Aix-en-Provence. Nous réalisons des études de faisabilité dans le Pays d’Aix, les Bouches-du-Rhône, le reste de la Provence et le Gard.",
            "Nous travaillons aussi avec les agents immobiliers, notaires, marchands de biens et conseillers en patrimoine qui accompagnent vos acquisitions.",
        ],
        cta: "Parler de mon projet",
        ctaLoc: "inv_local",
    },
    faq: {
        eyebrow: "Questions fréquentes",
        items: [
            { q: "Pouvez-vous étudier un terrain ou un bien avant que je l’achète ?", a: "Oui, c’est le meilleur moment. L’étude vous indique ce que le site permet réellement avant de signer, voire avant de faire une offre." },
            { q: "Qu’est-ce qu’une étude capacitaire ?", a: "C’est l’étude de ce qu’un terrain ou un bâtiment peut accueillir : surface de plancher, nombre de logements ou de locaux, implantation et stationnement, selon les règles d’urbanisme." },
            { q: "Intervenez-vous pour des projets commerciaux ou industriels en ZAC ?", a: "Oui. Nous étudions les projets de commerces, de locaux d’activité et d’entrepôts, en tenant compte du PLU et, en ZAC, du cahier des charges et des prescriptions de la zone." },
            { q: "Particulier, j’hésite à acheter un terrain. Que vérifiez-vous ?", a: "La zone du PLU et ce qu’elle autorise, la surface constructible, les reculs et hauteurs, les risques (inondation, incendie), les servitudes, les accès et les réseaux. Nous proposons pour cela une étude de terrain à prix fixe, 250 € TTC, sans visite sur place." },
            { q: "Peut-on diviser une maison ou un immeuble en plusieurs logements ?", a: "Souvent, mais cela dépend du PLU, du stationnement exigé, de la structure et des réseaux. Nous vérifions ces points au cas par cas." },
            { q: "Faut-il obligatoirement un architecte ?", a: "Pour un particulier, oui dès que le projet soumis à permis de construire dépasse 150 m² de surface de plancher. Si vous investissez via une société, comme une SCI, l’architecte est obligatoire pour tout permis de construire, quelle que soit la surface." },
            { q: "Quels sont vos honoraires ?", a: "Ils dépendent du site et du niveau d’étude. Nous vous remettons une proposition après un premier échange." },
        ],
        cta: "Poser une question",
        ctaLoc: "inv_faq",
    },
    finalCta: {
        img: "/images/projects/2-logements/trentini/childebert_2.jpg",
        h2: "Faire étudier mon terrain ou mon bien",
        p: "Présentez-nous le site et votre projet. Nous vous disons ce qu’il permet et comment avancer.",
        ctaPrimary: "Appeler l’agence",
        ctaEmail: "Écrire un email",
    },
};

export default function EtudeFaisabilitePage() {
    return <LandingPage data={data} />;
}
