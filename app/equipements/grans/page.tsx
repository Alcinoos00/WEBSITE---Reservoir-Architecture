import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { GRANS_PROJECT } from "@/lib/projects";

export default function GransPage() {
    return (
        <main>
            <Hero project={GRANS_PROJECT} />
            <Content project={GRANS_PROJECT} />
        </main>
    );
}
