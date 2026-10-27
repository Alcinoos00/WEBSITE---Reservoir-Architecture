import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { FERRIGNO_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(FERRIGNO_PROJECT);

export default function FerrignoPage() {
    const jsonLd = getProjectJsonLd(FERRIGNO_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={FERRIGNO_PROJECT} />
            <Content project={FERRIGNO_PROJECT} />
        </main>
    );
}
