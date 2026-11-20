import type { Metadata } from "next";
import V2LandingPage from "@/app/accueil-v2/V2LandingPage";
import { data } from "@/lib/landings/extension-maison-aix-en-provence";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte réhabilitation et extension de maison à Aix-en-Provence",
    description:
        "Réhabiliter ou agrandir sa maison à Aix-en-Provence : extension, surélévation, annexe. Architecte DPLG, analyse de constructibilité, déclaration préalable ou permis. Estimation sous 48h.",
    alternates: { canonical: `${SITE_URL}/extension-maison-aix-en-provence` },
    openGraph: {
        title: "Architecte réhabilitation et extension de maison à Aix-en-Provence - Reservoir Architecture",
        description:
            "Réhabilitation, extension, surélévation et transformation de maisons existantes à Aix-en-Provence et dans le Pays d’Aix, par un architecte DPLG. Estimation sous 48h.",
        url: `${SITE_URL}/extension-maison-aix-en-provence`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

export default function ExtensionMaisonAixPage() {
    return <V2LandingPage data={data} />;
}
