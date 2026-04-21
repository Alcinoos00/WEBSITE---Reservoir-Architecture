import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, categoryToPath } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const staticUrls: MetadataRoute.Sitemap = [
        { url: SITE_URL, lastModified, priority: 1.0, changeFrequency: "monthly" },
        { url: `${SITE_URL}/villas`, lastModified, priority: 0.9, changeFrequency: "monthly" },
        { url: `${SITE_URL}/logements`, lastModified, priority: 0.9, changeFrequency: "monthly" },
        { url: `${SITE_URL}/commerces`, lastModified, priority: 0.9, changeFrequency: "monthly" },
        { url: `${SITE_URL}/equipements`, lastModified, priority: 0.9, changeFrequency: "monthly" },
    ];

    const projectUrls: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
        url: `${SITE_URL}/${categoryToPath(p.category)}/${p.slug}`,
        lastModified,
        priority: 0.7,
        changeFrequency: "yearly",
    }));

    return [...staticUrls, ...projectUrls];
}
