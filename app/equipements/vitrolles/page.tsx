import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VITROLLES_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VITROLLES_PROJECT);

export default function VitrollesPage() {
    const jsonLd = getProjectJsonLd(VITROLLES_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={VITROLLES_PROJECT} />
            <Content project={VITROLLES_PROJECT} />
        </main>
    );
}
