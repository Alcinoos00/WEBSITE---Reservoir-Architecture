import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { WAUQUIEZ_PROJECT } from "@/lib/projects";

// Gabarit de développement : duplique /commerces/wauquiez, ne doit jamais être indexé.
export const metadata: Metadata = {
    robots: { index: false, follow: false },
};

export default function TemplatePage() {
    return (
        <>
            <Hero project={WAUQUIEZ_PROJECT} />
            <Content project={WAUQUIEZ_PROJECT} />
        </>
    );
}
