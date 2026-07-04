import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import AgencySection from "@/components/AgencySection";
import SeoContentSection from "@/components/SeoContentSection";
import SeoFaqSection from "@/components/SeoFaqSection";
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
    "Reservoir Architecture, agence d'architecture DPLG à Aix-en-Provence, conçoit villas, logements, commerces et équipements publics en PACA depuis 2013.",
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

const FAQ_ITEMS = [
  {
    q: "Quels types de projets réalise l'agence ?",
    a: "Villas et maisons contemporaines, rénovations et extensions, logements collectifs, commerces et showrooms, équipements publics. Une pratique large, du particulier au maître d'ouvrage public.",
  },
  {
    q: "Où intervient Reservoir Architecture ?",
    a: "Basée à Aix-en-Provence, l'agence intervient sur le Pays d'Aix, Marseille, les Bouches-du-Rhône et l'ensemble de la région PACA.",
  },
  {
    q: "Faut-il obligatoirement faire appel à un architecte ?",
    a: "Le recours à un architecte est obligatoire pour toute construction de plus de 150 m² de surface de plancher, et vivement conseillé en deçà pour la qualité, la valeur et la maîtrise du projet.",
  },
  {
    q: "Qui dirige l'agence ?",
    a: "Reservoir Architecture est dirigée par Serge Ettore, architecte DPLG. L'agence a été fondée en 2013.",
  },
  {
    q: "Comment se passe un premier contact ?",
    a: "Un échange par téléphone ou email suffit pour présenter votre projet. Nous qualifions ensemble le programme, la zone, le budget et les conditions de faisabilité.",
  },
  {
    q: "Travaillez-vous avec les particuliers et les professionnels ?",
    a: "Oui. Nous accompagnons aussi bien les particuliers (villas, maisons, rénovations) que les promoteurs, commerçants et collectivités.",
  },
];

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
      <SeoFaqSection
        eyebrow="Questions fréquentes"
        title="Architecte à Aix-en-Provence : questions fréquentes"
        items={FAQ_ITEMS}
      />
      <AgencySection />
    </main>
  );
}
