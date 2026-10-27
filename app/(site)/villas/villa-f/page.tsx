import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { VILLA_F_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VILLA_F_PROJECT);

export default function VillaFPage() {
    const jsonLd = getProjectJsonLd(VILLA_F_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={VILLA_F_PROJECT} />
        </main>
    );
}
