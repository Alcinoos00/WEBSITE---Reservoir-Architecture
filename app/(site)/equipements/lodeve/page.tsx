import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { LODEVE_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(LODEVE_PROJECT);

export default function LodevePage() {
    const jsonLd = getProjectJsonLd(LODEVE_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={LODEVE_PROJECT} />
        </main>
    );
}
