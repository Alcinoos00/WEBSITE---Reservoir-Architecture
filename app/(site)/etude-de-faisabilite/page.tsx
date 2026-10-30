import type { Metadata } from "next";
import V2LandingPage from "@/app/accueil-v2/V2LandingPage";
import { data } from "@/lib/landings/etude-de-faisabilite";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Étude de faisabilité et étude capacitaire : investisseurs, entreprises",
    description:
        "Serge Ettore, architecte à Aix-en-Provence : études de faisabilité et capacitaires pour investisseurs, projets commerciaux et d’activité en ZAC, avant l’achat d’un terrain ou d’un bâtiment.",
    alternates: { canonical: `${SITE_URL}/etude-de-faisabilite` },
    openGraph: {
        title: "Étude de faisabilité et étude capacitaire - Reservoir Architecture",
        description: "Connaître le potentiel d’un terrain ou d’un bâtiment avant d’acheter ou d’investir, avec un architecte d’Aix-en-Provence.",
        url: `${SITE_URL}/etude-de-faisabilite`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

export default function EtudeFaisabilitePage() {
    return <V2LandingPage data={data} />;
}
