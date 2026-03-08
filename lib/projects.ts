import { ProjectData } from "../types/project";

export const WAUQUIEZ_PROJECT: ProjectData = {
    id: "wauquiez",
    slug: "wauquiez",
    category: "COMMERCES",
    heroImages: [
        "/images/projects/3-commerces/wauquier/wauquier_1.png"
    ],
    subtitle: "WAUQUIEZ - NAUTISME",
    title: "Show - Room",
    projectLogo: {
        src: "/images/ui/logo-content.png",
        alt: "Wauquiez Logo",
        width: 120,
        height: 48
    },
    descriptionHeader: "Espace Signature",
    descriptionParagraphs: [
        "Un espace écrin sur deux niveaux qui rappelle la promesse de Wauquiez : confort, matériaux nobles et attention aux détails, marqueurs de leur ligne nautique.",
        "Un show room pensé en parcours client : espace détente et accueil en RDC, espace conseil et administration en mezzanine.",
        "L'espace déploie une architecture intérieure fluide où mezzanine, escalier et verrières structurent la perspective.",
        "Le bois chaleureux dialogue avec des parois blanches épurées, créant une atmosphère élégante et contemporaine baignée de lumière naturelle.",
        "Entre accueil sculptural, lignes graphiques et mobilier intégré, le projet affirme une identité forte et raffinée au service de la marque."
    ],
    techSheet: [
        { label: "Lieu", value: "Port Camargue (30)" },
        { label: "Maître d'Ouvrage", value: "Cap Yatching" },
        { label: "Mission", value: "Conception / Permis de construire" },
        { label: "Surface", value: "97,00 m2" },
        { label: "Calendrier", value: "2014" }
    ]
};

export const GENDARMERIE_PROJECT: ProjectData = {
    id: "gendarmerie",
    slug: "gendarmerie",
    category: "ÉQUIPEMENTS",
    heroImages: [
        "/images/projects/4-equipements/gendarmerie/gendarmerie_2.png",
        "/images/projects/4-equipements/gendarmerie/gendarmerie_1.png"
    ],
    subtitle: "BOUC BEL AIR - EQUIPEMENT PUBLIC 2026",
    title: "GENDARMERIE",
    descriptionHeader: "REHABILITATION - EXTENSION ET SURRELEVATION",
    descriptionParagraphs: [
        "Le projet s’inscrit dans un tissu urbain résidentiel dense, l’équipement actuel ne répond plus aux normes en vigueur et au nombre et confort des gendarmes.",
        "Le projet consiste en la réhabilitation, l’extension et surélévation de l’actuelle gendarmerie. Le procédé constructif choisi est l’ossature bois avec façade en bardage métal bronze à lames aléatoires , toiture végétalisée.",
        "La réhabilitation, extension et surélévation de la gendarmerie de Bouc-Bel-Air transforme le bâtiment existant en un équipement contemporain affirmant une identité forte et institutionnelle.",
        "L’ossature bois structure l’intervention et enveloppe l’édifice d’une écriture verticale rythmée, alliant performance environnementale, légèreté constructive et intégration au tissu urbain.",
        "La façade principale, marquée par une séquence tricolore et une transparence maîtrisée, incarne la présence républicaine tout en offrant des espaces fonctionnels, lumineux et durables."
    ],
    techSheet: [
        { label: "Lieu", value: "Bouc Bel Air (13)" },
        { label: "Maître d’Ouvrage", value: "Ville de Bouc Bel Air" },
        { label: "Mission", value: "MOP" },
        { label: "Surface", value: "600 m2" },
        { label: "Coût travaux (estimatif)", value: "900 000,00 € HT" },
        { label: "Calendrier", value: "en cours" }
    ]
};

export const MAISON_F_PROJECT: ProjectData = {
    id: "maison-f",
    slug: "maison-f",
    category: "VILLAS",
    heroImages: ["/images/projects/1-villas/maison F/maison_F_1.jpeg"],
    subtitle: "VILLA PRIVÉE",
    title: "MAISON F",
    descriptionParagraphs: ["Description à venir pour ce projet de villa."],
    techSheet: [{ label: "Type", value: "Villa" }]
};

export const SAMARITAINE_PROJECT: ProjectData = {
    id: "samaritaine",
    slug: "samaritaine",
    category: "LOGEMENTS",
    heroImages: ["/images/projects/2-logements/samaritaine/samaritaine_1.png"],
    subtitle: "LOGEMENTS COLLECTIFS",
    title: "LA SAMARITAINE",
    descriptionParagraphs: ["Description à venir pour ce projet de logements."],
    techSheet: [{ label: "Type", value: "Logements" }]
};

export const REGIE_DES_EAUX_PROJECT: ProjectData = {
    id: "regie-des-eaux",
    slug: "regie-des-eaux",
    category: "ÉQUIPEMENTS",
    heroImages: ["/images/projects/4-equipements/regie des eaux/regie_des_eaux_1.jpg"],
    subtitle: "ÉQUIPEMENT PUBLIC",
    title: "RÉGIE DES EAUX",
    descriptionParagraphs: ["Description à venir pour ce projet d'équipement."],
    techSheet: [{ label: "Type", value: "Équipement" }]
};

export const PROJECTS: ProjectData[] = [
    WAUQUIEZ_PROJECT,
    GENDARMERIE_PROJECT,
    MAISON_F_PROJECT,
    SAMARITAINE_PROJECT,
    REGIE_DES_EAUX_PROJECT
];
