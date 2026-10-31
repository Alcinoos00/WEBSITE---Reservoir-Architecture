export interface TechSheetItem {
    label: string;
    value: string;
}

export interface ProjectLogo {
    src: string;
    alt: string;
    width: number;
    height: number;
    invert?: boolean;
}

export interface ProjectData {
    id: string;
    slug: string;
    category?: string;
    href?: string;
    heroImages: string[];
    subtitle: string;
    title: string;
    /** Type de projet affiché et lu par Google, si différent du type de la catégorie (ex. « Rénovation de maison de ville »). */
    typology?: string;
    /** Description de chaque image, dans l'ordre de heroImages (textes alternatifs). */
    imageAlts?: string[];
    navigationTitle?: string;
    optionalLogo?: ProjectLogo;
    optionalSubtitle?: string;
    projectLogo?: ProjectLogo;
    descriptionHeader?: string;
    descriptionParagraphs: string[];
    techSheet?: TechSheetItem[];
}
