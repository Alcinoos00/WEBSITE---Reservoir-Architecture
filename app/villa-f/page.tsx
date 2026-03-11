import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_F_PROJECT } from "@/lib/projects";

export default function VillaFPage() {
    return (
        <main>
            <Hero project={VILLA_F_PROJECT} />
            <Content project={VILLA_F_PROJECT} />
        </main>
    );
}
