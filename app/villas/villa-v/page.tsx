import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_V_PROJECT } from "@/lib/projects";

export default function VillaVPage() {
    return (
        <main>
            <Hero project={VILLA_V_PROJECT} />
            <Content project={VILLA_V_PROJECT} />
        </main>
    );
}
