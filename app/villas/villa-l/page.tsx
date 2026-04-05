import Hero from "@/components/Hero";
import ContentVilla from "@/components/ContentVilla";
import { VILLA_L_PROJECT } from "@/lib/projects";

export default function VillaLPage() {
    return (
        <main>
            <Hero project={VILLA_L_PROJECT} />
            <ContentVilla project={VILLA_L_PROJECT} />
        </main>
    );
}
