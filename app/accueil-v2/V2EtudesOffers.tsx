import Image from "next/image";
import Link from "next/link";
import AfterLoad from "@/components/AfterLoad";
import { v2 } from "./v2Links";

// Les deux offres d'études avant achat, en version courte : le détail est replié sous « En savoir davantage »
// (texte présent dans la page, donc lu par Google, sans allonger le défilement). Utilisé sur l'accueil et sur /etudes.

const OFFERS = [
    {
        tag: "Particuliers",
        title: "Étude de terrain avant achat",
        text: "Avant d’acheter un terrain ou une maison : ce que vous pourrez réellement construire, agrandir ou ajouter.",
        href: "/etude-terrain",
        cta: "Voir l’étude de terrain",
        img: "/images/projects/1-villas/villa P2/villaD_1.jpg",
        alt: "Villa construite par Reservoir Architecture sur un terrain en pente à Nîmes",
        checksTitle: "Ce que nous vérifions",
        checks: [
            "Le PLU et les règles de construction : emprise, hauteur, reculs, stationnement",
            "La surface constructible, ou l’extension et les annexes possibles pour une maison existante",
            "Les servitudes, les risques, les accès et les réseaux",
            "Les travaux déjà réalisés au regard des autorisations obtenues",
            "Les points de vigilance et les conditions suspensives avant de signer",
        ],
        steps: ["Premier échange", "Envoi des documents", "Établissement du devis", "Analyse", "Rapport sous 15 jours ouvrés"],
        note: "Sans visite sur place : l’étude se fait sur vos photos, le cadastre et les documents d’urbanisme.",
    },
    {
        tag: "Investisseurs et entreprises",
        title: "Étude de faisabilité et capacitaire",
        text: "Avant d’acheter ou d’investir : surface constructible, nombre de logements ou de locaux, règles qui s’appliquent.",
        href: "/etude-de-faisabilite",
        cta: "Voir l’étude de faisabilité",
        img: "/images/projects/2-logements/martin-pierre/guillot_1.jpg",
        alt: "Petit collectif de logements conçu par Reservoir Architecture",
        checksTitle: "Pour quels projets",
        checks: [
            "Division d’une maison ou d’un immeuble, surélévation, changement d’usage",
            "Petits collectifs et opérations de logements",
            "Commerces, locaux d’activité, entrepôts et bâtiments industriels",
            "En ville, en zone d’activité ou en ZAC, avec son cahier des charges",
        ],
        steps: ["Premier échange", "Transmission des éléments", "Établissement du devis", "Analyse du site et des règles", "Capacitaire et esquisse", "Conclusions"],
        note: "Si vous le souhaitez, nous poursuivons ensuite jusqu’au permis de construire et au chantier.",
    },
];

export default function V2EtudesOffers({ photos = false }: { photos?: boolean }) {
    return (
        <ul className="v2-offers">
            {OFFERS.map((o) => (
                <li key={o.href} className="v2-fade" data-reveal>
                    {photos && (
                        <Link href={v2(o.href)} className="v2-offer-photo" aria-label={o.title}>
                            <AfterLoad>
                                <Image src={o.img} alt={o.alt} fill sizes="(max-width: 768px) 100vw, 50vw" />
                            </AfterLoad>
                        </Link>
                    )}
                    <p className="v2-tag">{o.tag}</p>
                    <h3 className="v2-h3">{o.title}</h3>
                    <p className="v2-small">{o.text}</p>
                    <div className="v2-faq v2-offer-more">
                        <details>
                            <summary>En savoir davantage</summary>
                            <div className="v2-offer-body">
                                <p className="v2-tag">{o.checksTitle}</p>
                                <ul className="v2-offer-list">
                                    {o.checks.map((c) => (
                                        <li key={c} className="v2-small">{c}</li>
                                    ))}
                                </ul>
                                <p className="v2-tag">Déroulement</p>
                                <ol className="v2-offer-steps">
                                    {o.steps.map((s, i) => (
                                        <li key={s} className="v2-small">
                                            <span>{String(i + 1).padStart(2, "0")}</span> {s}
                                        </li>
                                    ))}
                                </ol>
                                <p className="v2-small v2-offer-note">{o.note}</p>
                            </div>
                        </details>
                    </div>
                    <div className="v2-cta-actions">
                        <Link href={v2(o.href)} className="v2-btn">{o.cta}</Link>
                    </div>
                </li>
            ))}
        </ul>
    );
}
