import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
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
            <V2ProjectPage project={LA_TOUR_DAIGUES_PROJECT} />
        </main>
    );
}
