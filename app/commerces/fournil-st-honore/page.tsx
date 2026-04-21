import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { FOURNIL_ST_HONORE_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(FOURNIL_ST_HONORE_PROJECT);

export default function FournilStHonorePage() {
    const jsonLd = getProjectJsonLd(FOURNIL_ST_HONORE_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={FOURNIL_ST_HONORE_PROJECT} />
            <Content project={FOURNIL_ST_HONORE_PROJECT} />
        </main>
    );
}
