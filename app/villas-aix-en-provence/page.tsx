import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { data } from "@/lib/landings/villas-aix-en-provence";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte villa contemporaine à Aix-en-Provence",
    description:
        "Architecte DPLG à Aix-en-Provence : Reservoir Architecture conçoit votre villa contemporaine ou maison d’architecte sur-mesure, du terrain au permis. Estimation sous 48h.",
    alternates: { canonical: `${SITE_URL}/villas-aix-en-provence` },
    openGraph: {
        title: "Architecte villa contemporaine à Aix-en-Provence - Reservoir Architecture",
        description:
            "Villa contemporaine sur-mesure à Aix-en-Provence, du choix du terrain au permis de construire. Estimation sous 48h.",
        url: `${SITE_URL}/villas-aix-en-provence`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

export default function VillasAixPage() {
    return <LandingPage data={data} />;
}
