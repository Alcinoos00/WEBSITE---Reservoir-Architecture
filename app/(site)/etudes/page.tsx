import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AfterLoad from "@/components/AfterLoad";
import { noBreakHyphens } from "@/components/noBreakHyphens";
import V2Cta from "@/app/accueil-v2/V2Cta";
import { v2 } from "@/app/accueil-v2/v2Links";
import { SITE_URL, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";
import "./etudes.css";

// Page d'entrée du menu « Études » : oriente vers l'offre particuliers et l'offre investisseurs / entreprises.

export const metadata: Metadata = {
    title: "Études avant achat : terrain, faisabilité, capacitaire",
    description:
        "Avant d’acheter un terrain, une maison ou un bâtiment, un architecte DPLG étudie ce que le site permet : étude de terrain pour les particuliers, étude de faisabilité et capacitaire pour les investisseurs et les entreprises.",
    alternates: { canonical: `${SITE_URL}/etudes` },
    openGraph: {
        title: "Études avant achat - Reservoir Architecture",
        description: "Étude de terrain pour les particuliers, étude de faisabilité et capacitaire pour les investisseurs et les entreprises.",
        url: `${SITE_URL}/etudes`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

const OFFERS = [
    {
        tag: "Particuliers",
        title: "Étude de terrain avant achat",
        text: "Vous voulez acheter un terrain pour faire construire une maison ou de petits logements, ou une maison à agrandir ? Nous vérifions le PLU, les risques et ce que vous pourrez réellement construire, avant que vous ne signiez.",
        points: "Sans visite · Rapport écrit sous 15 jours ouvrés",
        href: "/etude-terrain",
        cta: "Découvrir l’étude de terrain",
        img: "/images/projects/1-villas/villa P2/villaD_1.jpg",
        alt: "Villa construite par Reservoir Architecture sur un terrain en pente à Nîmes",
    },
    {
        tag: "Investisseurs et entreprises",
        title: "Étude de faisabilité et capacitaire",
        text: "Division, surélévation, changement d’usage, petit collectif, commerce, local d’activité ou entrepôt, en ville ou en ZAC : nous évaluons la surface constructible, le nombre de logements ou de locaux, et les règles qui s’appliquent.",
        points: "Analyse du site · Capacitaire · Premières esquisses",
        href: "/etude-de-faisabilite",
        cta: "Découvrir l’étude de faisabilité",
        img: "/images/projects/2-logements/martin-pierre/guillot_1.jpg",
        alt: "Petit collectif de logements conçu par Reservoir Architecture",
    },
];

export default function EtudesPage() {
    return (
        <>
            <section className="v2-section v2-page-top">
                <div className="v2-row v2-fade" data-reveal>
                    <div>
                        <p className="v2-tag">Études avant achat</p>
                        <h1 className="v2-h2">{noBreakHyphens("Savoir ce que permet un site, avant de vous engager")}</h1>
                    </div>
                    <div>
                        <p className="v2-small">
                            Un terrain, une maison ou un bâtiment ne se juge pas seulement sur son prix. Les règles d’urbanisme, les risques et les contraintes du site décident de ce que vous pourrez y faire. Nous les étudions pour vous, en architecte, avant la signature.
                        </p>
                        <p className="v2-tag v2-landing-trust">Architecte DPLG · Agence fondée en 2013 · PACA et Occitanie</p>
                    </div>
                </div>
            </section>

            <section className="v2-section et-offers-section">
                <ul className="et-offers">
                    {OFFERS.map((o) => (
                        <li key={o.href} className="v2-fade" data-reveal>
                            <Link href={v2(o.href)} className="et-offer-photo" aria-label={o.title}>
                                <AfterLoad>
                                    <Image src={o.img} alt={o.alt} fill sizes="(max-width: 768px) 100vw, 50vw" />
                                </AfterLoad>
                            </Link>
                            <p className="v2-tag">{o.tag}</p>
                            <h2 className="v2-h3">{o.title}</h2>
                            <p className="v2-small">{o.text}</p>
                            <p className="v2-tag">{o.points}</p>
                            <div className="v2-cta-actions">
                                <Link href={v2(o.href)} className="v2-btn">{o.cta}</Link>
                            </div>
                        </li>
                    ))}
                </ul>
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
