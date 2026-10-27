import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { VILLA_P2_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VILLA_P2_PROJECT);

export default function VillaP2Page() {
    const jsonLd = getProjectJsonLd(VILLA_P2_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={VILLA_P2_PROJECT} />
        </main>
    );
}
