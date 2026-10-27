import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { FERRIGNO_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(FERRIGNO_PROJECT);

export default function FerrignoPage() {
    const jsonLd = getProjectJsonLd(FERRIGNO_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={FERRIGNO_PROJECT} />
        </main>
    );
}
