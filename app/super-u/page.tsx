import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { SUPER_U_PROJECT } from "@/lib/projects";

export default function SuperUPage() {
    return (
        <main>
            <Hero project={SUPER_U_PROJECT} />
            <Content project={SUPER_U_PROJECT} />
        </main>
    );
}
