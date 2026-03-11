import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_L_PROJECT } from "@/lib/projects";

export default function VillaLPage() {
    return (
        <main>
            <Hero project={VILLA_L_PROJECT} />
            <Content project={VILLA_L_PROJECT} />
        </main>
    );
}
