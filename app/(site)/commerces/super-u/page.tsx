import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { SUPER_U_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(SUPER_U_PROJECT);

export default function SuperUPage() {
    const jsonLd = getProjectJsonLd(SUPER_U_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={SUPER_U_PROJECT} />
        </main>
    );
}
