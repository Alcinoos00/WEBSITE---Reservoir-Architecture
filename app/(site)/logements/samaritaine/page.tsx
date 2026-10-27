import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { SAMARITAINE_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(SAMARITAINE_PROJECT);

export default function SamaritainePage() {
    const jsonLd = getProjectJsonLd(SAMARITAINE_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={SAMARITAINE_PROJECT} />
        </main>
    );
}
