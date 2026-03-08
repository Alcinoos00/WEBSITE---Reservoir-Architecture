import NavigationCarousel from "@/components/NavigationCarousel";
import { PROJECTS } from "@/lib/projects";

export default function VillasPage() {
    const categoryProjects = PROJECTS.filter(p => p.category === "VILLAS");

    return (
        <main>
            <NavigationCarousel items={categoryProjects} />
        </main>
    );
}
