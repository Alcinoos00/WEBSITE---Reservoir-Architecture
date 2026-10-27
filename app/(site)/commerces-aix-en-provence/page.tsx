import type { Metadata } from "next";
import V2LandingPage from "@/app/accueil-v2/V2LandingPage";
import { data } from "@/lib/landings/commerces-aix-en-provence";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte commercial en PACA",
    description:
        "Architecte DPLG pour vos commerces, boutiques et showrooms en région PACA. Concept, agencement et permis, au service de votre image et de vos ventes. Estimation sous 48h.",
    alternates: { canonical: `${SITE_URL}/commerces-aix-en-provence` },
    openGraph: {
        title: "Architecte commercial en PACA - Reservoir Architecture",
        description:
            "Boutiques, showrooms et espaces de vente en région PACA, du concept à l’agencement. Estimation sous 48h.",
        url: `${SITE_URL}/commerces-aix-en-provence`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

export default function CommercesAixPage() {
    return <V2LandingPage data={data} />;
}
