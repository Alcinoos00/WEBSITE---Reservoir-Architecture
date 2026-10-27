import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_T_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VILLA_T_PROJECT);

export default function VillaTPage() {
    const jsonLd = getProjectJsonLd(VILLA_T_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={VILLA_T_PROJECT} />
            <Content project={VILLA_T_PROJECT} />
        </main>
    );
}
