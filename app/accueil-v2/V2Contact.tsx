import { SITE_ADDRESS, SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/seo";

// Corps de la page contact (mise en page v2). Métadonnées et données structurées : app/(site)/contact/page.tsx.
export default function V2Contact() {
    return (
        <section className="v2-section v2-page-top">
            <div className="v2-stack v2-stack-top v2-fade" data-reveal>
                <p className="v2-tag">Contact</p>
                <h1 className="v2-h2">Contacter un architecte à <span className="v2-nowrap">Aix-en-Provence</span></h1>
                <p className="v2-small">
                    Pour présenter un projet de villa, logement, commerce ou équipement public en PACA, privilégiez l&apos;email avec les premières informations utiles.
                </p>
            </div>
            <div className="v2-row v2-contact">
                <div className="v2-fade" data-reveal>
                    <p className="v2-label">Coordonnées</p>
                    <a className="v2-contact-big" href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>
                    <a className="v2-contact-big" href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                    <p className="v2-small">{SITE_NAME}<br />{SITE_ADDRESS}</p>
                    <div className="v2-cta-actions">
                        <a href={`tel:${SITE_PHONE}`} className="v2-btn">Appeler l&apos;agence</a>
                        <a href={`mailto:${SITE_EMAIL}`} className="v2-btn v2-btn-ghost">Envoyer un email</a>
                    </div>
                </div>
                <div className="v2-about-text v2-fade" data-reveal>
                    <p className="v2-label">Zone d&apos;intervention</p>
                    <p className="v2-small">
                        L&apos;agence intervient depuis Aix-en-Provence en région Provence-Alpes-Côte d&apos;Azur, notamment dans les Bouches-du-Rhône, le Var et le Vaucluse, selon la nature et l&apos;échelle des projets.
                    </p>
                    <p className="v2-small">
                        Reservoir Architecture étudie des projets de construction, rénovation, extension, réhabilitation, architecture commerciale, logements collectifs et équipements publics depuis son agence d&apos;Aix-en-Provence.
                    </p>
                    <p className="v2-small">
                        Pour un premier échange, vous pouvez indiquer le lieu du projet, la nature du programme, l&apos;état d&apos;avancement, les contraintes connues, le calendrier souhaité et les documents disponibles.
                    </p>
                </div>
            </div>
        </section>
    );
}
