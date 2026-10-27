import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { FOURNIL_ST_HONORE_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(FOURNIL_ST_HONORE_PROJECT);

export default function FournilStHonorePage() {
    const jsonLd = getProjectJsonLd(FOURNIL_ST_HONORE_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={FOURNIL_ST_HONORE_PROJECT} />
        </main>
    );
}
