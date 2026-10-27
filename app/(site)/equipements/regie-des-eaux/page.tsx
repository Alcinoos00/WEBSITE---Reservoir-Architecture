import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { REGIE_DES_EAUX_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(REGIE_DES_EAUX_PROJECT);

export default function RegieDesEauxPage() {
    const jsonLd = getProjectJsonLd(REGIE_DES_EAUX_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={REGIE_DES_EAUX_PROJECT} />
        </main>
    );
}
