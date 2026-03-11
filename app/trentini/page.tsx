import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { TRENTINI_PROJECT } from "@/lib/projects";

export default function TrentiniPage() {
    return (
        <main>
            <Hero project={TRENTINI_PROJECT} />
            <Content project={TRENTINI_PROJECT} />
        </main>
    );
}
