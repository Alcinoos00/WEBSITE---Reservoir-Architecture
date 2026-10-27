import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { VILLA_L_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VILLA_L_PROJECT);

export default function VillaLPage() {
    const jsonLd = getProjectJsonLd(VILLA_L_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={VILLA_L_PROJECT} />
        </main>
    );
}
