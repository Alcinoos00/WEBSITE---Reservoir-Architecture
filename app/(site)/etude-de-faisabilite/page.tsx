import type { Metadata } from "next";
import V2LandingPage from "@/app/accueil-v2/V2LandingPage";
import V2DossierForm from "@/app/accueil-v2/V2DossierForm";
import { data } from "@/lib/landings/etude-de-faisabilite";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT, getServiceJsonLd, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: { absolute: "Étude de faisabilité et capacitaire | Reservoir Architecture" },
    description:
        "Étude de faisabilité et capacitaire par un architecte DPLG : logements, division, surélévation, commerces, locaux d’activité, ZAC. Devis sur dossier.",
    alternates: { canonical: `${SITE_URL}/etude-de-faisabilite` },
    openGraph: {
        title: "Étude de faisabilité et étude capacitaire - Reservoir Architecture",
        description: "Connaître le potentiel d’un terrain ou d’un bâtiment avant d’acheter ou d’investir, avec un architecte DPLG.",
        url: `${SITE_URL}/etude-de-faisabilite`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

export default function EtudeFaisabilitePage() {
    const jsonLd = [
        getServiceJsonLd({
            path: "/etude-de-faisabilite",
            name: "Étude de faisabilité et étude capacitaire",
            serviceType: "Étude de faisabilité architecturale",
            description: "Étude de la constructibilité d’un terrain ou d’un bâtiment avant achat ou investissement : PLU ou règlement de ZAC, surface constructible, nombre de logements ou de locaux, premières esquisses.",
            audience: "Investisseurs, promoteurs et entreprises",
        }),
        getBreadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Études", path: "/etudes" },
            { name: "Étude de faisabilité", path: "/etude-de-faisabilite" },
        ]),
    ];
    return (
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
        </>
    );
}
