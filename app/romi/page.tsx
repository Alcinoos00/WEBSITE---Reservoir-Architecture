import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { ROMI_PROJECT } from "@/lib/projects";

export default function RomiPage() {
    return (
        <main>
            <Hero project={ROMI_PROJECT} />
            <Content project={ROMI_PROJECT} />
        </main>
    );
}
