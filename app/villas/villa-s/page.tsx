import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_S_PROJECT } from "@/lib/projects";

export default function VillaSPage() {
    return (
        <main>
            <Hero project={VILLA_S_PROJECT} />
            <Content project={VILLA_S_PROJECT} />
        </main>
    );
}
