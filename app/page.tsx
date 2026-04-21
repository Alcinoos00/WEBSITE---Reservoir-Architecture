import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import AgencySection from "@/components/AgencySection";
import {
  VILLA_F_PROJECT,
  SAMARITAINE_PROJECT,
  WAUQUIEZ_PROJECT,
  REGIE_DES_EAUX_PROJECT,
} from "@/lib/projects";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Architecte à Aix-en-Provence, Marseille, Nîmes",
  description:
    "Agence d'architecture en Provence (13, 30, 83, 84). Villas contemporaines, logements collectifs, commerces, équipements publics. Particuliers & promoteurs.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Reservoir Architecture — Architecte en Provence",
    description:
      "Villas, logements, commerces, équipements. Conception sur mesure pour particuliers et promoteurs en Provence.",
    url: SITE_URL,
    type: "website",
  },
};

export default function Home() {
  const categoryProjects = [
    VILLA_F_PROJECT,
    SAMARITAINE_PROJECT,
    WAUQUIEZ_PROJECT,
    REGIE_DES_EAUX_PROJECT,
  ];

  return (
    <main>
      <NavigationCarousel items={categoryProjects} isCategoryNav={true} />
      <AgencySection />
    </main>
  );
}
