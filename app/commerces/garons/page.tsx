import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { GARONS_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(GARONS_PROJECT);

export default function GaronsPage() {
    const jsonLd = getProjectJsonLd(GARONS_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={GARONS_PROJECT} />
            <Content project={GARONS_PROJECT} />
        </main>
    );
}
