import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { VITROLLES_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VITROLLES_PROJECT);

export default function VitrollesPage() {
    const jsonLd = getProjectJsonLd(VITROLLES_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={VITROLLES_PROJECT} />
        </main>
    );
}
