import NavigationCarousel from "@/components/NavigationCarousel";
import { PROJECTS } from "@/lib/projects";

export default function CommercesPage() {
    const categoryProjects = PROJECTS.filter(p => p.category === "COMMERCES");

    return (
        <main>
            <NavigationCarousel items={categoryProjects} />
        </main>
    );
}
