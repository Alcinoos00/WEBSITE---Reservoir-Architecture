import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { CLAPIERS_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(CLAPIERS_PROJECT);

export default function ClapiersPage() {
    const jsonLd = getProjectJsonLd(CLAPIERS_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={CLAPIERS_PROJECT} />
            <Content project={CLAPIERS_PROJECT} />
        </main>
    );
}
