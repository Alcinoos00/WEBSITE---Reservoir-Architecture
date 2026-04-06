export interface TechSheetItem {
    label: string;
    value: string;
}

export interface ProjectLogo {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface ProjectData {
    id: string;
    slug: string;
    category?: string;
    href?: string;
    heroImages: string[];
    subtitle: string;
    title: string;
    navigationTitle?: string;
    optionalLogo?: ProjectLogo;
    optionalSubtitle?: string;
    optionalSubtitle3?: string;
    projectLogo?: ProjectLogo;
    descriptionHeader?: string;
    descriptionParagraphs: string[];
    techSheet?: TechSheetItem[];
}
