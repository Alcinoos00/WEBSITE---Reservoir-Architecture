import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { CAPITAINERIE_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(CAPITAINERIE_PROJECT);

export default function CapitaineriePage() {
    const jsonLd = getProjectJsonLd(CAPITAINERIE_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={CAPITAINERIE_PROJECT} />
        </main>
    );
}
