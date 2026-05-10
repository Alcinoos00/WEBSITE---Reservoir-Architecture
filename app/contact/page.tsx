import type { Metadata } from "next";
import SeoContentSection from "@/components/SeoContentSection";
import {
    SITE_ADDRESS,
    SITE_EMAIL,
    SITE_NAME,
    SITE_PHONE,
    SITE_PHONE_DISPLAY,
    SITE_URL,
    getContactPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
    title: "Contact architecte Aix-en-Provence",
    description:
        "Contacter Reservoir Architecture, agence d'architecture à Aix-en-Provence : email, téléphone, adresse et demandes de projets en PACA.",
    alternates: { canonical: `${SITE_URL}/contact` },
    openGraph: {
        title: "Contact - Reservoir Architecture",
        description:
            "Email, téléphone et adresse de l'agence d'architecture Reservoir Architecture à Aix-en-Provence.",
        url: `${SITE_URL}/contact`,
        type: "website",
    },
};

export default function ContactPage() {
    const jsonLd = getContactPageJsonLd();

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <SeoContentSection
                eyebrow="Contact"
                title="Contacter un architecte à Aix-en-Provence"
                subtitle="Pour présenter un projet de villa, logement, commerce ou équipement public en PACA, privilégiez l'email avec les premières informations utiles."
                links={[
                    { href: `mailto:${SITE_EMAIL}`, label: "Envoyer un email" },
                    { href: `tel:${SITE_PHONE}`, label: "Appeler l'agence" },
                ]}
            >
                <p>
                    Reservoir Architecture étudie des projets de construction, rénovation, extension, réhabilitation, architecture commerciale, logements collectifs et équipements publics depuis son agence d'Aix-en-Provence.
                </p>
                <p>
                    Pour un premier échange, vous pouvez indiquer le lieu du projet, la nature du programme, l'état d'avancement, les contraintes connues, le calendrier souhaité et les documents disponibles.
                </p>

                <div className="seo-contact-grid">
                    <div className="seo-contact-card">
                        <h2 className="title-1">Coordonnées</h2>
                        <p className="body-text"><strong>{SITE_NAME}</strong></p>
                        <p className="body-text"><a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></p>
                        <p className="body-text"><a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a></p>
                        <p className="body-text">{SITE_ADDRESS}</p>
                    </div>
                    <div className="seo-contact-card">
                        <h2 className="title-1">Zone d'intervention</h2>
                        <p className="body-text">
                            L'agence intervient depuis Aix-en-Provence en région Provence-Alpes-Côte d'Azur, notamment dans les Bouches-du-Rhône, le Var et le Vaucluse, selon la nature et l'échelle des projets.
                        </p>
                        <div className="seo-contact-actions">
                            <a className="seo-content-link" href={`mailto:${SITE_EMAIL}`}>Email</a>
                            <a className="seo-content-link" href={`tel:${SITE_PHONE}`}>Téléphone</a>
                        </div>
                    </div>
                </div>
            </SeoContentSection>
        </main>
    );
}
