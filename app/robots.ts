import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: "*", allow: "/", disallow: ["/template", "/api/"] },
            { userAgent: "GPTBot", allow: "/" },
            { userAgent: "ClaudeBot", allow: "/" },
            { userAgent: "PerplexityBot", allow: "/" },
            { userAgent: "Google-Extended", allow: "/" },
            { userAgent: "anthropic-ai", allow: "/" },
            { userAgent: "Bytespider", allow: "/" },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
