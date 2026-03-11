import NavigationCarousel from "@/components/NavigationCarousel";
import AgencySection from "@/components/AgencySection";
import { VILLA_F_PROJECT, SAMARITAINE_PROJECT, WAUQUIEZ_PROJECT, REGIE_DES_EAUX_PROJECT } from "@/lib/projects";

export default function Home() {
  const categoryProjects = [
    VILLA_F_PROJECT,     // Representing VILLAS
    SAMARITAINE_PROJECT,  // Representing LOGEMENTS
    WAUQUIEZ_PROJECT,     // Representing COMMERCES
    REGIE_DES_EAUX_PROJECT // Representing ÉQUIPEMENTS
  ];

  return (
    <main>
      <NavigationCarousel items={categoryProjects} isCategoryNav={true} />
      <AgencySection />
    </main>
  );
}
