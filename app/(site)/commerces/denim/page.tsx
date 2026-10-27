import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { DENIM_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(DENIM_PROJECT);

export default function DenimPage() {
    const jsonLd = getProjectJsonLd(DENIM_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={DENIM_PROJECT} />
        </main>
    );
}
