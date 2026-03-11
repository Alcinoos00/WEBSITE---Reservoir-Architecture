import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { CLAPIERS_PROJECT } from "@/lib/projects";

export default function ClapiersPage() {
    return (
        <main>
            <Hero project={CLAPIERS_PROJECT} />
            <Content project={CLAPIERS_PROJECT} />
        </main>
    );
}
