import type { Metadata } from "next";
import { SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT, SITE_URL } from "@/lib/seo";
import HomeV2 from "@/app/accueil-v2/HomeV2";

export const metadata: Metadata = {
  // `absolute` : le template « %s | Reservoir Architecture » du layout ne s'applique pas
  // à la page du même segment, la marque manquait dans le <title> de l'accueil.
  title: { absolute: "Architecte à Aix-en-Provence | Reservoir Architecture" },
  description:
    "Reservoir Architecture, agence d'architecture DPLG à Aix-en-Provence depuis 2013 : maisons, rénovations, logements, commerces et équipements publics.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Architecte à Aix-en-Provence - Reservoir Architecture",
    description:
      "Agence d'architecture à Aix-en-Provence pour villas contemporaines, logements collectifs, commerces et équipements publics en PACA et en Occitanie.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: SITE_DEFAULT_IMAGE,
        width: 1200,
        height: 800,
        alt: SITE_DEFAULT_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [SITE_DEFAULT_IMAGE],
  },
};

export default function Home() {
    return (
        <main>
            <HomeV2 />
        </main>
    );
}
