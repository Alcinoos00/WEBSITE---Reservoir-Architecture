import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_V_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VILLA_V_PROJECT);

export default function VillaVPage() {
    const jsonLd = getProjectJsonLd(VILLA_V_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={VILLA_V_PROJECT} />
            <Content project={VILLA_V_PROJECT} />
        </main>
    );
}
