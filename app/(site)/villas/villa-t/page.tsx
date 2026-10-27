import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { VILLA_T_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(VILLA_T_PROJECT);

export default function VillaTPage() {
    const jsonLd = getProjectJsonLd(VILLA_T_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={VILLA_T_PROJECT} />
        </main>
    );
}
