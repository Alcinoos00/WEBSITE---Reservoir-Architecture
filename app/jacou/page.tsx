import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { JACOU_PROJECT } from "@/lib/projects";

export default function JacouPage() {
    return (
        <main>
            <Hero project={JACOU_PROJECT} />
            <Content project={JACOU_PROJECT} />
        </main>
    );
}
