import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { ANHA_CIUDAD_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(ANHA_CIUDAD_PROJECT);

export default function AnhaCiudadPage() {
    const jsonLd = getProjectJsonLd(ANHA_CIUDAD_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={ANHA_CIUDAD_PROJECT} />
        </main>
    );
}
