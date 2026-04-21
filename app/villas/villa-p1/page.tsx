import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_P1_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VILLA_P1_PROJECT);

export default function VillaP1Page() {
    const jsonLd = getProjectJsonLd(VILLA_P1_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={VILLA_P1_PROJECT} />
            <Content project={VILLA_P1_PROJECT} />
        </main>
    );
}
