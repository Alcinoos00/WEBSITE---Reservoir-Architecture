import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import AgencySection from "@/components/AgencySection";
import SeoContentSection from "@/components/SeoContentSection";
import SeoFaqSection from "@/components/SeoFaqSection";
import LocalProjectsSection, { type LocalProject } from "@/components/LocalProjectsSection";
import {
  VILLA_F_PROJECT,
  SAMARITAINE_PROJECT,
  WAUQUIEZ_PROJECT,
  REGIE_DES_EAUX_PROJECT,
  VILLA_T_PROJECT,
  PUYRICARD_PROJECT,
  GENDARMERIE_PROJECT,
  VITROLLES_PROJECT,
  SALON_PROJECT,
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

const FAQ_ITEMS = [
  {
    q: "Quels types de projets réalise l'agence ?",
    a: "Villas et maisons contemporaines, rénovations et extensions, logements collectifs, commerces et showrooms, équipements publics. Une pratique large, du particulier au maître d'ouvrage public.",
  },
  {
    q: "Où intervient Reservoir Architecture ?",
    a: "Basée à Aix-en-Provence, l'agence intervient sur le Pays d'Aix, Marseille, les Bouches-du-Rhône et l'ensemble de la région PACA. Elle a notamment conçu des projets à Puyricard, Bouc-Bel-Air, Vitrolles, Salon-de-Provence et Grans.",
  },
  {
    q: "Réalisez-vous des rénovations et des extensions à Aix-en-Provence ?",
    a: "Oui. L'agence a par exemple rénové la Villa T, une maison de ville à Aix-en-Provence, en mission complète, de la conception au suivi du chantier. Chaque rénovation ou extension part de l'analyse de l'existant, des règles d'urbanisme et du budget.",
  },
  {
    q: "Quelles réalisations l'agence a-t-elle menées dans les Bouches-du-Rhône ?",
    a: "À Aix-en-Provence : la rénovation de la Villa T (202 m², mission complète, 2024) et la transformation des ateliers de la Régie des eaux d'Aix-en-Provence en bureaux (3 080 m², 2022). Autour d'Aix : un boulodrome à Salon-de-Provence (1 182 m², 2020-2021), des archives municipales à Vitrolles (516 m², 2017-2018), la réhabilitation de la maison des jeunes de Grans (2018-2021), la réhabilitation et l'extension de la gendarmerie de Bouc-Bel-Air (600 m²) et un ensemble de commerces à Puyricard.",
  },
  {
    q: "Qui dirige l'agence et quelle est son expérience ?",
    a: "Serge Ettore est architecte DPLG depuis 1999. Avant de fonder Reservoir Architecture en 2013, il a été responsable des projets d'architecture de Cacharel, en France et à l'international. Le site présente 36 projets : 10 villas, 6 opérations de logements, 9 commerces et 11 équipements publics.",
  },
  {
    q: "Quelles missions l'agence prend-elle en charge ?",
    a: "Selon le projet : conception et dépôt du permis de construire, ou mission complète jusqu'à la réception du chantier. Pour les collectivités, l'agence intervient comme mandataire de la maîtrise d'œuvre (loi MOP), avec diagnostic et ordonnancement, pilotage et coordination du chantier (OPC), comme à Vitrolles, Salon-de-Provence et Grans.",
  },
  {
    q: "Quels sont vos honoraires et vos délais ?",
    a: "Ils dépendent du projet : surface, programme, niveau de mission et contraintes du terrain. Une proposition et un calendrier vous sont remis après un premier échange.",
  },
  {
    q: "Faut-il obligatoirement faire appel à un architecte ?",
    a: "Le recours à un architecte est obligatoire pour toute construction de plus de 150 m² de surface de plancher, et vivement conseillé en deçà pour la qualité, la valeur et la maîtrise du projet.",
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

// Uniquement des projets situés dans les Bouches-du-Rhône (lieu vérifié dans la fiche technique).
const LOCAL_PROJECTS: LocalProject[] = [
  { project: VILLA_T_PROJECT, place: "Aix-en-Provence", summary: "Rénovation d'une maison de ville" },
  { project: PUYRICARD_PROJECT, place: "Puyricard", summary: "Ensemble de commerces et services" },
  { project: REGIE_DES_EAUX_PROJECT, place: "Aix-en-Provence", summary: "Transformation d'ateliers en bureaux" },
  { project: GENDARMERIE_PROJECT, place: "Bouc-Bel-Air", summary: "Réhabilitation, extension et surélévation" },
  { project: VITROLLES_PROJECT, place: "Vitrolles", summary: "Hangar transformé en archives municipales" },
  { project: SALON_PROJECT, place: "Salon-de-Provence", summary: "Construction d'un boulodrome" },
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
