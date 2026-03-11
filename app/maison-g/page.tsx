import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { MAISON_G_PROJECT } from "@/lib/projects";

export default function MaisonGPage() {
    return (
        <main>
            <Hero project={MAISON_G_PROJECT} />
            <Content project={MAISON_G_PROJECT} />
        </main>
    );
}
