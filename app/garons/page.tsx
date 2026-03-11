import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { GARONS_PROJECT } from "@/lib/projects";

export default function GaronsPage() {
    return (
        <main>
            <Hero project={GARONS_PROJECT} />
            <Content project={GARONS_PROJECT} />
        </main>
    );
}
