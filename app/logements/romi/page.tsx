import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { ROMI_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(ROMI_PROJECT);

export default function RomiPage() {
    const jsonLd = getProjectJsonLd(ROMI_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={ROMI_PROJECT} />
            <Content project={ROMI_PROJECT} />
        </main>
    );
}
