import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { SAMARITAINE_PROJECT } from "@/lib/projects";

export default function SamaritainePage() {
    return (
        <main>
            <Hero project={SAMARITAINE_PROJECT} />
            <Content project={SAMARITAINE_PROJECT} />
        </main>
    );
}
