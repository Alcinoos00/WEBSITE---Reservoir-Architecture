import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { MARTIN_PIERRE_PROJECT } from "@/lib/projects";

export default function MartinPierrePage() {
    return (
        <main>
            <Hero project={MARTIN_PIERRE_PROJECT} />
            <Content project={MARTIN_PIERRE_PROJECT} />
        </main>
    );
}
