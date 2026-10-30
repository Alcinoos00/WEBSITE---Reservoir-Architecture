import type { Metadata } from "next";
import V2LandingPage from "@/app/accueil-v2/V2LandingPage";
import V2DossierForm from "@/app/accueil-v2/V2DossierForm";
import { data } from "@/lib/landings/etude-de-faisabilite";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Étude de faisabilité et étude capacitaire : investisseurs, entreprises",
    description:
        "Serge Ettore, architecte DPLG à Aix-en-Provence : études de faisabilité et capacitaires pour investisseurs, projets commerciaux et d’activité en ZAC, avant l’achat d’un terrain ou d’un bâtiment.",
    alternates: { canonical: `${SITE_URL}/etude-de-faisabilite` },
    openGraph: {
        title: "Étude de faisabilité et étude capacitaire - Reservoir Architecture",
        description: "Connaître le potentiel d’un terrain ou d’un bâtiment avant d’acheter ou d’investir, avec un architecte DPLG d’Aix-en-Provence.",
        url: `${SITE_URL}/etude-de-faisabilite`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

export default function EtudeFaisabilitePage() {
    return (
        <V2LandingPage
            data={data}
            afterSteps={
                <section className="v2-section v2-dossier-section" id="dossier">
                    <div className="v2-row">
                        <div className="v2-stack v2-fade" data-reveal>
                            <p className="v2-tag">Votre dossier</p>
                            <h2 className="v2-h2">Présentez-nous votre projet</h2>
                            <p className="v2-small">Décrivez le site et le programme envisagé, joignez les éléments dont vous disposez. Nous revenons vers vous avec un devis ; l’étude ne commence qu’après votre accord.</p>
                        </div>
                        <div className="v2-fade" data-reveal>
                            <V2DossierForm variant="faisabilite" />
                        </div>
                    </div>
                </section>
            }
        />
    );
}
