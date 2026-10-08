import type { LocalProject } from "@/components/LocalProjectsSection";
import {
    VILLA_T_PROJECT,
    PUYRICARD_PROJECT,
    REGIE_DES_EAUX_PROJECT,
    GENDARMERIE_PROJECT,
    VITROLLES_PROJECT,
    SALON_PROJECT,
} from "@/lib/projects";

// Contenu partagé entre l'accueil et sa version de travail (/accueil-v2).
export const FAQ_ITEMS = [
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
export const LOCAL_PROJECTS: LocalProject[] = [
  { project: VILLA_T_PROJECT, place: "Aix-en-Provence", summary: "Rénovation d'une maison de ville" },
  { project: PUYRICARD_PROJECT, place: "Puyricard", summary: "Ensemble de commerces et services" },
  { project: REGIE_DES_EAUX_PROJECT, place: "Aix-en-Provence", summary: "Transformation d'ateliers en bureaux" },
  { project: GENDARMERIE_PROJECT, place: "Bouc-Bel-Air", summary: "Réhabilitation, extension et surélévation" },
  { project: VITROLLES_PROJECT, place: "Vitrolles", summary: "Hangar transformé en archives municipales" },
  { project: SALON_PROJECT, place: "Salon-de-Provence", summary: "Construction d'un boulodrome" },
];
