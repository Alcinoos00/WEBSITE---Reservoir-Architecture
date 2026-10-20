import Image from "next/image";
import Link from "next/link";
import AfterLoad from "@/components/AfterLoad";
import { SITE_PHONE } from "@/lib/seo";
import { v2 } from "./v2Links";

type Props = { title?: string; text?: string; img?: string; alt?: string };

// Bloc de contact de fin de page : titre, deux boutons, photo pleine largeur.
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
                        <a href={`tel:${SITE_PHONE}`} className="v2-btn">Appeler l&apos;agence</a>
                        <Link href={v2("/contact")} className="v2-btn v2-btn-ghost">Écrire un message</Link>
                    </div>
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
