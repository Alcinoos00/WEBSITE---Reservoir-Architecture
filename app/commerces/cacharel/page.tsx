import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { CACHAREL_PROJECT } from "@/lib/projects";

export default function CacharelPage() {
    return (
        <main>
            <Hero project={CACHAREL_PROJECT} />
            <Content project={CACHAREL_PROJECT} />
        </main>
    );
}
