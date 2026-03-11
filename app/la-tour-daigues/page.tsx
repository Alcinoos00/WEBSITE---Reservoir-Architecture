import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { LA_TOUR_DAIGUES_PROJECT } from "@/lib/projects";

export default function LaTourDAiguesPage() {
    return (
        <main>
            <Hero project={LA_TOUR_DAIGUES_PROJECT} />
            <Content project={LA_TOUR_DAIGUES_PROJECT} />
        </main>
    );
}
