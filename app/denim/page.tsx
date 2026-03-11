import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { DENIM_PROJECT } from "@/lib/projects";

export default function DenimPage() {
    return (
        <main>
            <Hero project={DENIM_PROJECT} />
            <Content project={DENIM_PROJECT} />
        </main>
    );
}
