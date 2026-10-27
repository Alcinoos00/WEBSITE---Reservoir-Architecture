import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { MARTIN_PIERRE_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(MARTIN_PIERRE_PROJECT);

export default function MartinPierrePage() {
    const jsonLd = getProjectJsonLd(MARTIN_PIERRE_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={MARTIN_PIERRE_PROJECT} />
        </main>
    );
}
