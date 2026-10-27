import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { WAUQUIEZ_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(WAUQUIEZ_PROJECT);

export default function WauquiezPage() {
    const jsonLd = getProjectJsonLd(WAUQUIEZ_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={WAUQUIEZ_PROJECT} />
            <Content project={WAUQUIEZ_PROJECT} />
        </main>
    );
}
