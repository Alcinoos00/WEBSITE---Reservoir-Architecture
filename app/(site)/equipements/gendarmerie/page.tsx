import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { GENDARMERIE_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(GENDARMERIE_PROJECT);

export default function GendarmeriePage() {
    const jsonLd = getProjectJsonLd(GENDARMERIE_PROJECT);
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={GENDARMERIE_PROJECT} />
        </>
    );
}
