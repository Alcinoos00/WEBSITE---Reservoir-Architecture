import type { Metadata } from "next";
import LandingPage, { LandingData } from "@/components/LandingPage";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte équipements publics à Aix-en-Provence",
    description:
        "Architecte DPLG à Aix-en-Provence pour vos équipements publics. Expérience de la maîtrise d’ouvrage publique (loi MOP), références en PACA. Consultez l’agence.",
    alternates: { canonical: `${SITE_URL}/equipements-aix-en-provence` },
    openGraph: {
        title: "Architecte équipements publics à Aix-en-Provence - Reservoir Architecture",
        description:
            "Équipements publics en PACA : réhabilitation, extension et construction neuve, en loi MOP. Références publiques.",
        url: `${SITE_URL}/equipements-aix-en-provence`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

const data: LandingData = {
    hero: {
        eyebrow: "Architecte à Aix-en-Provence",
        h1: "Architecte d’équipements publics à Aix-en-Provence",
        sub: "Reservoir Architecture conçoit et réhabilite les équipements publics : casernes, archives, locaux techniques, équipements jeunesse. Une expérience confirmée de la commande publique, du diagnostic à la réception.",
        trust: "Architecte DPLG · Agence fondée en 2013 · Maîtrise d’ouvrage publique (MOP) · Références en PACA",
        img: "/images/projects/4-equipements/regie-des-eaux/regiedeseaux_2.jpg",
        alt: "Équipement public conçu par Reservoir Architecture à Aix-en-Provence",
        ctaPrimary: "Présenter notre projet",
        ctaEmail: "Email",
    },
    realisations: {
        eyebrow: "Nos réalisations",
        lead: "Réhabilitation, extension ou construction neuve, un équipement public doit conjuguer fonctionnalité, durabilité, conformité réglementaire et maîtrise des budgets. Nous accompagnons les collectivités sur l’ensemble de la procédure, souvent en mandataire de groupement.",
        projects: [
            {
                title: "Régie des eaux",
                img: "/images/projects/4-equipements/regie-des-eaux/regiedeseaux_1.jpg",
                alt: "Régie des eaux d’Aix-en-Provence réhabilitée par Reservoir Architecture",
                desc: "Réhabilitation, restructuration et extension du centre d’exploitation de la Régie des eaux d’Aix-en-Provence. Façade de lames verticales bleues, atrium lumineux, identité de service public moderne.",
                specs: [
                    { icon: "pin", label: "Aix-en-Provence (13)" },
                    { icon: "surface", label: "3 080 m²" },
                    { icon: "mission", label: "Mandataire MOP" },
                ],
                cta: "Demander nos références",
                loc: "card_regie",
            },
            {
                title: "Gendarmerie",
                img: "/images/projects/4-equipements/gendarmerie/gendarmerie_1.jpg",
                alt: "Gendarmerie de Bouc-Bel-Air réhabilitée par Reservoir Architecture",
                desc: "Réhabilitation, extension et surélévation de la gendarmerie pour la Ville de Bouc-Bel-Air. Ossature bois, façade bronze et séquence tricolore affirmant la présence républicaine.",
                specs: [
                    { icon: "pin", label: "Bouc-Bel-Air (13)" },
                    { icon: "surface", label: "600 m²" },
                    { icon: "mission", label: "MOP" },
                ],
                cta: "Nous consulter",
                loc: "card_gendarmerie",
            },
            {
                title: "Archives municipales",
                img: "/images/projects/4-equipements/vitrolles/vitrolles_1.jpg",
                alt: "Archives municipales de Vitrolles par Reservoir Architecture",
                desc: "Transformation d’un hangar en archives municipales pour la Ville de Vitrolles. Monolithe noir sobre et institutionnel, flux publics et techniques clairement dissociés.",
                specs: [
                    { icon: "pin", label: "Vitrolles (13)" },
                    { icon: "surface", label: "516 m²" },
                    { icon: "mission", label: "Mandataire MOP" },
                ],
                cta: "Présenter notre projet",
                loc: "card_vitrolles",
            },
            {
                title: "Boulodrome",
                img: "/images/projects/4-equipements/salon-de-provence/salon_1.jpg",
                alt: "Boulodrome de Salon-de-Provence par Reservoir Architecture",
                desc: "Couverture et réhabilitation du boulodrome pour la Ville de Salon-de-Provence. Structure mixte bois et métal, façade urbaine en continuité avec le quartier.",
                specs: [
                    { icon: "pin", label: "Salon-de-Provence (13)" },
                    { icon: "surface", label: "1 182 m²" },
                    { icon: "mission", label: "Mandataire MOP" },
                ],
                cta: "Demander nos références",
                loc: "card_salon",
            },
            {
                title: "Maison des jeunes",
                img: "/images/projects/4-equipements/grans/grans_1.jpg",
                alt: "Maison des jeunes de Grans par Reservoir Architecture",
                desc: "Réhabilitation d’une maison de ville en maison des jeunes pour la Ville de Grans. Espaces décloisonnés, transparence et mobilier sur-mesure pour la jeunesse.",
                specs: [
                    { icon: "pin", label: "Grans (13)" },
                    { icon: "surface", label: "162 m²" },
                    { icon: "mission", label: "Mandataire MOP" },
                ],
                cta: "Nous consulter",
                loc: "card_grans",
            },
            {
                title: "Capitainerie",
                img: "/images/projects/4-equipements/capitainerie/capitainerie_1.jpg",
                alt: "Capitainerie de la Pointe Rouge à Marseille par Reservoir Architecture",
                desc: "Réhabilitation et surélévation de l’ancienne capitainerie du port de la Pointe Rouge à Marseille. Un volume minéral face à la mer, façade de lames céramiques vibrantes.",
                specs: [
                    { icon: "pin", label: "Marseille (13)" },
                    { icon: "surface", label: "600 m²" },
                    { icon: "mission", label: "MOP" },
                ],
                cta: "Présenter notre projet",
                loc: "card_capitainerie",
            },
        ],
    },
    reassurance: {
        reasonsEyebrow: "Pourquoi Reservoir Architecture",
        reasons: [
            {
                icon: "building",
                title: "Expérience de la commande publique.",
                text: "Missions en loi MOP, souvent en mandataire de groupement, pour des communes et établissements publics.",
            },
            {
                icon: "award",
                title: "Références publiques en PACA.",
                text: "Régie des eaux d’Aix, gendarmerie de Bouc-Bel-Air, archives de Vitrolles, boulodrome de Salon-de-Provence, maison des jeunes de Grans.",
            },
            {
                icon: "shield",
                title: "Conformité et budgets maîtrisés.",
                text: "Respect des contraintes réglementaires, des délais de procédure et des enveloppes financières.",
            },
        ],
        stepsEyebrow: "Comment se déroule un projet",
        steps: [
            { title: "Échange et programme.", text: "Compréhension du besoin, du site et des contraintes de la collectivité." },
            { title: "Diagnostic et études.", text: "Diagnostic de l’existant, esquisse, avant-projets (APS, APD)." },
            { title: "Dossiers réglementaires.", text: "Permis et pièces nécessaires, dans le cadre de la procédure." },
            { title: "Réalisation.", text: "Consultation des entreprises, suivi de chantier et OPC le cas échéant." },
        ],
        cta: "Échanger avec l’agence",
        ctaLoc: "reassurance",
    },
    local: {
        img: "/images/projects/4-equipements/gendarmerie/gendarmerie_2.jpg",
        alt: "Équipement public en ossature bois conçu par Reservoir Architecture",
        eyebrow: "Un architecte installé à",
        city: "Aix-en-Provence",
        paragraphs: [
            "Notre agence est basée à Aix-en-Provence et travaille régulièrement avec les collectivités du territoire : Régie des eaux d’Aix-en-Provence, Ville de Bouc-Bel-Air, Ville de Vitrolles, Ville de Salon-de-Provence, Ville de Grans.",
            "Cette proximité facilite les échanges, les visites de site et le suivi des opérations.",
        ],
        cta: "Présenter notre projet",
        ctaLoc: "local",
    },
    faq: {
        eyebrow: "Questions fréquentes",
        items: [
            { q: "Avez-vous l’expérience des marchés publics ?", a: "Oui. Nous intervenons en loi MOP, souvent en mandataire de groupement, pour des communes et établissements publics de la région." },
            { q: "Quels types d’équipements réalisez-vous ?", a: "Casernes et centres de secours, archives municipales, locaux et centres techniques, équipements jeunesse, locaux d’exploitation, en neuf comme en réhabilitation." },
            { q: "Pouvez-vous être mandataire d’un groupement ?", a: "Oui, nous avons assuré ce rôle sur plusieurs opérations publiques (MOP, OPC)." },
            { q: "Intégrez-vous accessibilité, ERP et performance environnementale ?", a: "Oui, ces exigences sont intégrées dès la conception, selon la nature de l’équipement." },
            { q: "Intervenez-vous en réhabilitation d’équipements existants ?", a: "Oui, une grande partie de nos références publiques sont des réhabilitations, extensions ou surélévations de bâtiments existants." },
            { q: "Pouvez-vous nous transmettre vos références publiques ?", a: "Oui, sur demande. Contactez l’agence pour un dossier de références adapté à votre projet." },
        ],
        cta: "Poser une question",
        ctaLoc: "faq",
    },
    finalCta: {
        img: "/images/projects/4-equipements/vitrolles/vitrolles_2.jpg",
        h2: "Échanger sur votre équipement public",
        p: "Présentez-nous votre projet et vos contraintes. Nous revenons vers vous avec nos références et notre compréhension du besoin.",
        ctaPrimary: "Appeler l’agence",
        ctaEmail: "Écrire un email",
    },
};

export default function EquipementsAixPage() {
    return <LandingPage data={data} />;
}
