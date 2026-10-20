import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { data } from "@/lib/landings/equipements-aix-en-provence";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte équipements publics à Aix-en-Provence",
    description:
        "Architecte DPLG à Aix-en-Provence pour vos équipements publics. Expérience de la maîtrise d’ouvrage publique (loi MOP), références en PACA. Consultez l’agence.",
    alternates: { canonical: `${SITE_URL}/equipements-aix-en-provence` },
    openGraph: {
        title: "Architecte équipements publics à Aix-en-Provence - Reservoir Architecture",
        description:
            "Équipements publics en PACA : réhabilitation, extension et construction neuve, en loi MOP. Références publiques.",
        url: `${SITE_URL}/equipements-aix-en-provence`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

export default function EquipementsAixPage() {
    return <LandingPage data={data} />;
}
