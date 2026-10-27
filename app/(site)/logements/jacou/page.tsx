import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { JACOU_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(JACOU_PROJECT);

export default function JacouPage() {
    const jsonLd = getProjectJsonLd(JACOU_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={JACOU_PROJECT} />
        </main>
    );
}
