import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { GRANS_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(GRANS_PROJECT);

export default function GransPage() {
    const jsonLd = getProjectJsonLd(GRANS_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={GRANS_PROJECT} />
        </main>
    );
}
