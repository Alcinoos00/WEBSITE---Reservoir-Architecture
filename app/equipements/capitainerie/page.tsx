import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { CAPITAINERIE_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(CAPITAINERIE_PROJECT);

export default function CapitaineriePage() {
    const jsonLd = getProjectJsonLd(CAPITAINERIE_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={CAPITAINERIE_PROJECT} />
            <Content project={CAPITAINERIE_PROJECT} />
        </main>
    );
}
