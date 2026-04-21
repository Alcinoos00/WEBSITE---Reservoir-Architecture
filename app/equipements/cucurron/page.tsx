import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { CUCURRON_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(CUCURRON_PROJECT);

export default function CucurronPage() {
    const jsonLd = getProjectJsonLd(CUCURRON_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={CUCURRON_PROJECT} />
            <Content project={CUCURRON_PROJECT} />
        </main>
    );
}
