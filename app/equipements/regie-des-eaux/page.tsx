import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { REGIE_DES_EAUX_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(REGIE_DES_EAUX_PROJECT);

export default function RegieDesEauxPage() {
    const jsonLd = getProjectJsonLd(REGIE_DES_EAUX_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={REGIE_DES_EAUX_PROJECT} />
            <Content project={REGIE_DES_EAUX_PROJECT} />
        </main>
    );
}
