import Hero from "@/components/Hero";
import Content from "@/components/Content";
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
            <Hero project={FOOD_VILLAGE_PROJECT} />
            <Content project={FOOD_VILLAGE_PROJECT} />
        </main>
    );
}
