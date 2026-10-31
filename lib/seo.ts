import type { ProjectData } from "@/types/project";
import type { Metadata } from "next";

export const SITE_URL = "https://www.reservoir-architecture.com";
export const SITE_NAME = "Reservoir Architecture";
export const SITE_LOCATION = "Aix-en-Provence";
export const SITE_REGION = "Provence-Alpes-Côte d'Azur";
export const SITE_COUNTRY = "FR";
export const SITE_PHONE = "+33613516767";
export const SITE_PHONE_DISPLAY = "+33 6 13 51 67 67";
export const SITE_EMAIL = "contact@reservoir-architecture.com";
// Adresse alignée sur le registre SIRENE (SIREN 792 144 875) et la Base Adresse Nationale :
// les annuaires et Google recoupent ce libellé, il doit être identique partout.
export const SITE_STREET_ADDRESS = "Europarc Pichaury, bât. C2, 1330 avenue Jean-René Guillibert Gautier de la Lauzière";
export const SITE_POSTAL_CODE = "13290";
export const SITE_ADDRESS = `${SITE_STREET_ADDRESS}, ${SITE_POSTAL_CODE} ${SITE_LOCATION}`;
export const SITE_GEO = { latitude: 43.478817, longitude: 5.371065 };
export const ARCHIDVISOR_URL =
    "https://www.archidvisor.com/professionnels/architectes/provence-alpes-cote-d-azur/bouches-du-rhone/aix-en-provence-13/reservoir-architecture";
// Fiche Google de l'agence (lien de partage donné par Emeric le 2026-10-30)
export const GOOGLE_REVIEWS_URL = "https://share.google/DirUVGBGHu9twK7XL";
export const INSTAGRAM_URL = "https://www.instagram.com/reservoirarchitecture/";
export const FACEBOOK_URL = "https://www.facebook.com/reservoir.architecture/";
export const HOUZZ_URL = "https://www.houzz.fr/pro/reservoir-architecture";
// Page LinkedIn de l'agence (adresse personnalisée donnée par Emeric).
export const LINKEDIN_URL = "https://www.linkedin.com/company/reservoir-architecture/";
export const PINTEREST_URL = "https://fr.pinterest.com/reservoirarchi/";
export const ARCHITECTES_POUR_TOUS_URL = "https://www.architectes-pour-tous.fr/architectes-pour-tous/reservoir-architecture";
export const SITE_FOUNDED = "2013";
export const SITE_FOUNDER = "Serge Ettore";
export const SITE_FOUNDER_TITLE = "Architecte DPLG";
export const SITE_DEFAULT_IMAGE = `${SITE_URL}/images/projects/1-villas/villa%20F/villaF_1.jpg`;
export const SITE_DEFAULT_IMAGE_ALT = "Villa contemporaine conçue par Reservoir Architecture";

export const AREA_SERVED_CITIES = [
    "Aix-en-Provence",
    "Marseille",
    "Salon-de-Provence",
    "Vitrolles",
    "Avignon",
    "Toulon",
    "Nîmes",
    "Montpellier",
];

export const AREA_SERVED_REGIONS = [
    "Provence-Alpes-Côte d'Azur",
    "Bouches-du-Rhône",
    "Var",
    "Vaucluse",
    "Occitanie",
    "Gard",
    "Hérault",
];

export const KNOWS_ABOUT = [
    "Architecture résidentielle",
    "Villa contemporaine",
    "Maison d'architecte",
    "Rénovation et extension",
    "Logements collectifs",
    "Résidences",
    "Architecture commerciale",
    "Aménagement de showroom",
    "Design retail",
    "Équipements publics",
    "Réhabilitation",
    "Architecture en PACA et en Occitanie",
    "Étude de faisabilité",
    "Étude capacitaire",
    "Analyse de PLU avant achat de terrain",
];

export const TYPOLOGY_LABEL: Record<string, string> = {
    VILLAS: "Villa contemporaine",
    LOGEMENTS: "Logements collectifs",
    COMMERCES: "Architecture commerciale",
    ÉQUIPEMENTS: "Équipement public",
};

export const CATEGORY_TO_PATH: Record<string, string> = {
    VILLAS: "villas",
    LOGEMENTS: "logements",
    COMMERCES: "commerces",
    ÉQUIPEMENTS: "equipements",
};

export function categoryToPath(category: string | undefined): string {
    if (!category) return "";
    return CATEGORY_TO_PATH[category] ?? "";
}

export function typologyLabel(category: string | undefined): string {
    if (!category) return "Projet d'architecture";
    return TYPOLOGY_LABEL[category] ?? "Projet d'architecture";
}

// Type d'un projet précis : son type propre s'il en a un, sinon celui de sa catégorie.
export function projectTypology(project: ProjectData): string {
    return project.typology ?? typologyLabel(project.category);
}

export function getProjectAlt(project: ProjectData, index: number): string {
    const described = project.imageAlts?.[index];
    if (described) return `${described} - ${projectName(project)}, ${SITE_NAME}`;
    const typology = projectTypology(project);
    const count = project.heroImages.length;
    const view = index === 0 ? "vue principale" : `vue ${index + 1} sur ${count}`;
    return `${projectName(project)}, ${typology.toLowerCase()} ${projectAt(project)} par ${SITE_NAME} : ${view}`;
}

export function getProjectUrl(project: ProjectData): string {
    const path = categoryToPath(project.category);
    return `${SITE_URL}/${path}/${project.slug}`;
}

export function absoluteImageUrl(relativePath: string): string {
    if (relativePath.startsWith("http")) return relativePath;
    const clean = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
    return `${SITE_URL}${clean}`;
}

export function truncateAtWord(text: string, maxLen: number): string {
    if (text.length <= maxLen) return text;
    const sliced = text.slice(0, maxLen);
    const lastSpace = sliced.lastIndexOf(" ");
    return (lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced) + "...";
}

// "NÎMES (30)" -> "Nîmes (30)", "AIX-EN-PROVENCE (13)" -> "Aix-en-Provence (13)"
const LOWER_WORDS = new Set(["de", "du", "des", "la", "le", "les", "en", "et", "sur", "sous", "d", "l"]);

export function titleCase(text: string): string {
    return text
        .toLocaleLowerCase("fr-FR")
        .replace(/(^|[\s\-'’(])(\p{L}+)/gu, (match: string, sep: string, word: string, offset: number) =>
            offset > 0 && LOWER_WORDS.has(word) ? sep + word : sep + word.charAt(0).toLocaleUpperCase("fr-FR") + word.slice(1),
        );
}

// Nom du projet en casse normale, en gardant les sigles courts : "VILLA T" -> "Villa T",
// "CENTRE DE PREMIERE INTERVENTION - CPI" -> "Centre de Premiere Intervention - CPI", "SUPER U" -> "Super U".
export function projectName(project: ProjectData): string {
    const original = project.title.split(/(\s+)/);
    return titleCase(project.title)
        .split(/(\s+)/)
        .map((w, i) => {
            const o = original[i] ?? "";
            // Lettre seule ("VILLA L", "VILLA D") ou sigle ("CPI") : gardé tel quel. Les petits mots (DE, LES) passent en minuscules.
            return /^\p{Lu}$/u.test(o) || (/^\p{Lu}{2,3}$/u.test(o) && !LOWER_WORDS.has(o.toLowerCase())) ? o : w;
        })
        .join("");
}

// Lieu du projet précédé de sa préposition : "à Nîmes (30)", "en France et à l'international".
export function projectAt(project: ProjectData): string {
    if (/international/i.test(project.subtitle)) return "en France et à l'international";
    return `à ${titleCase(project.subtitle)}`;
}

export function getProjectMetadata(project: ProjectData): Metadata {
    const typology = projectTypology(project);
    // Casse normale (les majuscules pleines se lisent mal dans les résultats Google et les réponses des IA).
    const title = `${projectName(project)}, ${typology.toLowerCase()} ${projectAt(project)}`;
    const ogTitle = `${title} | ${SITE_NAME}`;
    // Description lisible par Google et les assistants IA : type de projet + lieu d'abord,
    // puis l'accroche du projet (seule, elle ne disait ni quoi ni où).
    const header = project.descriptionHeader ?? project.optionalSubtitle;
    const rawDesc = `${typology} ${projectAt(project)} par ${SITE_NAME}, architecte à ${SITE_LOCATION}. ${projectName(project)}${header ? ` : ${header.replace(/\s+/g, " ").trim()}` : ""}.`;
    const description = truncateAtWord(rawDesc, 160);
    const url = getProjectUrl(project);
    const image = project.heroImages[0]
        ? absoluteImageUrl(project.heroImages[0])
        : `${SITE_URL}/images/ui/logo_light.svg`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title: ogTitle,
            description,
            url,
            type: "article",
            locale: "fr_FR",
            siteName: SITE_NAME,
            images: [{ url: image, width: 1200, height: 800, alt: getProjectAlt(project, 0) }],
        },
        twitter: {
            card: "summary_large_image",
            title: ogTitle,
            description,
            images: [image],
        },
    };
}

function extractDept(subtitle: string): string | undefined {
    if (/\(GARD\)/i.test(subtitle)) return "30";
    const match = subtitle.match(/\((\d{2,3})\)/);
    return match?.[1];
}

function deptToRegion(dept: string | undefined): string {
    const map: Record<string, string> = {
        "13": "Provence-Alpes-Côte d'Azur",
        "30": "Occitanie",
        "83": "Provence-Alpes-Côte d'Azur",
        "84": "Provence-Alpes-Côte d'Azur",
        "34": "Occitanie",
        "24": "Nouvelle-Aquitaine",
    };
    if (!dept) return SITE_REGION;
    return map[dept] ?? SITE_REGION;
}

function extractCity(subtitle: string): string {
    return titleCase(subtitle.replace(/\s*\((\d{2,3}|GARD)\)\s*$/i, "").trim());
}

export function getOrganizationJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: "RESERVOIR Architecture",
        description:
            "Agence d'architecture à Aix-en-Provence intervenant en PACA et en Occitanie. Villas contemporaines, logements collectifs, commerces, équipements publics, rénovation et réhabilitation.",
        url: SITE_URL,
        logo: `${SITE_URL}/images/ui/logo_light.svg`,
        image: SITE_DEFAULT_IMAGE,
        telephone: SITE_PHONE,
        email: SITE_EMAIL,
        priceRange: "Sur devis",
        address: {
            "@type": "PostalAddress",
            streetAddress: SITE_STREET_ADDRESS,
            postalCode: SITE_POSTAL_CODE,
            addressLocality: SITE_LOCATION,
            addressRegion: SITE_REGION,
            addressCountry: SITE_COUNTRY,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: SITE_GEO.latitude,
            longitude: SITE_GEO.longitude,
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${SITE_GEO.latitude},${SITE_GEO.longitude}`,
        sameAs: [ARCHIDVISOR_URL, HOUZZ_URL, ARCHITECTES_POUR_TOUS_URL, INSTAGRAM_URL, FACEBOOK_URL, PINTEREST_URL, LINKEDIN_URL],
        areaServed: [
            ...AREA_SERVED_CITIES.map((name) => ({ "@type": "City", name })),
            ...AREA_SERVED_REGIONS.map((name) => ({ "@type": "AdministrativeArea", name })),
        ],
        founder: {
            "@type": "Person",
            name: SITE_FOUNDER,
            jobTitle: SITE_FOUNDER_TITLE,
        },
        foundingDate: SITE_FOUNDED,
        knowsAbout: KNOWS_ABOUT,
        slogan: "Construire une présence",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: SITE_PHONE,
            email: SITE_EMAIL,
            contactType: "customer service",
            areaServed: SITE_COUNTRY,
            availableLanguage: ["fr"],
        },
    };
}

export function getWebsiteJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE_URL}/#organization` },
    };
}

export function getContactPageJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact#contact`,
        url: `${SITE_URL}/contact`,
        name: `Contact - ${SITE_NAME}`,
        isPartOf: { "@id": `${SITE_URL}/#organization` },
        about: { "@id": `${SITE_URL}/#organization` },
    };
}

export function getCollectionPageJsonLd(args: {
    url: string;
    name: string;
    description: string;
    items: ProjectData[];
}) {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: args.name,
        description: args.description,
        url: args.url,
        isPartOf: { "@id": `${SITE_URL}/#organization` },
        mainEntity: {
            "@type": "ItemList",
            itemListElement: args.items.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: getProjectUrl(p),
                name: p.title,
            })),
        },
    };
}

export function getProjectJsonLd(project: ProjectData) {
    const dept = extractDept(project.subtitle);
    const city = extractCity(project.subtitle);
    const year = project.techSheet?.find((t) => /année|year/i.test(t.label))?.value;
    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: truncateAtWord(
            (project.descriptionParagraphs[0] ?? project.optionalSubtitle ?? "").replace(/\s+/g, " "),
            300,
        ),
        creator: { "@id": `${SITE_URL}/#organization` },
        url: getProjectUrl(project),
        image: project.heroImages.map(absoluteImageUrl),
        locationCreated: {
            "@type": "Place",
            name: project.subtitle,
            address: {
                "@type": "PostalAddress",
                addressLocality: city,
                addressRegion: deptToRegion(dept),
                addressCountry: SITE_COUNTRY,
            },
        },
        about: projectTypology(project),
        ...(year ? { dateCreated: year } : {}),
    };
}

// Études avant achat (/etude-terrain, /etude-de-faisabilite) : chaque offre décrite comme un service de l'agence.
// La localisation passe par l'agence (adresse à Aix-en-Provence) ; la zone est la France, l'étude se faisant à distance.
export function getServiceJsonLd(args: { path: string; name: string; serviceType: string; description: string; audience: string }) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}${args.path}#service`,
        name: args.name,
        serviceType: args.serviceType,
        description: args.description,
        url: `${SITE_URL}${args.path}`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "France" },
        audience: { "@type": "Audience", audienceType: args.audience },
        offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", description: "Sur devis" } },
    };
}

// Fil d'Ariane (Accueil › … › page) pour les données structurées.
export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_URL}${it.path}` })),
    };
}
