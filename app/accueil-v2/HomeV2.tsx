import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Manrope } from "next/font/google";
import AfterLoad from "@/components/AfterLoad";
import type { ProjectData } from "@/types/project";
import {
    PROJECTS,
    VILLA_F_PROJECT,
    REGIE_DES_EAUX_PROJECT,
    PUYRICARD_PROJECT,
    SAMARITAINE_PROJECT,
} from "@/lib/projects";
import { ARCHIDVISOR_URL, categoryToPath, FACEBOOK_URL, HOUZZ_URL, INSTAGRAM_URL, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/seo";
import { FAQ_ITEMS, LOCAL_PROJECTS } from "@/lib/homeContent";
import V2Motion from "./V2Motion";
import V2Nav from "./V2Nav";
import HeroCategories from "./HeroCategories";
import "./v2.css";

// Accueil v2 (refonte façon template Teras), rendu par app/accueil-v2/page.tsx (noindex).
// Les textes reprennent ceux de l'accueil précédent pour garder le même référencement.

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--v2-font" });

function projectHref(project: ProjectData) {
    return `/${categoryToPath(project.category)}/${project.slug}`;
}

// Découpe un texte en lettres (mots insécables) pour les animations lettre à lettre.
function Letters({ text }: { text: string }) {
    let n = 0;
    return (
        <>
            {text.split(" ").map((word, w) => (
                <Fragment key={w}>
                    <span className="v2-w">
                        {Array.from(word).map((ch) => (
                            <span className="v2-l" key={n} style={{ ["--i" as string]: n++ }}>{ch}</span>
                        ))}
                    </span>{" "}
                </Fragment>
            ))}
        </>
    );
}

const pick = (...ids: string[]) => ids.map((id) => PROJECTS.find((p) => p.id === id)).filter((p): p is ProjectData => !!p);

const DOMAINS = [
    {
        label: "Villas et maisons", eyebrow: "Villas et maisons d'architecte", href: "/villas", category: "VILLAS",
        examples: pick("villa-t", "villa-f", "villa-c"),
    },
    {
        label: "Logements collectifs", eyebrow: "Logements collectifs et résidences", href: "/logements", category: "LOGEMENTS",
        examples: pick("samaritaine", "jacou", "vacquerolles"),
    },
    {
        label: "Commerces et showrooms", eyebrow: "Commerces et lieux de marque", href: "/commerces", category: "COMMERCES",
        examples: pick("puyricard", "wauquiez", "garons"),
    },
    {
        label: "Équipements publics", eyebrow: "Équipements publics", href: "/equipements", category: "ÉQUIPEMENTS",
        examples: pick("regie-des-eaux", "salon-de-provence", "vitrolles"),
    },
];

// Textes identiques à ceux de l'accueil en ligne (app/page.tsx), pour garder le même référencement.
const INTRO =
    "Implantée à Aix-en-Provence, Reservoir Architecture intervient dans le Pays d'Aix, les Bouches-du-Rhône et l'ensemble de la région PACA, auprès de particuliers, promoteurs, commerçants et collectivités. L'agence développe une architecture attentive au site, aux usages, au budget et à la durée de vie des bâtiments.";
const AGENCY_PARAGRAPHS = [
    "Le travail de l'agence couvre la conception de maisons et villas contemporaines, la rénovation, l'extension, les logements collectifs, les espaces commerciaux, les showrooms et les équipements publics. Cette diversité correspond à la réalité de l'agence : une pratique large, mais une même exigence de justesse constructive.",
    "Chaque projet part d'un contexte précis : orientation, lumière, structure existante, contraintes réglementaires, économie de moyens, parcours et matérialité. L'objectif est de produire une réponse claire, durable et lisible, sans réduire l'architecture à un style répétitif.",
    "L'agence est dirigée par Serge Ettore, architecte DPLG. Faire appel à un architecte à Aix-en-Provence, c'est s'assurer d'un interlocuteur unique et responsable, de la faisabilité au suivi de chantier, qui engage sa signature et son assurance sur la qualité du projet.",
    "Pour une mission d'architecte à Aix-en-Provence ou en région Provence-Alpes-Côte d'Azur, le premier échange permet de qualifier le programme, le niveau d'accompagnement attendu et les conditions de faisabilité du projet.",
];
// Données structurées FAQ (comme sur l'accueil précédent) pour les résultats enrichis Google
const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const YEAR = new Date().getFullYear();
const FIGURES = [
    { value: String(PROJECTS.length), label: "Projets" },
    { value: String(YEAR - 2013), label: "Ans d'agence" },
    { value: String(YEAR - 1999), label: "Ans DPLG" },
    { value: "4", label: "Domaines" },
];

export default function HomeV2() {
    // Chiffres clés sous la présentation, en tuiles
    const figures = (
        <dl className="v2-figures v2-figs v2-figs-2 v2-figs-f">
            {FIGURES.map((f) => (
                <div key={f.label} className="v2-fade" data-reveal>
                    <dd>{f.value}</dd>
                    <dt>{f.label}</dt>
                </div>
            ))}
        </dl>
    );
    const count = (category: string) => PROJECTS.filter((p) => p.category === category).length;
    return (
        <div className={`v2 ${manrope.variable}`}>
            <V2Motion />
            <V2Nav />

            {/* Hero */}
            <section className="v2-hero">
                <div className="v2-hero-top">
                    <div className="v2-wordmark-wrap">
                        <Image
                            src="/images/ui/brand/wordmark.svg"
                            alt="Reservoir"
                            width={930}
                            height={151}
                            priority
                            className="v2-wordmark-img"
                        />
                        <span className="v2-wordmark-sub">Architecture</span>
                    </div>
                </div>
                <HeroCategories
                    items={[
                        { label: "Villas", href: "/villas", count: count("VILLAS"), img: VILLA_F_PROJECT.heroImages[0], alt: "Villa F, villa contemporaine avec piscine" },
                        { label: "Logements", href: "/logements", count: count("LOGEMENTS"), img: SAMARITAINE_PROJECT.heroImages[0], alt: "Résidence Samaritaine, logements collectifs" },
                        { label: "Commerces", href: "/commerces", count: count("COMMERCES"), img: PUYRICARD_PROJECT.heroImages[0], alt: "Esprit Bastide, commerces à Puyricard" },
                        { label: "Équipements", href: "/equipements", count: count("ÉQUIPEMENTS"), img: REGIE_DES_EAUX_PROJECT.heroImages[0], alt: "Régie des eaux d'Aix-en-Provence" },
                    ]}
                />
                <div className="v2-hero-below">
                    <div className="v2-fade" data-reveal>
                        <h1 className="v2-h2">Architecte à <span className="v2-nowrap">Aix-en-Provence</span></h1>
                        <p className="v2-small v2-hero-intro">
                            Reservoir Architecture, agence d&apos;architecture DPLG fondée en 2013, conçoit et accompagne villas contemporaines, logements collectifs, commerces et équipements publics depuis Aix-en-Provence.
                        </p>
                        {figures}
                    </div>
                    <p className="v2-statement" data-scrub aria-label={INTRO}>
                        <span aria-hidden="true"><Letters text={INTRO} /></span>
                    </p>
                </div>
            </section>

            {/* Domaines : ce que fait l'agence, avec des exemples et le lien vers chaque catégorie */}
            <section className="v2-section">
                <div className="v2-stack">
                    <h2 className="v2-h2 v2-fade" data-reveal>Ce que nous faisons</h2>
                    <p className="v2-small v2-fade" data-reveal>
                        Quatre domaines, une même méthode : de la faisabilité au suivi de chantier, un interlocuteur unique et responsable.
                    </p>
                </div>
                <div className="v2-domains">
                    {DOMAINS.map((d, i) => (
                        <article className="v2-domain v2-fade" data-reveal key={d.href}>
                            <div className="v2-domain-text">
                                <p className="v2-list-num">{String(i + 1).padStart(2, "0")}</p>
                                <div>
                                    <p className="v2-tag">{d.eyebrow}</p>
                                    <h3 className="v2-h3">{d.label}</h3>
                                </div>
                                <p className="v2-facts-line">{count(d.category)} projets</p>
                            </div>
                            <ul className="v2-domain-examples">
                                {d.examples.map((p) => (
                                    <li key={p.id}>
                                        <Link href={projectHref(p)}>
                                            <span className="v2-domain-photo">
                                                <AfterLoad>
                                                    <Image src={p.heroImages[0]} alt={`${p.title}, ${d.label.toLowerCase()} par Reservoir Architecture`} fill sizes="(max-width: 768px) 45vw, 18vw" />
                                                </AfterLoad>
                                            </span>
                                            <span className="v2-domain-caption">{p.title}</span>
                                            <span className="v2-domain-place">{p.subtitle}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link href={d.href} className="v2-btn v2-domain-btn">Voir toutes les réalisations</Link>
                        </article>
                    ))}
                </div>
            </section>

            {/* L'architecte et les avis Archidvisor (mêmes contenus que les landing pages) */}
            <section className="v2-section">
                <div className="v2-stack v2-fade" data-reveal>
                    <h2 className="v2-h2">L&apos;architecte</h2>
                </div>
                <div className="v2-architect">
                    <div className="v2-architect-head v2-fade" data-reveal>
                        <div className="v2-architect-photo">
                            <AfterLoad>
                                <Image
                                    src="/images/serge-ettore.webp"
                                    alt="Serge Ettore, architecte DPLG et fondateur de Reservoir Architecture, devant une bastide en Provence"
                                    fill
                                    sizes="(max-width: 768px) 120px, 220px"
                                />
                            </AfterLoad>
                        </div>
                        <div>
                            <p className="v2-h3 v2-architect-name">Serge Ettore</p>
                            <p className="v2-tag">Architecte DPLG, fondateur</p>
                        </div>
                    </div>
                    <div className="v2-architect-text v2-fade" data-reveal>
                        <p className="v2-small">
                            L&apos;agence est dirigée par Serge Ettore, architecte DPLG depuis 1999. D&apos;une double culture, architecturale et scénographique (projets pour la maison Cacharel, workshops internationaux), il aborde chaque projet comme une situation unique : un site, un programme, un budget, des usages réels. L&apos;objectif n&apos;est pas la signature, mais la justesse.
                        </p>
                        <div className="v2-reviews">
                            <div className="v2-reviews-head">
                                <Image src="/images/ui/archidvisor.webp" alt="Archidvisor" width={797} height={165} className="v2-reviews-logo" />
                                <span className="v2-reviews-score">5,0<span>/5</span></span>
                                <span className="v2-stars" aria-label="5 étoiles sur 5">★★★★★</span>
                                <span className="v2-reviews-count">8 avis vérifiés</span>
                            </div>
                            <ul>
                                <li><blockquote>« Très professionnel et force de proposition. Très bon contact. »</blockquote><cite>Arnaud M.</cite><span className="v2-stars" aria-label="5 étoiles sur 5">★★★★★</span></li>
                                <li><blockquote>« Très disponible, rapide, de bons conseils. »</blockquote><cite>Celsio C.</cite><span className="v2-stars" aria-label="5 étoiles sur 5">★★★★★</span></li>
                                <li><blockquote>« Il a été très rapide et précis. Merci pour votre professionnalisme et votre compétence. »</blockquote><cite>Hamid Y.</cite><span className="v2-stars" aria-label="5 étoiles sur 5">★★★★★</span></li>
                                <li><blockquote>« Bien à l&apos;écoute, a parfaitement compris ce que j&apos;attendais. »</blockquote><cite>Axel A.</cite><span className="v2-stars" aria-label="5 étoiles sur 5">★★★★★</span></li>
                            </ul>
                            <a href={ARCHIDVISOR_URL} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-ghost">Voir tous les avis</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Preuve locale (reprise de l'accueil précédent) : projets d'Aix et alentours + liens vers les pages Aix */}
            <section className="v2-section">
                <div className="v2-stack v2-fade" data-reveal>
                    <h2 className="v2-h2">Nos réalisations à Aix-en-Provence et alentours</h2>
                    <p className="v2-small">
                        Maison de ville, commerces, équipements publics : l&apos;agence conçoit des projets à Aix-en-Provence, Puyricard, Bouc-Bel-Air, Vitrolles et Salon-de-Provence, pour des particuliers comme pour les communes.
                    </p>
                </div>
                <ul className="v2-local">
                    {LOCAL_PROJECTS.map(({ project, place, summary }) => (
                        <li key={project.id} className="v2-fade" data-reveal>
                            <Link href={projectHref(project)}>
                                <span className="v2-domain-photo">
                                    <AfterLoad>
                                        <Image src={project.heroImages[0]} alt={`${summary}, ${project.title} à ${place}`} fill sizes="(max-width: 768px) 50vw, 33vw" />
                                    </AfterLoad>
                                </span>
                                <span className="v2-domain-place">{place}</span>
                                <h3 className="v2-domain-caption">{project.title}</h3>
                                <span className="v2-small">{summary}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <nav className="v2-local-links" aria-label="Votre projet à Aix-en-Provence">
                    <span className="v2-tag">Votre projet à Aix-en-Provence :</span>
                    <Link href="/villas-aix-en-provence">Architecte villa</Link>
                    <Link href="/commerces-aix-en-provence">Architecte commerce</Link>
                    <Link href="/logements-aix-en-provence">Architecte logements</Link>
                    <Link href="/equipements-aix-en-provence">Architecte équipements publics</Link>
                </nav>
            </section>

            {/* FAQ : mêmes questions que l'accueil actuel */}
            <section className="v2-section">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
                <div className="v2-row">
                    <h2 className="v2-h2 v2-fade" data-reveal>Architecte à <span className="v2-nowrap">Aix-en-Provence</span> : questions fréquentes</h2>
                    <div className="v2-faq v2-fade" data-reveal>
                        {FAQ_ITEMS.map((f) => (
                            <details key={f.q}>
                                <summary>{f.q}</summary>
                                <p className="v2-small">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Texte de l'agence (repris de l'accueil actuel), placé en fin de page */}
            <section className="v2-section v2-about v2-about-end">
                <div className="v2-about-text v2-fade" data-reveal>
                    {AGENCY_PARAGRAPHS.map((p) => (
                        <p className="v2-small" key={p.slice(0, 24)}>{p}</p>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="v2-cta">
                <div className="v2-cta-content">
                    <p className="v2-label v2-fade" data-reveal>Nous contacter</p>
                    <div className="v2-fade" data-reveal>
                        <p className="v2-cta-title">Parlons du projet qui conviendra à votre terrain.</p>
                        <div className="v2-cta-actions">
                            <a href={`tel:${SITE_PHONE}`} className="v2-btn">Appeler l&apos;agence</a>
                            <Link href="/contact" className="v2-btn v2-btn-ghost">Écrire un message</Link>
                        </div>
                    </div>
                </div>
                <div className="v2-cta-photo">
                    <AfterLoad>
                        <Image src="/images/projects/1-villas/villa S/villaS_1.jpg" alt="Villa S, maison entre les pins à Langlade" fill sizes="100vw" data-parallax />
                    </AfterLoad>
                </div>
            </section>

            {/* Pied de page */}
            <footer className="v2-footer">
                <div className="v2-footer-top">
                    <Image src="/images/ui/logo-navbar.svg" alt="Reservoir Architecture" width={335} height={74} className="v2-footer-logo" />
                    <div className="v2-footer-col">
                        <p className="v2-label">Découvrir</p>
                        <Link href="/villas">Villas</Link>
                        <Link href="/logements">Logements</Link>
                        <Link href="/commerces">Commerces</Link>
                        <Link href="/equipements">Équipements</Link>
                    </div>
                    <div className="v2-footer-col">
                        <p className="v2-label">Aix-en-Provence</p>
                        <Link href="/villas-aix-en-provence">Architecte villa</Link>
                        <Link href="/commerces-aix-en-provence">Architecte commerce</Link>
                        <Link href="/logements-aix-en-provence">Architecte logements</Link>
                        <Link href="/equipements-aix-en-provence">Équipements publics</Link>
                    </div>
                    <div className="v2-footer-col">
                        <p className="v2-label">Contact</p>
                        <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>
                        <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href={HOUZZ_URL} target="_blank" rel="noopener noreferrer">Houzz</a>
                    </div>
                </div>
                <p className="v2-footer-copy">© {new Date().getFullYear()} Reservoir Architecture · Architecte DPLG à Aix-en-Provence</p>
            </footer>
        </div>
    );
}
