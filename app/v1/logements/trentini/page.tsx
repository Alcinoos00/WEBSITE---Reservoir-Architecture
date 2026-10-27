import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { TRENTINI_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(TRENTINI_PROJECT);

export default function TrentiniPage() {
    const jsonLd = getProjectJsonLd(TRENTINI_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={TRENTINI_PROJECT} />
            <Content project={TRENTINI_PROJECT} />
        </main>
    );
}
