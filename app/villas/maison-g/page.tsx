import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { MAISON_G_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(MAISON_G_PROJECT);

export default function MaisonGPage() {
    const jsonLd = getProjectJsonLd(MAISON_G_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={MAISON_G_PROJECT} />
            <Content project={MAISON_G_PROJECT} />
        </main>
    );
}
