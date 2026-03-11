import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { FOURNIL_ST_HONORE_PROJECT } from "@/lib/projects";

export default function FournilStHonorePage() {
    return (
        <main>
            <Hero project={FOURNIL_ST_HONORE_PROJECT} />
            <Content project={FOURNIL_ST_HONORE_PROJECT} />
        </main>
    );
}
