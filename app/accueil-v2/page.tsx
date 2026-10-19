import type { Metadata } from "next";
import HomeV2 from "./HomeV2";

// Version de travail de l'accueil (refonte façon Teras), hors index tant qu'Emeric ne l'a pas validée.
// L'accueil en ligne reste app/page.tsx.
export const metadata: Metadata = {
    title: { absolute: "Accueil v2 | Reservoir Architecture" },
    robots: { index: false, follow: false },
};

export default function AccueilV2() {
    return <HomeV2 />;
}
