import NavigationCarousel from "@/components/NavigationCarousel";
import { PROJECTS } from "@/lib/projects";

export default function EquipementsPage() {
    const categoryProjects = PROJECTS.filter(p => p.category === "ÉQUIPEMENTS");

    return (
        <main>
            <NavigationCarousel items={categoryProjects} />
        </main>
    );
}
