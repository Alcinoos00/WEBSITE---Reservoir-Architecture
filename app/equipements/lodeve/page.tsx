import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { LODEVE_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(LODEVE_PROJECT);

export default function LodevePage() {
    const jsonLd = getProjectJsonLd(LODEVE_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={LODEVE_PROJECT} />
            <Content project={LODEVE_PROJECT} />
        </main>
    );
}
