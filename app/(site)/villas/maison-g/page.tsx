import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { MAISON_G_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(MAISON_G_PROJECT);

export default function MaisonGPage() {
    const jsonLd = getProjectJsonLd(MAISON_G_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={MAISON_G_PROJECT} />
        </main>
    );
}
