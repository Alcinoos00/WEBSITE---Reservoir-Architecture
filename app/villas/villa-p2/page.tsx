import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_P2_PROJECT } from "@/lib/projects";

export default function VillaP2Page() {
    return (
        <main>
            <Hero project={VILLA_P2_PROJECT} />
            <Content project={VILLA_P2_PROJECT} />
        </main>
    );
}
