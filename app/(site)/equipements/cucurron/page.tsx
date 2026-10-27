import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { CUCURRON_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(CUCURRON_PROJECT);

export default function CucurronPage() {
    const jsonLd = getProjectJsonLd(CUCURRON_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={CUCURRON_PROJECT} />
        </main>
    );
}
