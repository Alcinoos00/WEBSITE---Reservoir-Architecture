import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import AgencySection from "@/components/AgencySection";
import SeoContentSection from "@/components/SeoContentSection";
import SeoFaqSection from "@/components/SeoFaqSection";
import LocalProjectsSection from "@/components/LocalProjectsSection";
import {
  VILLA_F_PROJECT,
  SAMARITAINE_PROJECT,
  WAUQUIEZ_PROJECT,
  REGIE_DES_EAUX_PROJECT,
} from "@/lib/projects";
import { SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT, SITE_URL } from "@/lib/seo";

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
      "Agence d'architecture à Aix-en-Provence pour villas contemporaines, logements collectifs, commerces et équipements publics en PACA.",
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

import { FAQ_ITEMS, LOCAL_PROJECTS } from "@/lib/homeContent";

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
        eyebrow="Agence d'architecture à Aix-en-Provence"
        title="Architecte à Aix-en-Provence"
        subtitle="Reservoir Architecture, agence d'architecture DPLG fondée en 2013, conçoit et accompagne villas contemporaines, logements collectifs, commerces et équipements publics depuis Aix-en-Provence."
        links={[
          { href: "/contact", label: "Contacter l'agence" },
          { href: "/villas", label: "Villas" },
          { href: "/logements", label: "Logements" },
          { href: "/commerces", label: "Commerces" },
          { href: "/equipements", label: "Équipements" },
        ]}
      >
        <p>
          Implantée à Aix-en-Provence, Reservoir Architecture intervient dans le Pays d'Aix, les Bouches-du-Rhône et l'ensemble de la région PACA, auprès de particuliers, promoteurs, commerçants et collectivités. L'agence développe une architecture attentive au site, aux usages, au budget et à la durée de vie des bâtiments.
        </p>
        <p>
          Le travail de l'agence couvre la conception de maisons et villas contemporaines, la rénovation, l'extension, les logements collectifs, les espaces commerciaux, les showrooms et les équipements publics. Cette diversité correspond à la réalité de l'agence : une pratique large, mais une même exigence de justesse constructive.
        </p>
        <p>
          Chaque projet part d'un contexte précis : orientation, lumière, structure existante, contraintes réglementaires, économie de moyens, parcours et matérialité. L'objectif est de produire une réponse claire, durable et lisible, sans réduire l'architecture à un style répétitif.
        </p>
        <p>
          L'agence est dirigée par Serge Ettore, architecte DPLG. Faire appel à un architecte à Aix-en-Provence, c'est s'assurer d'un interlocuteur unique et responsable, de la faisabilité au suivi de chantier, qui engage sa signature et son assurance sur la qualité du projet.
        </p>
        <p>
          Pour une mission d'architecte à Aix-en-Provence ou en région Provence-Alpes-Côte d'Azur, le premier échange permet de qualifier le programme, le niveau d'accompagnement attendu et les conditions de faisabilité du projet.
        </p>
      </SeoContentSection>
      {/* Preuve locale avant la FAQ. Les liens renvoient vers les pages dédiées à Aix
          (maillage de la requête « architecte aix en provence » vers ses déclinaisons). */}
      <LocalProjectsSection
        eyebrow="Projets dans les Bouches-du-Rhône"
        title="Nos réalisations à Aix-en-Provence et alentours"
        lede="Maison de ville, commerces, équipements publics : l'agence conçoit des projets à Aix-en-Provence, Puyricard, Bouc-Bel-Air, Vitrolles et Salon-de-Provence, pour des particuliers comme pour les communes."
        items={LOCAL_PROJECTS}
        links={{
          intro: "Votre projet à Aix-en-Provence :",
          items: [
            { href: "/villas-aix-en-provence", label: "Architecte villa" },
            { href: "/commerces-aix-en-provence", label: "Architecte commerce" },
            { href: "/logements-aix-en-provence", label: "Architecte logements" },
            { href: "/equipements-aix-en-provence", label: "Architecte équipements publics" },
          ],
        }}
      />
      <SeoFaqSection
        eyebrow="Questions fréquentes"
        title="Architecte à Aix-en-Provence : questions fréquentes"
        items={FAQ_ITEMS}
      />
      <AgencySection />
    </main>
  );
}
