import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { CLAPIERS_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(CLAPIERS_PROJECT);

export default function ClapiersPage() {
    const jsonLd = getProjectJsonLd(CLAPIERS_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={CLAPIERS_PROJECT} />
        </main>
    );
}
