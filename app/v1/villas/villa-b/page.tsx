import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_B_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VILLA_B_PROJECT);

export default function VillaBPage() {
    const jsonLd = getProjectJsonLd(VILLA_B_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={VILLA_B_PROJECT} />
            <Content project={VILLA_B_PROJECT} />
        </main>
    );
}
