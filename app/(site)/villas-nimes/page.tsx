import type { Metadata } from "next";
import V2LandingPage from "@/app/accueil-v2/V2LandingPage";
import { data } from "@/lib/landings/villas-nimes";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte villa et maison contemporaine à Nîmes",
    description:
        "Architecte DPLG pour votre villa ou maison contemporaine à Nîmes et dans le Gard. Du choix du terrain au permis de construire. Estimation sous 48h.",
    alternates: { canonical: `${SITE_URL}/villas-nimes` },
    openGraph: {
        title: "Architecte villa et maison contemporaine à Nîmes - Reservoir Architecture",
        description:
            "Villa ou maison contemporaine sur-mesure à Nîmes et dans le Gard, du terrain au permis de construire. Estimation sous 48h.",
        url: `${SITE_URL}/villas-nimes`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

export default function VillasNimesPage() {
    return <V2LandingPage data={data} />;
}
