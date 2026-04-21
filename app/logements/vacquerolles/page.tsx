import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VACQUEROLLES_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VACQUEROLLES_PROJECT);

export default function VacquerollesPage() {
    const jsonLd = getProjectJsonLd(VACQUEROLLES_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={VACQUEROLLES_PROJECT} />
            <Content project={VACQUEROLLES_PROJECT} />
        </main>
    );
}
