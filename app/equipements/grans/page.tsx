import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { GRANS_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(GRANS_PROJECT);

export default function GransPage() {
    const jsonLd = getProjectJsonLd(GRANS_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={GRANS_PROJECT} />
            <Content project={GRANS_PROJECT} />
        </main>
    );
}
