import type { ProjectData } from "@/types/project";
import type { Metadata } from "next";

export const SITE_URL = "https://reservoir-architecture.com";
export const SITE_NAME = "Reservoir Architecture";
export const SITE_LOCATION = "Aix-en-Provence";
export const SITE_REGION = "Provence-Alpes-Côte d'Azur";
export const SITE_COUNTRY = "FR";
export const SITE_PHONE = "+33613516767";
export const SITE_EMAIL = "contact@reservoir-architecture.com";
export const SITE_FOUNDED = "2013";
export const SITE_FOUNDER = "Serge Ettore";
export const SITE_FOUNDER_TITLE = "Architecte DPLG";

export const AREA_SERVED_CITIES = ["Aix-en-Provence", "Marseille", "Nîmes"];
export const AREA_SERVED_REGIONS = [
    "Bouches-du-Rhône",
    "Gard",
    "Var",
    "Vaucluse",
];

export const KNOWS_ABOUT = [
    "Architecture résidentielle",
    "Villa contemporaine",
    "Maison d'architecte",
    "Logements collectifs",
    "Résidences",
    "Architecture commerciale",
    "Aménagement de showroom",
    "Design retail",
    "Équipements publics",
    "Rénovation",
    "Extension",
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

export function getProjectAlt(project: ProjectData, index: number): string {
    const typology = typologyLabel(project.category);
    return `${typology} ${project.title} à ${project.subtitle} — projet d'architecte ${SITE_NAME}, image ${index + 1}`;
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
    return (lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced) + "…";
}

export function getProjectMetadata(project: ProjectData): Metadata {
    const typology = typologyLabel(project.category);
    const title = `${project.title} — ${typology} à ${project.subtitle}`;
    const ogTitle = `${title} | ${SITE_NAME}`;
    const rawDesc =
        project.descriptionHeader ??
        project.descriptionParagraphs[0] ??
        project.optionalSubtitle ??
        `${typology} ${project.title} à ${project.subtitle} par ${SITE_NAME}.`;
    const description = truncateAtWord(rawDesc.replace(/\s+/g, " "), 160);
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
    };
    if (!dept) return SITE_REGION;
    return map[dept] ?? SITE_REGION;
}

function extractCity(subtitle: string): string {
    return subtitle.replace(/\s*\(\d{2,3}\)\s*$/, "").trim();
}

export function getOrganizationJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: "RESERVOIR Architecture",
        description:
            "Agence d'architecture à Aix-en-Provence. Villas contemporaines, logements collectifs, commerces, équipements publics en Provence (13, 30, 83, 84).",
        url: SITE_URL,
        logo: `${SITE_URL}/images/ui/logo_light.svg`,
        image: `${SITE_URL}/images/ui/logo_light.svg`,
        telephone: SITE_PHONE,
        email: SITE_EMAIL,
        address: {
            "@type": "PostalAddress",
            addressLocality: SITE_LOCATION,
            addressRegion: SITE_REGION,
            addressCountry: SITE_COUNTRY,
        },
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
            (project.descriptionParagraphs[0] ?? "").replace(/\s+/g, " "),
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
        about: typologyLabel(project.category),
        ...(year ? { dateCreated: year } : {}),
    };
}
