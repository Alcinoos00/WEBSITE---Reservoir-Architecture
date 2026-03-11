import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { CAPITAINERIE_PROJECT } from "@/lib/projects";

export default function CapitaineriePage() {
    return (
        <main>
            <Hero project={CAPITAINERIE_PROJECT} />
            <Content project={CAPITAINERIE_PROJECT} />
        </main>
    );
}
