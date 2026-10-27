import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { SAMARITAINE_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(SAMARITAINE_PROJECT);

export default function SamaritainePage() {
    const jsonLd = getProjectJsonLd(SAMARITAINE_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={SAMARITAINE_PROJECT} />
            <Content project={SAMARITAINE_PROJECT} />
        </main>
    );
}
