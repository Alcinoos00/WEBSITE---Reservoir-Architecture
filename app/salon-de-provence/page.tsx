import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { SALON_PROJECT } from "@/lib/projects";

export default function SalonPage() {
    return (
        <main>
            <Hero project={SALON_PROJECT} />
            <Content project={SALON_PROJECT} />
        </main>
    );
}
