import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { PUYRICARD_PROJECT } from "@/lib/projects";

export default function PuyricardPage() {
    return (
        <main>
            <Hero project={PUYRICARD_PROJECT} />
            <Content project={PUYRICARD_PROJECT} />
        </main>
    );
}
