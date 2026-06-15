import type { Metadata } from "next";
import LandingPage, { LandingData } from "@/components/LandingPage";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte commercial en PACA",
    description:
        "Architecte DPLG pour vos commerces, boutiques et showrooms en région PACA. Concept, agencement et permis, au service de votre image et de vos ventes. Estimation sous 48h.",
    alternates: { canonical: `${SITE_URL}/commerces-aix-en-provence` },
    openGraph: {
        title: "Architecte commercial en PACA - Reservoir Architecture",
        description:
            "Boutiques, showrooms et espaces de vente en région PACA, du concept à l’agencement. Estimation sous 48h.",
        url: `${SITE_URL}/commerces-aix-en-provence`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

const data: LandingData = {
    hero: {
        eyebrow: "Architecte à Aix-en-Provence",
        h1: "Aménagez votre commerce en PACA",
        sub: "Reservoir Architecture conçoit boutiques, showrooms et espaces de vente, du concept à l’agencement. Une architecture commerciale qui sert votre image de marque et votre parcours client.",
        trust: "Architecte DPLG · Agence fondée en 2013 · Cacharel, Wauquiez, Puyricard · Estimation sous 48h",
        img: "/images/projects/3-commerces/puyricard/puyricard_2.jpg",
        alt: "Architecture commerciale en Pays d’Aix conçue par Reservoir Architecture",
        ctaPrimary: "Parler de mon projet",
        ctaEmail: "Email",
    },
    realisations: {
        eyebrow: "Nos réalisations",
        lead: "Un commerce qui performe, c’est une image claire, un parcours client fluide et un agencement qui met le produit en scène. Que vous lanciez une enseigne, un concept à dupliquer ou une boutique unique, nous concevons l’espace qui vous ressemble et qui vend.",
        projects: [
            {
                title: "Esprit Bastide",
                img: "/images/projects/3-commerces/puyricard/puyricard_1.jpg",
                alt: "Esprit Bastide, ensemble de commerces à Puyricard, par Reservoir Architecture",
                desc: "Ensemble de commerces et services articulé autour d’un patio d’oliviers, dans l’esprit d’un village provençal contemporain, autour de l’emblématique Chocolaterie de Puyricard.",
                specs: [
                    { icon: "tag", label: "Commerces et services" },
                    { icon: "pin", label: "Puyricard (13)" },
                ],
                cta: "Aménager mon commerce",
                loc: "card_puyricard",
            },
            {
                title: "Cacharel",
                img: "/images/projects/3-commerces/cacharel/cacharel_1.jpg",
                alt: "Concept boutique Cacharel par Reservoir Architecture",
                desc: "Concept boutique de la maison Cacharel, décliné en France et à l’international. Un écrin minimaliste de bois blond au service d’une marque de luxe.",
                specs: [
                    { icon: "tag", label: "Concept boutique" },
                    { icon: "pin", label: "France et International" },
                ],
                cta: "Estimation en 48h",
                loc: "card_cacharel",
            },
            {
                title: "Wauquiez",
                img: "/images/projects/3-commerces/wauquiez/wauquiez_1.jpg",
                alt: "Showroom nautique Wauquiez par Reservoir Architecture",
                desc: "Showroom nautique haut de gamme sur deux niveaux pour le constructeur Wauquiez. Parcours client, verrières et matériaux clairs au service du positionnement de la marque.",
                specs: [
                    { icon: "tag", label: "Showroom nautique" },
                    { icon: "surface", label: "97 m²" },
                    { icon: "pin", label: "Port-Camargue (30)" },
                ],
                cta: "Échanger avec un architecte",
                loc: "card_wauquiez",
            },
            {
                title: "Denim",
                img: "/images/projects/3-commerces/denim/denim_1.jpg",
                alt: "Boutique Denim, aménagement intérieur par Reservoir Architecture",
                desc: "Aménagement de l’espace de vente de la marque Denim. Un paysage intérieur industriel où béton, acier et bois subliment une identité brute et authentique.",
                specs: [
                    { icon: "tag", label: "Boutique" },
                    { icon: "surface", label: "489 m²" },
                    { icon: "pin", label: "Nîmes (30)" },
                ],
                cta: "Aménager mon commerce",
                loc: "card_denim",
            },
            {
                title: "Food Village",
                img: "/images/projects/3-commerces/food-village/foodvillage_1.jpg",
                alt: "Concept de café et snacking Food Village par Reservoir Architecture",
                desc: "Concept de café et de snacking organisé autour d’un comptoir central. Blanc immaculé, bois naturel et touches graphiques pour une atmosphère fraîche et conviviale.",
                specs: [
                    { icon: "tag", label: "Café / snacking" },
                    { icon: "surface", label: "261 m²" },
                    { icon: "pin", label: "Nîmes (30)" },
                ],
                cta: "Estimation en 48h",
                loc: "card_food_village",
            },
            {
                title: "Le Pétrin d’Honoré",
                img: "/images/projects/3-commerces/fournil-st-honore/honore_1.jpg",
                alt: "Concept de boulangerie Le Pétrin d’Honoré par Reservoir Architecture",
                desc: "Concept de boulangerie pensé pour être décliné sur plusieurs sites. Façade noire largement vitrée qui met en scène le savoir-faire artisanal au cœur du flux urbain.",
                specs: [
                    { icon: "tag", label: "Boulangerie" },
                    { icon: "surface", label: "136 m²" },
                    { icon: "pin", label: "Montpellier (34)" },
                ],
                cta: "Échanger avec un architecte",
                loc: "card_petrin",
            },
        ],
    },
    reassurance: {
        reasonsEyebrow: "Pourquoi Reservoir Architecture",
        reasons: [
            {
                icon: "store",
                title: "Une image au service des ventes.",
                text: "Concept, identité, parcours client et mise en scène du produit, pensés pour convertir.",
            },
            {
                icon: "building",
                title: "Concept déclinable.",
                text: "Nous concevons des concepts reproductibles d’un point de vente à l’autre, comme pour Cacharel ou Le Pétrin d’Honoré.",
            },
            {
                icon: "route",
                title: "Du concept à l’ouverture.",
                text: "Agencement, normes ERP, dépôt des autorisations et suivi de chantier, avec un seul interlocuteur.",
            },
        ],
        stepsEyebrow: "Comment se passe votre projet",
        steps: [
            { title: "Échange et brief.", text: "Votre enseigne, votre cible, votre surface, vos contraintes d’exploitation. Estimation sous 48h." },
            { title: "Concept et agencement.", text: "Identité spatiale, parcours client, plans d’aménagement." },
            { title: "Autorisations et permis.", text: "Conformité ERP, dépôt des autorisations nécessaires." },
            { title: "Réalisation.", text: "Consultation des entreprises et suivi de chantier jusqu’à l’ouverture." },
        ],
        cta: "Échanger avec un architecte",
        ctaLoc: "reassurance",
    },
    local: {
        img: "/images/projects/3-commerces/cacharel/cacharel_2.jpg",
        alt: "Aménagement de boutique conçu par Reservoir Architecture",
        eyebrow: "Un architecte installé à",
        city: "Aix-en-Provence",
        paragraphs: [
            "Notre agence est basée à Aix-en-Provence et intervient dans toute la région PACA pour vos commerces.",
            "Boutiques, showrooms et espaces de vente : nous concevons des Bouches-du-Rhône au Var, du Vaucluse aux Alpes-Maritimes.",
        ],
        cta: "Parler de mon projet",
        ctaLoc: "local",
    },
    faq: {
        eyebrow: "Questions fréquentes",
        items: [
            { q: "Gérez-vous les normes ERP et l’accessibilité ?", a: "Oui, la conformité ERP et l’accessibilité sont intégrées à la conception et aux dossiers d’autorisation." },
            { q: "Pouvez-vous décliner un concept sur plusieurs points de vente ?", a: "Oui. Nous concevons des concepts reproductibles, déjà déployés en France et à l’international pour des enseignes comme Cacharel." },
            { q: "Travaillez-vous avec les enseignes comme avec les indépendants ?", a: "Oui, du point de vente unique au concept déployé en réseau, pour commerçants indépendants comme pour enseignes." },
            { q: "Quels délais pour aménager un commerce ?", a: "Ils dépendent de la surface, du concept et des autorisations à obtenir. Nous vous donnons un calendrier prévisionnel dès le premier échange." },
            { q: "Vous occupez-vous des démarches administratives (enseigne, autorisations) ?", a: "Oui. Nous gérons les démarches et autorisations nécessaires à votre projet, des dossiers réglementaires à l’enseigne." },
            { q: "Comment fonctionne l’estimation en 48h ?", a: "Vous nous décrivez votre projet par téléphone ou email (surface, enseigne, localisation). Nous revenons sous 48h avec une première estimation chiffrée." },
        ],
        cta: "Poser une question",
        ctaLoc: "faq",
    },
    finalCta: {
        img: "/images/projects/3-commerces/wauquiez/wauquiez_2.jpg",
        h2: "Aménager mon commerce en PACA",
        p: "Parlons de votre enseigne, de votre surface et de vos délais d’ouverture. Estimation sous 48h, sans engagement.",
        ctaPrimary: "Appeler l’agence",
        ctaEmail: "Écrire un email",
    },
};

export default function CommercesAixPage() {
    return <LandingPage data={data} />;
}
