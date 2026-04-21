import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_C_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VILLA_C_PROJECT);

export default function VillaCPage() {
    const jsonLd = getProjectJsonLd(VILLA_C_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={VILLA_C_PROJECT} />
            <Content project={VILLA_C_PROJECT} />
        </main>
    );
}
