import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { PUYRICARD_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(PUYRICARD_PROJECT);

export default function PuyricardPage() {
    const jsonLd = getProjectJsonLd(PUYRICARD_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={PUYRICARD_PROJECT} />
            <Content project={PUYRICARD_PROJECT} />
        </main>
    );
}
