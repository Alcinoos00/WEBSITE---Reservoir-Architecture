import type { Metadata } from "next";
import HomeV2 from "./HomeV2";
import V2Shell from "./V2Shell";

// Ancienne adresse de l'accueil v2, gardée pour les liens déjà partagés. Le site v2 complet vit sous /v2.
export const metadata: Metadata = {
    title: { absolute: "Accueil v2 | Reservoir Architecture" },
    robots: { index: false, follow: false },
};

export default function AccueilV2() {
    return (
        <V2Shell>
            <HomeV2 />
        </V2Shell>
    );
}
