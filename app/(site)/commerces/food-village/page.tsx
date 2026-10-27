import V2ProjectPage from "@/app/accueil-v2/V2ProjectPage";
import { FOOD_VILLAGE_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(FOOD_VILLAGE_PROJECT);

export default function FoodVillagePage() {
    const jsonLd = getProjectJsonLd(FOOD_VILLAGE_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2ProjectPage project={FOOD_VILLAGE_PROJECT} />
        </main>
    );
}
