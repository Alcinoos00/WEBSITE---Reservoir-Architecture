import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { LODEVE_PROJECT } from "@/lib/projects";

export default function LodevePage() {
    return (
        <main>
            <Hero project={LODEVE_PROJECT} />
            <Content project={LODEVE_PROJECT} />
        </main>
    );
}
