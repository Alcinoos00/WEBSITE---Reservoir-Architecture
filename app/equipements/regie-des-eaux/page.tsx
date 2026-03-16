import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { REGIE_DES_EAUX_PROJECT } from "@/lib/projects";

export default function RegieDesEauxPage() {
    return (
        <main>
            <Hero project={REGIE_DES_EAUX_PROJECT} />
            <Content project={REGIE_DES_EAUX_PROJECT} />
        </main>
    );
}
