import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AfterLoad from "@/components/AfterLoad";
import { noBreakHyphens } from "@/components/noBreakHyphens";
import V2Reviews from "@/app/accueil-v2/V2Reviews";
import V2Cta from "@/app/accueil-v2/V2Cta";
import { v2 } from "@/app/accueil-v2/v2Links";
import { SITE_URL, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT } from "@/lib/seo";
import "./etude-terrain.css";

// Offre « Étude de terrain avant achat » pour les particuliers. Sans prix affiché :
// une proposition est adressée après un premier échange (choix d'Emeric le 2026-10-30).

const TEL = `tel:${SITE_PHONE}`;
const MAILTO = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent("Demande d’étude de terrain avant achat")}&body=${encodeURIComponent(
    "Bonjour,\n\nJe souhaite faire étudier un terrain avant de l’acheter.\n\nAdresse du terrain :\nRéférences cadastrales (si connues) :\nMon projet (maison, petits logements, extension ou annexes) :\nDate prévue de signature :\n\nMerci,\n",
)}`;

export const metadata: Metadata = {
    title: "Étude de terrain avant achat : PLU, constructibilité, extension",
    description:
        "Avant d’acheter un terrain ou une maison, un architecte DPLG analyse le PLU, les risques et ce que vous pourrez construire : maison, petits logements, extension ou annexes. Sans visite, rapport sous 15 jours ouvrés.",
    alternates: { canonical: `${SITE_URL}/etude-terrain` },
    openGraph: {
        title: "Étude de terrain avant achat - Reservoir Architecture",
        description: "Analyse du PLU et de la constructibilité d’un terrain ou d’une maison avant la signature, par un architecte DPLG.",
        url: `${SITE_URL}/etude-terrain`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

const INCLUDED = [
    { title: "Le PLU applicable", text: "La zone du terrain et son règlement : ce qui est autorisé, interdit ou soumis à conditions." },
    { title: "Les règles de construction", text: "Emprise au sol, hauteur, reculs par rapport aux voies et aux voisins, espaces verts, stationnement." },
    { title: "Ce que vous pourrez construire", text: "Une estimation de la surface constructible et du nombre de logements possible, pour une maison ou de petits logements." },
    { title: "Extension et annexes", text: "Si une maison existe déjà : possibilité de l’agrandir, de la surélever ou d’ajouter un garage, un abri, un pool house ou une piscine, et surface encore disponible." },
    { title: "Travaux déjà réalisés", text: "Si une maison existe déjà : comparaison entre ce qui est construit et les autorisations obtenues, pour repérer d’éventuels travaux non déclarés." },
    { title: "Servitudes et risques", text: "Monuments historiques, emplacements réservés, inondation, feux de forêt, retrait-gonflement des argiles, mouvements de terrain." },
    { title: "Accès et réseaux", text: "Accès, eau, électricité, assainissement collectif ou individuel, d’après les documents disponibles." },
    { title: "Nos conseils avant de signer", text: "Les points de vigilance et les conditions suspensives à prévoir dans le compromis." },
];

const EXCLUDED = [
    "Pas de visite sur place : l’analyse se fait sur vos photos, le cadastre et les documents publics",
    "Pas d’esquisse ni de plan du futur projet",
    "Pas de relevé, de bornage ni d’étude de sol",
    "Pas de démarches auprès de la mairie à votre place",
];

const DOCS_REQUIRED = [
    "L’adresse du terrain et, si vous les avez, ses références cadastrales (section et numéro de parcelle)",
    "L’annonce ou la fiche descriptive du bien (surface, prix)",
    "Des photos : vues d’ensemble, accès depuis la rue, limites, pente, constructions voisines",
    "Une courte description de votre projet : maison (surface, nombre de niveaux, piscine), petits logements (combien, de quelle taille), ou extension et annexes",
];

const DOCS_USEFUL = [
    "Le plan de division ou de bornage, si le terrain est issu d’une division",
    "En lotissement : le règlement, le cahier des charges et le plan de composition",
    "Le certificat d’urbanisme, s’il a déjà été demandé",
    "Le compromis ou la promesse de vente, ou son projet",
    "Pour une maison existante : ses plans ou un croquis, sa surface, et les permis ou déclarations de travaux obtenus",
];

const STEPS = [
    { title: "Premier échange.", text: "Vous nous présentez le terrain ou la maison, votre projet et votre calendrier. Nous vous adressons une proposition adaptée." },
    { title: "Envoi des documents.", text: `Après votre accord, vous nous envoyez vos documents et vos photos à ${SITE_EMAIL}.` },
    { title: "Analyse.", text: "Nous étudions le PLU, le cadastre, les risques et les servitudes à partir de votre dossier et des sources publiques." },
    { title: "Rapport.", text: "Vous recevez un rapport écrit en PDF sous 15 jours ouvrés après réception du dossier complet, et nous en parlons par téléphone si vous le souhaitez." },
];

const FAQ = [
    { q: "Pourquoi faire cette étude avant de signer ?", a: "Une fois le terrain acheté, il est trop tard pour découvrir qu’on ne peut pas y construire la maison ou le nombre de logements prévu. L’étude vous aide à négocier ou à prévoir les bonnes conditions suspensives." },
    { q: "Combien coûte l’étude ?", a: "Le prix dépend du bien : terrain nu ou maison existante, complexité des règles d’urbanisme. Nous vous adressons une proposition forfaitaire après un premier échange, avant tout engagement." },
    { q: "J’achète une maison. Pourrai-je l’agrandir ou ajouter une annexe ?", a: "C’est justement ce que l’étude vérifie : surface encore constructible selon le PLU, reculs, hauteur, emprise au sol, possibilité d’un garage, d’un abri, d’un pool house ou d’une piscine. À noter : un particulier doit faire appel à un architecte si l’agrandissement exige un permis de construire et porte la surface de plancher totale au-delà de 150 m²." },
    { q: "L’étude garantit-elle l’obtention du permis de construire ?", a: "Non. Elle donne une analyse sérieuse des règles applicables à sa date, mais seule la mairie délivre le permis. Nous vous conseillons aussi de demander un certificat d’urbanisme opérationnel." },
    { q: "Pourquoi n’y a-t-il pas de visite ?", a: "Pour aller vite et garder un coût accessible. Les photos, le cadastre et les documents d’urbanisme suffisent pour l’essentiel. Si une visite ou une esquisse est utile ensuite, nous vous ferons une proposition." },
    { q: "Et si je décide ensuite de construire avec vous ?", a: "Nous pouvons poursuivre avec la conception et le permis de construire. Une proposition d’honoraires vous sera alors remise." },
    { q: "Où intervenez-vous ?", a: "En Provence-Alpes-Côte d’Azur et en Occitanie. L’étude se faisant à distance, contactez-nous pour un terrain situé ailleurs en France." },
];

export default function EtudeTerrainPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <section className="v2-section v2-page-top">
                <div className="v2-row v2-fade" data-reveal>
                    <div>
                        <p className="v2-tag">Particuliers · Avant l’achat d’un terrain ou d’une maison</p>
                        <h1 className="v2-h2">{noBreakHyphens("Que pourrez-vous construire sur ce terrain ?")}</h1>
                    </div>
                    <div>
                        <p className="v2-small">
                            Avant de signer, un architecte DPLG analyse le PLU et les contraintes du bien que vous voulez acheter : pour y faire construire une maison ou de petits logements, ou, si une maison existe déjà, pour savoir si vous pourrez l’agrandir ou ajouter des annexes. Un rapport clair, sans visite sur place.
                        </p>
                        <p className="v2-tag v2-landing-trust">Architecte DPLG · Agence fondée en 2013 · Rapport sous 15 jours ouvrés · PACA et Occitanie</p>
                        <div className="v2-cta-actions">
                            <a href={TEL} className="v2-btn">Faire étudier mon terrain · {SITE_PHONE_DISPLAY}</a>
                            <a href={MAILTO} className="v2-btn v2-btn-ghost">Écrire un email</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="v2-landing-hero">
                <Image src="/images/projects/1-villas/villa P2/villaD_1.jpg" alt="Villa construite par Reservoir Architecture sur un terrain en pente à Nîmes" fill priority sizes="100vw" />
            </div>

            <section className="v2-section">
                <div className="v2-stack v2-fade" data-reveal>
                    <h2 className="v2-h2">Ce que comprend l’étude</h2>
                    <p className="v2-small">Huit points vérifiés, rassemblés dans un rapport écrit que vous pouvez garder et montrer à votre notaire ou à votre banque.</p>
                </div>
                <ol className="v2-reasons et-included">
                    {INCLUDED.map((r, i) => (
                        <li key={r.title} className="v2-fade" data-reveal>
                            <span className="v2-list-num">{String(i + 1).padStart(2, "0")}</span>
                            <h3 className="v2-h3">{r.title}</h3>
                            <p className="v2-small">{r.text}</p>
                        </li>
                    ))}
                </ol>
                <div className="v2-row et-excluded v2-fade" data-reveal>
                    <h2 className="v2-h3">Ce qu’elle ne comprend pas</h2>
                    <ul className="et-list">
                        {EXCLUDED.map((t) => (
                            <li key={t} className="v2-small">{t}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="v2-section">
                <div className="v2-stack v2-fade" data-reveal>
                    <h2 className="v2-h2">Les documents à nous envoyer</h2>
                    <p className="v2-small">Plus votre dossier est complet, plus l’étude est précise.</p>
                </div>
                <div className="v2-row et-docs">
                    <div className="v2-fade" data-reveal>
                        <h3 className="v2-h3">Indispensables</h3>
                        <ul className="et-list">
                            {DOCS_REQUIRED.map((t) => (
                                <li key={t} className="v2-small">{t}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="v2-fade" data-reveal>
                        <h3 className="v2-h3">Utiles si vous les avez</h3>
                        <ul className="et-list">
                            {DOCS_USEFUL.map((t) => (
                                <li key={t} className="v2-small">{t}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="v2-section">
                <div className="v2-stack v2-fade" data-reveal>
                    <h2 className="v2-h2">Comment se passe l’étude</h2>
                </div>
                <ol className="v2-steps">
                    {STEPS.map((s, i) => (
                        <li key={s.title} className="v2-fade" data-reveal>
                            <span className="v2-steps-num">{String(i + 1).padStart(2, "0")}</span>
                            <div>
                                <h3 className="v2-h3">{s.title}</h3>
                                <p className="v2-small">{s.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
                <div className="v2-cta-actions">
                    <a href={TEL} className="v2-btn">Faire étudier mon terrain</a>
                    <a href={MAILTO} className="v2-btn v2-btn-ghost">Écrire un email</a>
                </div>
            </section>

            <section className="v2-section">
                <div className="v2-stack v2-fade" data-reveal>
                    <p className="v2-tag">Qui réalise l’étude</p>
                    <h2 className="v2-h2">Un architecte, pas un logiciel</h2>
                </div>
                <div className="v2-architect v2-landing-local">
                    <div className="v2-architect-head v2-fade" data-reveal>
                        <div className="v2-architect-photo">
                            <AfterLoad>
                                <Image src="/images/serge-ettore.webp" alt="Serge Ettore, architecte DPLG et fondateur de Reservoir Architecture, devant une bastide en Provence" fill sizes="(max-width: 768px) 120px, 220px" />
                            </AfterLoad>
                        </div>
                        <div>
                            <p className="v2-h3 v2-architect-name">Serge Ettore</p>
                            <p className="v2-tag">Architecte DPLG, fondateur</p>
                        </div>
                    </div>
                    <div className="v2-architect-text v2-fade" data-reveal>
                        <p className="v2-small">Chaque étude est menée par Serge Ettore, architecte DPLG depuis 1999. Il lit le PLU comme il le ferait pour déposer un permis : avec l’œil de celui qui devra ensuite concevoir et construire.</p>
                        <p className="v2-small">L’agence est basée à Aix-en-Provence et intervient en Provence-Alpes-Côte d’Azur et en Occitanie.</p>
                        <V2Reviews />
                    </div>
                </div>
            </section>

            <section className="v2-section">
                <div className="v2-row">
                    <h2 className="v2-h2 v2-fade" data-reveal>Questions fréquentes</h2>
                    <div className="v2-faq v2-fade" data-reveal>
                        {FAQ.map((f) => (
                            <details key={f.q}>
                                <summary>{f.q}</summary>
                                <p className="v2-small">{f.a}</p>
                            </details>
                        ))}
                        <p className="v2-small et-legal">
                            L’étude porte sur les règles et documents disponibles à sa date. Elle ne vaut ni certificat d’urbanisme ni autorisation de construire.
                        </p>
                        <div className="v2-cta-actions">
                            <Link href={v2("/contact")} className="v2-btn v2-btn-ghost">Poser une question</Link>
                        </div>
                    </div>
                </div>
            </section>

            <V2Cta
                title="Faites étudier votre terrain avant de signer."
                text="Présentez-nous le bien et votre projet : nous vous adressons une proposition, puis un rapport sous 15 jours ouvrés après réception du dossier complet."
                img="/images/projects/1-villas/villa P2/villaD_2.jpg"
                alt="Villa contemporaine sur un terrain en pente à Nîmes"
            />
        </>
    );
}
