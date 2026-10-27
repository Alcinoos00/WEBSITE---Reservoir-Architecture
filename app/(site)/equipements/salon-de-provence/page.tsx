import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { SALON_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(SALON_PROJECT);

export default function SalonPage() {
    const jsonLd = getProjectJsonLd(SALON_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={SALON_PROJECT} />
        </main>
    );
}
