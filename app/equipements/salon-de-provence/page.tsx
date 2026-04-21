import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { SALON_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(SALON_PROJECT);

export default function SalonPage() {
    const jsonLd = getProjectJsonLd(SALON_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={SALON_PROJECT} />
            <Content project={SALON_PROJECT} />
        </main>
    );
}
