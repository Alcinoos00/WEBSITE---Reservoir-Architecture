import NavigationCarousel from "@/components/NavigationCarousel";
import { PROJECTS } from "@/lib/projects";

export default function LogementsPage() {
    const categoryProjects = PROJECTS.filter(p => p.category === "LOGEMENTS");

    return (
        <main>
            <NavigationCarousel items={categoryProjects} />
        </main>
    );
}
