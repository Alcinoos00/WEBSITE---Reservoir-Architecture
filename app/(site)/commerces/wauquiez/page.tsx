import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { WAUQUIEZ_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(WAUQUIEZ_PROJECT);

export default function WauquiezPage() {
    const jsonLd = getProjectJsonLd(WAUQUIEZ_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={WAUQUIEZ_PROJECT} />
        </main>
    );
}
