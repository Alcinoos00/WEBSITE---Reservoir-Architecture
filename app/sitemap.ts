import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, categoryToPath } from "@/lib/seo";
import { SITEMAP_DATES } from "@/lib/sitemap-dates";

// Vraie date de dernière modification du contenu (générée par scripts/sitemap-dates.mjs).
// Sans date connue, on n'en met pas : une date fausse est pire qu'une date absente.
const dated = (route: string) => (SITEMAP_DATES[route] ? { lastModified: SITEMAP_DATES[route] } : {});

export default function sitemap(): MetadataRoute.Sitemap {
    const staticUrls: MetadataRoute.Sitemap = [
        { url: SITE_URL, ...dated("/"), priority: 1.0, changeFrequency: "monthly" },
        { url: `${SITE_URL}/contact`, ...dated("/contact"), priority: 0.95, changeFrequency: "monthly" },
        { url: `${SITE_URL}/villas`, ...dated("/villas"), priority: 0.9, changeFrequency: "monthly" },
        { url: `${SITE_URL}/logements`, ...dated("/logements"), priority: 0.9, changeFrequency: "monthly" },
        { url: `${SITE_URL}/commerces`, ...dated("/commerces"), priority: 0.9, changeFrequency: "monthly" },
        { url: `${SITE_URL}/equipements`, ...dated("/equipements"), priority: 0.9, changeFrequency: "monthly" },
        { url: `${SITE_URL}/villas-aix-en-provence`, ...dated("/villas-aix-en-provence"), priority: 0.9, changeFrequency: "monthly" },
        { url: `${SITE_URL}/commerces-aix-en-provence`, ...dated("/commerces-aix-en-provence"), priority: 0.8, changeFrequency: "monthly" },
        { url: `${SITE_URL}/logements-aix-en-provence`, ...dated("/logements-aix-en-provence"), priority: 0.8, changeFrequency: "monthly" },
        { url: `${SITE_URL}/equipements-aix-en-provence`, ...dated("/equipements-aix-en-provence"), priority: 0.8, changeFrequency: "monthly" },
        { url: `${SITE_URL}/villas-marseille`, ...dated("/villas-marseille"), priority: 0.9, changeFrequency: "monthly" },
        { url: `${SITE_URL}/villas-nimes`, ...dated("/villas-nimes"), priority: 0.9, changeFrequency: "monthly" },
        { url: `${SITE_URL}/villas-nice`, ...dated("/villas-nice"), priority: 0.9, changeFrequency: "monthly" },
        { url: `${SITE_URL}/etudes`, ...dated("/etudes"), priority: 0.8, changeFrequency: "monthly" },
        { url: `${SITE_URL}/etude-terrain`, ...dated("/etude-terrain"), priority: 0.8, changeFrequency: "monthly" },
        { url: `${SITE_URL}/etude-de-faisabilite`, ...dated("/etude-de-faisabilite"), priority: 0.8, changeFrequency: "monthly" },
    ];

    const projectUrls: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
        url: `${SITE_URL}/${categoryToPath(p.category)}/${p.slug}`,
        ...dated(`/${categoryToPath(p.category)}/${p.slug}`),
        priority: 0.7,
        changeFrequency: "yearly",
    }));

    return [...staticUrls, ...projectUrls];
}
