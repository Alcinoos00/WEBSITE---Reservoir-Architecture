import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import AgencySection from "@/components/AgencySection";
import SeoContentSection from "@/components/SeoContentSection";
import {
  VILLA_F_PROJECT,
  SAMARITAINE_PROJECT,
  WAUQUIEZ_PROJECT,
  REGIE_DES_EAUX_PROJECT,
} from "@/lib/projects";
import { SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Architecte à Aix-en-Provence",
  description:
    "Reservoir Architecture, agence d'architecture à Aix-en-Provence, accompagne villas, logements, commerces et équipements publics en PACA.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Architecte à Aix-en-Provence - Reservoir Architecture",
    description:
      "Agence d'architecture en PACA pour villas contemporaines, logements collectifs, commerces et équipements publics.",
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
  const categoryProjects = [
    VILLA_F_PROJECT,
    SAMARITAINE_PROJECT,
    WAUQUIEZ_PROJECT,
    REGIE_DES_EAUX_PROJECT,
  ];

  return (
    <main>
      <NavigationCarousel items={categoryProjects} isCategoryNav={true} />
      <SeoContentSection
        eyebrow="Agence d'architecture en PACA"
        title="Architecte à Aix-en-Provence"
        subtitle="Reservoir Architecture conçoit et accompagne des projets de villas contemporaines, logements collectifs, commerces et équipements publics depuis Aix-en-Provence."
        links={[
          { href: "/contact", label: "Contacter l'agence" },
          { href: "/villas", label: "Villas" },
          { href: "/logements", label: "Logements" },
          { href: "/commerces", label: "Commerces" },
          { href: "/equipements", label: "Équipements" },
        ]}
      >
        <p>
          Implantée à Aix-en-Provence, Reservoir Architecture intervient en PACA auprès de particuliers, promoteurs, commerçants et collectivités. L'agence développe une architecture attentive au site, aux usages, au budget et à la durée de vie des bâtiments.
        </p>
        <p>
          Le travail de l'agence couvre la conception de maisons et villas contemporaines, la rénovation, l'extension, les logements collectifs, les espaces commerciaux, les showrooms et les équipements publics. Cette diversité correspond à la réalité de l'agence : une pratique large, mais une même exigence de justesse constructive.
        </p>
        <p>
          Chaque projet part d'un contexte précis : orientation, lumière, structure existante, contraintes réglementaires, économie de moyens, parcours et matérialité. L'objectif est de produire une réponse claire, durable et lisible, sans réduire l'architecture à un style répétitif.
        </p>
        <p>
          Pour une mission d'architecte à Aix-en-Provence ou en région Provence-Alpes-Côte d'Azur, le premier échange permet de qualifier le programme, le niveau d'accompagnement attendu et les conditions de faisabilité du projet.
        </p>
      </SeoContentSection>
      <AgencySection />
    </main>
  );
}


