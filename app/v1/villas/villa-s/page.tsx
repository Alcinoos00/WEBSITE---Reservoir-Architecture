import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_S_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VILLA_S_PROJECT);

export default function VillaSPage() {
    const jsonLd = getProjectJsonLd(VILLA_S_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={VILLA_S_PROJECT} />
            <Content project={VILLA_S_PROJECT} />
        </main>
    );
}
