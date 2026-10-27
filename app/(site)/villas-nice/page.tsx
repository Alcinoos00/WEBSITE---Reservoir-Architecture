import type { Metadata } from "next";
import V2LandingPage from "@/app/accueil-v2/V2LandingPage";
import { data } from "@/lib/landings/villas-nice";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte villa et maison contemporaine à Nice",
    description:
        "Architecte DPLG pour votre villa ou maison contemporaine à Nice et sur la Côte d’Azur. Du terrain au permis de construire. Estimation sous 48h.",
    alternates: { canonical: `${SITE_URL}/villas-nice` },
    openGraph: {
        title: "Architecte villa et maison contemporaine à Nice - Reservoir Architecture",
        description:
            "Villa ou maison contemporaine sur-mesure à Nice et dans les Alpes-Maritimes, du terrain au permis. Estimation sous 48h.",
        url: `${SITE_URL}/villas-nice`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

export default function VillasNicePage() {
    return <V2LandingPage data={data} />;
}
