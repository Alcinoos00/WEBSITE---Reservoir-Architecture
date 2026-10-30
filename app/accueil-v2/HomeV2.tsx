import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import AfterLoad from "@/components/AfterLoad";
import type { ProjectData } from "@/types/project";
import {
    PROJECTS,
    VILLA_F_PROJECT,
    REGIE_DES_EAUX_PROJECT,
    PUYRICARD_PROJECT,
    SAMARITAINE_PROJECT,
} from "@/lib/projects";
import { FAQ_ITEMS, LOCAL_PROJECTS } from "@/lib/homeContent";
import { v2, v2ProjectHref } from "./v2Links";
import V2Reviews from "./V2Reviews";
import V2Cta from "./V2Cta";
import HeroCategories from "./HeroCategories";
import V2AboutFold from "./V2AboutFold";

// Accueil v2 (refonte façon template Teras), rendu par app/accueil-v2/page.tsx (noindex).
// Les textes reprennent ceux de l'accueil précédent pour garder le même référencement.


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
        label: "Villas et maisons", eyebrow: "Villas et maisons d'architecte", href: v2("/villas"), category: "VILLAS",
        examples: pick("villa-t", "villa-f", "villa-c"),
    },
    {
        label: "Logements collectifs", eyebrow: "Logements collectifs et résidences", href: v2("/logements"), category: "LOGEMENTS",
        examples: pick("samaritaine", "jacou", "vacquerolles"),
    },
    {
        label: "Commerces et showrooms", eyebrow: "Commerces et lieux de marque", href: v2("/commerces"), category: "COMMERCES",
        examples: pick("puyricard", "wauquiez", "garons"),
    },
    {
        label: "Équipements publics", eyebrow: "Équipements publics", href: v2("/equipements"), category: "ÉQUIPEMENTS",
        examples: pick("regie-des-eaux", "salon-de-provence", "vitrolles"),
        // Téléphone uniquement : 4e photo du carrousel (la section « réalisations autour d'Aix » y est masquée)
        mobileExtra: pick("gendarmerie"),
    },
];

// Textes identiques à ceux de l'accueil en ligne (app/page.tsx), pour garder le même référencement.
const INTRO =
    "Implantée à Aix-en-Provence, Reservoir Architecture intervient dans le Pays d'Aix, les Bouches-du-Rhône et l'ensemble de la région PACA, ainsi qu'en Occitanie (Gard, Hérault), auprès de particuliers, promoteurs, commerçants et collectivités. L'agence développe une architecture attentive au site, aux usages, au budget et à la durée de vie des bâtiments.";
const AGENCY_PARAGRAPHS = [
    "Le travail de l'agence couvre la conception de maisons et villas contemporaines, la rénovation, l'extension, les logements collectifs, les espaces commerciaux, les showrooms et les équipements publics. Cette diversité correspond à la réalité de l'agence : une pratique large, mais une même exigence de justesse constructive.",
    "Chaque projet part d'un contexte précis : orientation, lumière, structure existante, contraintes réglementaires, économie de moyens, parcours et matérialité. L'objectif est de produire une réponse claire, durable et lisible, sans réduire l'architecture à un style répétitif.",
    "L'agence est dirigée par Serge Ettore, architecte DPLG. Faire appel à un architecte à Aix-en-Provence, c'est s'assurer d'un interlocuteur unique et responsable, de la faisabilité au suivi de chantier, qui engage sa signature et son assurance sur la qualité du projet.",
    "Pour une mission d'architecte à Aix-en-Provence, en région Provence-Alpes-Côte d'Azur ou en Occitanie, le premier échange permet de qualifier le programme, le niveau d'accompagnement attendu et les conditions de faisabilité du projet.",
];
// Données structurées FAQ (comme sur l'accueil précédent) pour les résultats enrichis Google
const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
export default function HomeV2() {
    return (
        <div className="v2-home">

            {/* Hero */}
            <section className="v2-hero">
                <div className="v2-hero-top">
                    <div className="v2-wordmark-wrap">
                        <Image
                            src="/images/ui/brand/wordmark-boxed.svg"
                            alt="Reservoir"
                            width={1247}
                            height={176}
                            priority
                            className="v2-wordmark-img"
                        />
                        <span className="v2-wordmark-sub">Architecture</span>
                    </div>
                </div>
                <HeroCategories
                    items={[
                        { label: "Villas", href: v2("/villas"), img: VILLA_F_PROJECT.heroImages[0], alt: "Villa F, villa contemporaine avec piscine" },
                        { label: "Logements", href: v2("/logements"), img: SAMARITAINE_PROJECT.heroImages[0], alt: "Résidence Samaritaine, logements collectifs" },
                        { label: "Commerces", href: v2("/commerces"), img: PUYRICARD_PROJECT.heroImages[0], alt: "Esprit Bastide, commerces à Puyricard" },
                        { label: "Équipements", href: v2("/equipements"), img: REGIE_DES_EAUX_PROJECT.heroImages[0], alt: "Régie des eaux d'Aix-en-Provence" },
                    ]}
                />
                <div className="v2-hero-below">
                    <div className="v2-fade" data-reveal>
                        <h1 className="v2-h2">Architecte à <span className="v2-nowrap">Aix-en-Provence</span></h1>
                        <p className="v2-small v2-hero-intro">
                            Reservoir Architecture, agence d&apos;architecture DPLG fondée en 2013, conçoit et accompagne villas contemporaines, logements collectifs, commerces et équipements publics depuis Aix-en-Provence.
                        </p>
                    </div>
                    <p className="v2-statement v2-desk-only" data-scrub aria-label={INTRO}>
                        <span aria-hidden="true"><Letters text={INTRO} /></span>
                    </p>
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
                        <V2Reviews />
                    </div>
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
                            </div>
                            <ul className="v2-domain-examples">
                                {[...d.examples, ...(d.mobileExtra ?? [])].map((p) => (
                                    <li key={p.id} className={d.mobileExtra?.includes(p) ? "v2-mob-only" : undefined}>
                                        <Link href={v2ProjectHref(p)}>
                                            <span className="v2-domain-photo">
                                                <AfterLoad>
                                                    <Image src={p.heroImages[0]} alt={`${p.title}, ${d.label.toLowerCase()} par Reservoir Architecture`} fill sizes="(max-width: 768px) 82vw, 18vw" />
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
                {/* Téléphone uniquement : les liens vers les pages Aix, repris de la section masquée plus bas */}
                <nav className="v2-local-links v2-mob-only" aria-label="Votre projet à Aix-en-Provence (mobile)">
                    <span className="v2-tag">Votre projet à Aix-en-Provence :</span>
                    <Link href={v2("/villas-aix-en-provence")}>Architecte villa</Link>
                    <Link href={v2("/commerces-aix-en-provence")}>Architecte commerce</Link>
                    <Link href={v2("/logements-aix-en-provence")}>Architecte logements</Link>
                    <Link href={v2("/equipements-aix-en-provence")}>Architecte équipements publics</Link>
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

            {/* Contact juste après la FAQ, même bloc que le bas de page avec une autre photo */}
            {/* Sur téléphone, un seul bloc contact : celui du bas de page */}
            <div className="v2-desk-only">
                <V2Cta img={VILLA_F_PROJECT.heroImages[1]} alt="Villa F, villa contemporaine à Aix-en-Provence" />
            </div>

            {/* Preuve locale (reprise de l'accueil précédent) : projets d'Aix et alentours + liens vers les pages Aix.
                Ordinateur uniquement : sur téléphone, ses projets sont dans les carrousels et ses liens sous les domaines. */}
            <section className="v2-section v2-desk-only">
                <div className="v2-stack v2-fade" data-reveal>
                    <h2 className="v2-h2">Nos réalisations à Aix-en-Provence et alentours</h2>
                    <p className="v2-small">
                        Maison de ville, commerces, équipements publics : l&apos;agence conçoit des projets à Aix-en-Provence, Puyricard, Bouc-Bel-Air, Vitrolles et Salon-de-Provence, pour des particuliers comme pour les communes.
                    </p>
                </div>
                <ul className="v2-local">
                    {LOCAL_PROJECTS.map(({ project, place, summary }) => (
                        <li key={project.id} className="v2-fade" data-reveal>
                            <Link href={v2ProjectHref(project)}>
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
                    <Link href={v2("/villas-aix-en-provence")}>Architecte villa</Link>
                    <Link href={v2("/commerces-aix-en-provence")}>Architecte commerce</Link>
                    <Link href={v2("/logements-aix-en-provence")}>Architecte logements</Link>
                    <Link href={v2("/equipements-aix-en-provence")}>Architecte équipements publics</Link>
                </nav>
            </section>

            {/* Texte de l'agence (repris de l'accueil actuel), placé en fin de page */}
            <section className="v2-section v2-about v2-about-end">
                {/* Sur téléphone, replié derrière « À propos de l'agence » (le texte reste dans la page) ;
                    sur ordinateur, toujours ouvert comme avant. */}
                <V2AboutFold summary="À propos de l'agence">
                    <div className="v2-about-text v2-fade" data-reveal>
                        <p className="v2-small v2-mob-only">{INTRO}</p>
                        {AGENCY_PARAGRAPHS.map((p) => (
                            <p className="v2-small" key={p.slice(0, 24)}>{p}</p>
                        ))}
                    </div>
                </V2AboutFold>
            </section>

            <V2Cta />

        </div>
    );
}
