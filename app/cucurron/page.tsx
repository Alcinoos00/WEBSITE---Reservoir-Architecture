import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { CUCURRON_PROJECT } from "@/lib/projects";

export default function CucurronPage() {
    return (
        <main>
            <Hero project={CUCURRON_PROJECT} />
            <Content project={CUCURRON_PROJECT} />
        </main>
    );
}
