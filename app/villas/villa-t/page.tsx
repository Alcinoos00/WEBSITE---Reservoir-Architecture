import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_T_PROJECT } from "@/lib/projects";

export default function VillaTPage() {
    return (
        <main>
            <Hero project={VILLA_T_PROJECT} />
            <Content project={VILLA_T_PROJECT} />
        </main>
    );
}
