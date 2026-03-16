import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { ANHA_CIUDAD_PROJECT } from "@/lib/projects";

export default function AnhaCiudadPage() {
    return (
        <main>
            <Hero project={ANHA_CIUDAD_PROJECT} />
            <Content project={ANHA_CIUDAD_PROJECT} />
        </main>
    );
}
