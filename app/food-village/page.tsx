import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { FOOD_VILLAGE_PROJECT } from "@/lib/projects";

export default function FoodVillagePage() {
    return (
        <main>
            <Hero project={FOOD_VILLAGE_PROJECT} />
            <Content project={FOOD_VILLAGE_PROJECT} />
        </main>
    );
}
