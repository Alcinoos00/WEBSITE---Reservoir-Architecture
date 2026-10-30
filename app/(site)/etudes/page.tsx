import type { Metadata } from "next";
import { noBreakHyphens } from "@/components/noBreakHyphens";
import V2Cta from "@/app/accueil-v2/V2Cta";
import V2EtudesOffers from "@/app/accueil-v2/V2EtudesOffers";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT, getBreadcrumbJsonLd } from "@/lib/seo";

// Page d'entrée du menu « Études » : oriente vers l'offre particuliers et l'offre investisseurs / entreprises.

export const metadata: Metadata = {
    title: { absolute: "Étude de terrain et de faisabilité | Reservoir Architecture" },
    description:
        "Avant d’acheter, savoir ce que permet un site : étude de terrain pour les particuliers, étude de faisabilité et capacitaire pour investisseurs et entreprises.",
    alternates: { canonical: `${SITE_URL}/etudes` },
    openGraph: {
        title: "Études avant achat - Reservoir Architecture",
        description: "Étude de terrain pour les particuliers, étude de faisabilité et capacitaire pour les investisseurs et les entreprises.",
        url: `${SITE_URL}/etudes`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};


export default function EtudesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Études", path: "/etudes" }])) }}
            />
            <section className="v2-section v2-page-top">
                <div className="v2-row v2-fade" data-reveal>
                    <div>
                        <p className="v2-tag">Études avant achat</p>
                        <h1 className="v2-h2">{noBreakHyphens("Savoir ce que permet un site, avant de vous engager")}</h1>
                    </div>
                    <div>
                        <p className="v2-small">
                            Un terrain, une maison ou un bâtiment ne se juge pas seulement sur son prix. Les règles d’urbanisme, les risques et les contraintes du site décident de ce que vous pourrez y faire. Serge Ettore, architecte DPLG de l’agence, les étudie pour vous avant la signature.
                        </p>
                        <p className="v2-tag v2-landing-trust">Architecte DPLG depuis 1999 · Agence fondée en 2013 à Aix-en-Provence</p>
                    </div>
                </div>
            </section>

            <section className="v2-section et-offers-section">
                <V2EtudesOffers photos />
            </section>

            <V2Cta
                title="Un doute sur l’étude qui vous convient ?"
                text="Présentez-nous le bien et votre projet : nous vous orientons et vous adressons une proposition."
                img="/images/projects/2-logements/trentini/childebert_2.jpg"
                alt="Petit immeuble de logements conçu par Reservoir Architecture"
            />
        </>
    );
}
