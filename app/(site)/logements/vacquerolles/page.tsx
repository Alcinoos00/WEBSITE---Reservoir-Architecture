import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { VACQUEROLLES_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VACQUEROLLES_PROJECT);

export default function VacquerollesPage() {
    const jsonLd = getProjectJsonLd(VACQUEROLLES_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={VACQUEROLLES_PROJECT} />
        </main>
    );
}
