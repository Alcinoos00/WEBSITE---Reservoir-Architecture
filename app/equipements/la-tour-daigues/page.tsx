import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { LA_TOUR_DAIGUES_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(LA_TOUR_DAIGUES_PROJECT);

export default function LaTourDAiguesPage() {
    const jsonLd = getProjectJsonLd(LA_TOUR_DAIGUES_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={LA_TOUR_DAIGUES_PROJECT} />
            <Content project={LA_TOUR_DAIGUES_PROJECT} />
        </main>
    );
}
