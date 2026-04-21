import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { CACHAREL_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(CACHAREL_PROJECT);

export default function CacharelPage() {
    const jsonLd = getProjectJsonLd(CACHAREL_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={CACHAREL_PROJECT} />
            <Content project={CACHAREL_PROJECT} />
        </main>
    );
}
