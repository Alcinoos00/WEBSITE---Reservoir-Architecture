import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_C_PROJECT } from "@/lib/projects";

export default function VillaCPage() {
    return (
        <main>
            <Hero project={VILLA_C_PROJECT} />
            <Content project={VILLA_C_PROJECT} />
        </main>
    );
}
