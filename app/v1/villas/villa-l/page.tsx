import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_L_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VILLA_L_PROJECT);

export default function VillaLPage() {
    const jsonLd = getProjectJsonLd(VILLA_L_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={VILLA_L_PROJECT} />
            <Content project={VILLA_L_PROJECT} />
        </main>
    );
}
