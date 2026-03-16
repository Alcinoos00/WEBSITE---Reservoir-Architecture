import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { WAUQUIEZ_PROJECT } from "@/lib/projects";

export default function WauquiezPage() {
    return (
        <main>
            <Hero project={WAUQUIEZ_PROJECT} />
            <Content project={WAUQUIEZ_PROJECT} />
        </main>
    );
}
