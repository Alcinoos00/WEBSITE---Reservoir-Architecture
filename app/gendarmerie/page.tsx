import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { GENDARMERIE_PROJECT } from "@/lib/projects";

export default function GendarmeriePage() {
    return (
        <>
            <Hero project={GENDARMERIE_PROJECT} />
            <Content project={GENDARMERIE_PROJECT} />
        </>
    );
}
