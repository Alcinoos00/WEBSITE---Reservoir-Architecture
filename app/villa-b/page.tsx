import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_B_PROJECT } from "@/lib/projects";

export default function VillaBPage() {
    return (
        <main>
            <Hero project={VILLA_B_PROJECT} />
            <Content project={VILLA_B_PROJECT} />
        </main>
    );
}
