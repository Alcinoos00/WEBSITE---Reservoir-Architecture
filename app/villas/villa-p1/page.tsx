import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_P1_PROJECT } from "@/lib/projects";

export default function VillaP1Page() {
    return (
        <main>
            <Hero project={VILLA_P1_PROJECT} />
            <Content project={VILLA_P1_PROJECT} />
        </main>
    );
}
