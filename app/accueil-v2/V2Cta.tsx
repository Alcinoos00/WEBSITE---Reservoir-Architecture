import Image from "next/image";
import AfterLoad from "@/components/AfterLoad";
import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/seo";
import { CONTACT_FORM_ENABLED } from "@/lib/contactForm";
import V2ContactForm from "./V2ContactForm";

type Props = { title?: string; text?: string; img?: string; alt?: string };

// Bloc de contact de fin de page : titre, deux boutons, formulaire, photo pleine largeur.
export default function V2Cta({
    title = "Parlons du projet qui conviendra à votre terrain.",
    text,
    img = "/images/projects/1-villas/villa C/villaC_1.jpg",
    alt = "Villa C, villa contemporaine avec piscine à Nîmes",
}: Props) {
    return (
        <section className="v2-cta">
            <div className="v2-cta-content">
                <p className="v2-label v2-fade" data-reveal>Nous contacter</p>
                <div className="v2-fade" data-reveal>
                    <p className="v2-cta-title">{title}</p>
                    {text && <p className="v2-small v2-cta-text">{text}</p>}
                    <div className="v2-cta-actions">
                        <a href={`tel:${SITE_PHONE}`} className="v2-btn">Appeler le {SITE_PHONE_DISPLAY}</a>
                        <a href={`mailto:${SITE_EMAIL}`} className="v2-btn v2-btn-ghost v2-btn-email">{SITE_EMAIL}</a>
                    </div>
                    {CONTACT_FORM_ENABLED && <V2ContactForm loc="fin_de_page" />}
                </div>
            </div>
            <div className="v2-cta-photo">
                <AfterLoad>
                    <Image src={img} alt={alt} fill sizes="100vw" quality={90} />
                </AfterLoad>
            </div>
        </section>
    );
}
