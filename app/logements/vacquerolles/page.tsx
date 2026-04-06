import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VACQUEROLLES_PROJECT } from "@/lib/projects";

export default function VacquerollesPage() {
    return (
        <main>
            <Hero project={VACQUEROLLES_PROJECT} />
            <Content project={VACQUEROLLES_PROJECT} />
        </main>
    );
}
