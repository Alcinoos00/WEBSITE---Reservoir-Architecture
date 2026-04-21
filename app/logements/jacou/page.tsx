import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { JACOU_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(JACOU_PROJECT);

export default function JacouPage() {
    const jsonLd = getProjectJsonLd(JACOU_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={JACOU_PROJECT} />
            <Content project={JACOU_PROJECT} />
        </main>
    );
}
