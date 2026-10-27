import type { Metadata } from "next";
import V2LandingPage from "@/app/accueil-v2/V2LandingPage";
import { data } from "@/lib/landings/villas-marseille";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte villa et maison contemporaine à Marseille",
    description:
        "Architecte DPLG pour votre villa ou maison contemporaine à Marseille et dans les Bouches-du-Rhône. Du terrain au permis de construire. Estimation sous 48h.",
    alternates: { canonical: `${SITE_URL}/villas-marseille` },
    openGraph: {
        title: "Architecte villa et maison contemporaine à Marseille - Reservoir Architecture",
        description:
            "Villa ou maison contemporaine sur-mesure à Marseille et dans les Bouches-du-Rhône, du terrain au permis. Estimation sous 48h.",
        url: `${SITE_URL}/villas-marseille`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

export default function VillasMarseillePage() {
    return <V2LandingPage data={data} />;
}
