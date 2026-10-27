import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { GARONS_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(GARONS_PROJECT);

export default function GaronsPage() {
    const jsonLd = getProjectJsonLd(GARONS_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={GARONS_PROJECT} />
        </main>
    );
}
