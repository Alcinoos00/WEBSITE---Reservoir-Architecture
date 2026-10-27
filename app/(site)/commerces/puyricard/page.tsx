import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { PUYRICARD_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(PUYRICARD_PROJECT);

export default function PuyricardPage() {
    const jsonLd = getProjectJsonLd(PUYRICARD_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={PUYRICARD_PROJECT} />
        </main>
    );
}
