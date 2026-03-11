import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VITROLLES_PROJECT } from "@/lib/projects";

export default function VitrollesPage() {
    return (
        <main>
            <Hero project={VITROLLES_PROJECT} />
            <Content project={VITROLLES_PROJECT} />
        </main>
    );
}
