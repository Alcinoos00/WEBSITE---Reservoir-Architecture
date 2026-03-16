import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { FERRIGNO_PROJECT } from "@/lib/projects";

export default function FerrignoPage() {
    return (
        <main>
            <Hero project={FERRIGNO_PROJECT} />
            <Content project={FERRIGNO_PROJECT} />
        </main>
    );
}
