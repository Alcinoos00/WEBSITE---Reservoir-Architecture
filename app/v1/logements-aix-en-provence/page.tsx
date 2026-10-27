import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { data } from "@/lib/landings/logements-aix-en-provence";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte logements collectifs à Aix-en-Provence",
    description:
        "Architecte DPLG à Aix-en-Provence pour vos opérations de logements collectifs. Conception, permis et suivi, du montage à la livraison. Échangeons sur votre programme.",
    alternates: { canonical: `${SITE_URL}/logements-aix-en-provence` },
    openGraph: {
        title: "Architecte logements collectifs à Aix-en-Provence - Reservoir Architecture",
        description:
            "Opérations de logements collectifs en PACA, du montage à la livraison. Densité maîtrisée et qualité d’usage.",
        url: `${SITE_URL}/logements-aix-en-provence`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

export default function LogementsAixPage() {
    return <LandingPage data={data} />;
}
