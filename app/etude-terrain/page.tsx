import type { Metadata } from "next";
import Image from "next/image";
import "@/components/landing.css";
import "./etude-terrain.css";
import { SITE_URL, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY, SITE_DEFAULT_IMAGE, SITE_DEFAULT_IMAGE_ALT, ETUDE_TERRAIN_PAYMENT_URL } from "@/lib/seo";

const PRICE = "250 € TTC";
const TEL = `tel:${SITE_PHONE}`;
const ORDER_MAILTO = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent("Commande – Étude de terrain avant achat (250 € TTC)")}&body=${encodeURIComponent(
    "Bonjour,\n\nJe souhaite commander l’étude de terrain avant achat.\n\nAdresse du terrain :\nRéférences cadastrales (si connues) :\nMon projet (maison / petits logements) :\nDate prévue de signature :\n\nMerci,\n",
)}`;

export const metadata: Metadata = {
    title: "Étude de terrain avant achat : PLU et constructibilité, 250 € TTC",
    description:
        "Avant d’acheter un terrain pour faire construire une maison ou de petits logements, un architecte DPLG analyse le PLU, les risques et la constructibilité. 250 € TTC, sans visite.",
    alternates: { canonical: `${SITE_URL}/etude-terrain` },
    openGraph: {
        title: "Étude de terrain avant achat - Reservoir Architecture",
        description: "Analyse du PLU et de la constructibilité d’un terrain avant signature, par un architecte DPLG. 250 € TTC.",
        url: `${SITE_URL}/etude-terrain`,
        type: "website",
        images: [{ url: SITE_DEFAULT_IMAGE, width: 1200, height: 800, alt: SITE_DEFAULT_IMAGE_ALT }],
    },
};

const INCLUDED = [
    "Zone du PLU et règlement applicable : ce qui est autorisé ou interdit sur le terrain",
    "Règles de construction : emprise au sol, hauteur, reculs par rapport aux voies et aux voisins, espaces verts, stationnement",
    "Estimation de la surface constructible et du nombre de logements possible (maison ou petits logements)",
    "Servitudes et protections : périmètre de monument historique, orientations d’aménagement, emplacements réservés",
    "Risques connus : inondation, feux de forêt, retrait-gonflement des argiles, mouvements de terrain",
    "Accès, réseaux et assainissement, d’après les documents disponibles",
    "Points de vigilance et conseils avant de signer, notamment les conditions suspensives à prévoir",
];

const EXCLUDED = [
    "Pas de visite sur place : l’analyse se fait sur vos photos, le cadastre et les documents publics",
    "Pas d’esquisse ni de plan du futur projet",
    "Pas de relevé, de bornage ni d’étude de sol",
    "Pas de démarches auprès de la mairie à votre place",
];

const DOCS_REQUIRED = [
    "L’adresse du terrain et, si vous les avez, ses références cadastrales (section et numéro de parcelle)",
    "L’annonce ou la fiche descriptive du terrain (surface, prix)",
    "Des photos du terrain : vues d’ensemble, accès depuis la rue, limites, pente, constructions voisines",
    "Une courte description de votre projet : maison (surface souhaitée, nombre de niveaux, piscine) ou petits logements (combien, de quelle taille)",
];

const DOCS_USEFUL = [
    "Le plan de division ou de bornage, si le terrain est issu d’une division",
    "Si le terrain est en lotissement : le règlement, le cahier des charges et le plan de composition",
    "Le certificat d’urbanisme, s’il a déjà été demandé",
    "Le compromis ou la promesse de vente, ou son projet",
    "Toute information sur les réseaux : eau, électricité, tout-à-l’égout ou assainissement individuel",
];

const STEPS = [
    {
        title: "Commande et paiement.",
        text: ETUDE_TERRAIN_PAYMENT_URL
            ? `Vous réglez l’étude en ligne (${PRICE}).`
            : `Vous commandez l’étude par email, nous vous envoyons le moyen de paiement (${PRICE}).`,
    },
    { title: "Envoi des documents.", text: `Vous nous envoyez vos documents et vos photos par email à ${SITE_EMAIL}.` },
    { title: "Analyse.", text: "Nous étudions le PLU, le cadastre, les risques et les servitudes à partir de vos documents et des sources publiques." },
    { title: "Rapport.", text: "Vous recevez un rapport écrit en PDF, sous 10 jours ouvrés après réception du dossier complet, et nous pouvons en parler par téléphone." },
];

const FAQ = [
    { q: "Pourquoi faire cette étude avant de signer ?", a: "Une fois le terrain acheté, il est trop tard pour découvrir qu’on ne peut pas y construire la maison ou le nombre de logements prévu. L’étude vous aide à négocier ou à prévoir les bonnes conditions suspensives." },
    { q: "Est-ce que l’étude garantit l’obtention du permis de construire ?", a: "Non. Elle donne une analyse sérieuse des règles applicables à la date de l’étude, mais seule la mairie délivre le permis. Nous vous conseillons aussi de demander un certificat d’urbanisme opérationnel." },
    { q: "Pourquoi n’y a-t-il pas de visite ?", a: "Pour garder un prix accessible. Les photos, le cadastre et les documents d’urbanisme suffisent pour l’essentiel. Si une visite ou une esquisse est utile ensuite, nous vous ferons une proposition." },
    { q: "Et si je décide ensuite de construire avec vous ?", a: "Nous pouvons poursuivre avec la conception et le permis de construire. Une proposition d’honoraires vous sera alors remise." },
    { q: "Où intervenez-vous ?", a: "En Provence et dans le Gard. L’étude se faisant à distance, contactez-nous pour un terrain situé ailleurs en France." },
];

function Check() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="5 12.5 10 17 19 7.5" />
        </svg>
    );
}

function Cross() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
    );
}

function OrderButton({ loc, onDark = false }: { loc: string; onDark?: boolean }) {
    const cls = `lp-btn lp-btn--solid${onDark ? " lp-btn--on-dark" : ""}`;
    if (ETUDE_TERRAIN_PAYMENT_URL) {
        return (
            <a className={cls} href={ETUDE_TERRAIN_PAYMENT_URL} data-cta="paiement" data-loc={loc} rel="noopener">
                Commander et payer {PRICE}
            </a>
        );
    }
    return (
        <a className={cls} href={ORDER_MAILTO} data-cta="email" data-loc={loc}>
            Commander l’étude par email
        </a>
    );
}

export default function EtudeTerrainPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    };

    return (
        <main className="lp et">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <section className="lp-hero et-hero">
                <Image className="lp-hero-bg" src="/images/projects/1-villas/villa P2/villaD_1.jpg" alt="Villa construite sur un terrain en pente par Reservoir Architecture" fill sizes="100vw" loading="eager" fetchPriority="high" />
                <div className="lp-hero-overlay" />
                <div className="lp-inner lp-hero-inner">
                    <p className="lp-eyebrow lp-hero-eyebrow">Particuliers · Avant l’achat d’un terrain</p>
                    <h1>Que pourrez-vous construire sur ce terrain ?</h1>
                    <p className="lp-hero-sub">
                        Avant de signer, un architecte DPLG analyse le PLU et les contraintes du terrain que vous voulez acheter, pour y faire construire une maison ou de petits logements. Un rapport clair, à prix fixe, sans visite sur place.
                    </p>
                    <p className="et-hero-price">{PRICE}</p>
                    <div className="lp-cta-row">
                        <OrderButton loc="et_hero" onDark />
                        <a className="lp-btn lp-btn--on-dark lp-btn--ghost" href={TEL} data-cta="appel" data-loc="et_hero">
                            {SITE_PHONE_DISPLAY}
                        </a>
                    </div>
                </div>
            </section>

            <section className="lp-section lp-section--white">
                <div className="lp-inner et-offer">
                    <div>
                        <p className="lp-eyebrow">Ce que comprend l’étude</p>
                        <ul className="et-list et-list--in">
                            {INCLUDED.map((t) => (
                                <li key={t}><Check />{t}</li>
                            ))}
                        </ul>
                        <p className="lp-eyebrow et-gap">Ce qu’elle ne comprend pas</p>
                        <ul className="et-list et-list--out">
                            {EXCLUDED.map((t) => (
                                <li key={t}><Cross />{t}</li>
                            ))}
                        </ul>
                    </div>
                    <aside className="et-card" aria-label="Tarif de l’étude">
                        <p className="lp-eyebrow">Étude de terrain avant achat</p>
                        <p className="et-card-price">{PRICE}</p>
                        <p className="et-card-note">Prix fixe, payé à la commande</p>
                        <ul className="et-card-points">
                            <li>Analyse du PLU et de la constructibilité</li>
                            <li>Sur photos, cadastre et documents publics</li>
                            <li>Rapport écrit en PDF</li>
                            <li>Maison ou petits logements</li>
                        </ul>
                        <OrderButton loc="et_card" />
                        <p className="et-card-small">Après la commande, envoyez vos documents à {SITE_EMAIL}.</p>
                    </aside>
                </div>
            </section>

            <section className="lp-section lp-section--cream">
                <div className="lp-inner">
                    <div className="lp-section-head">
                        <p className="lp-eyebrow">Les documents à nous envoyer</p>
                        <p className="lp-section-lead">L’analyse commence dès réception de votre dossier. Plus il est complet, plus l’étude est précise.</p>
                    </div>
                    <div className="et-docs">
                        <div>
                            <h2 className="et-h">Indispensables</h2>
                            <ul className="et-list et-list--in">
                                {DOCS_REQUIRED.map((t) => (
                                    <li key={t}><Check />{t}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="et-h">Utiles si vous les avez</h2>
                            <ul className="et-list et-list--in">
                                {DOCS_USEFUL.map((t) => (
                                    <li key={t}><Check />{t}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lp-section lp-section--white">
                <div className="lp-inner">
                    <p className="lp-eyebrow">Comment ça se passe</p>
                    <div className="lp-steps et-steps">
                        {STEPS.map((s, i) => (
                            <div className="lp-step" key={s.title}>
                                <span className="lp-step-num">{i + 1}</span>
                                <div>
                                    <h3>{s.title}</h3>
                                    <p>{s.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="lp-center-cta">
                        <OrderButton loc="et_steps" />
                    </div>
                </div>
            </section>

            <section className="lp-section lp-section--cream">
                <div className="lp-inner">
                    <div className="lp-section-head">
                        <p className="lp-eyebrow">Questions fréquentes</p>
                    </div>
                    <div className="lp-faq-grid">
                        {FAQ.map((f) => (
                            <details className="lp-faq-item" key={f.q}>
                                <summary>
                                    {f.q}
                                    <svg className="lp-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </summary>
                                <p className="lp-faq-answer">{f.a}</p>
                            </details>
                        ))}
                    </div>
                    <p className="et-legal">
                        Prestation réalisée à distance par Reservoir Architecture, agence d’architecture dirigée par Serge Ettore, architecte DPLG. L’étude porte sur les règles et documents disponibles à sa date de réalisation et ne vaut pas autorisation d’urbanisme. Droit de rétractation : vous disposez de 14 jours à compter de la commande ; si vous demandez que l’étude commence avant la fin de ce délai, vous restez redevable de la part déjà réalisée, et vous perdez ce droit une fois le rapport remis.
                    </p>
                </div>
            </section>
        </main>
    );
}
