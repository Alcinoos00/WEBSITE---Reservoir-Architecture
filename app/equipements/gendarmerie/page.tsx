import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { GENDARMERIE_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(GENDARMERIE_PROJECT);

export default function GendarmeriePage() {
    const jsonLd = getProjectJsonLd(GENDARMERIE_PROJECT);
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={GENDARMERIE_PROJECT} />
            <Content project={GENDARMERIE_PROJECT} />
        </>
    );
}
