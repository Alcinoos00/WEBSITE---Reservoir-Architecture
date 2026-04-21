import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { DENIM_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(DENIM_PROJECT);

export default function DenimPage() {
    const jsonLd = getProjectJsonLd(DENIM_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={DENIM_PROJECT} />
            <Content project={DENIM_PROJECT} />
        </main>
    );
}
