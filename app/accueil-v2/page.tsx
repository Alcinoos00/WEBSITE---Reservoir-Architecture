import type { Metadata } from "next";
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
import { FAQ_ITEMS, LOCAL_PROJECTS } from "@/lib/homeContent";
import { categoryToPath, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/seo";
import "./v2.css";

// Version de travail de l'accueil, inspirée du template Teras. Hors index tant
// qu'Emeric ne l'a pas validée : l'accueil en ligne reste app/page.tsx.
export const metadata: Metadata = {
    title: { absolute: "Accueil v2 | Reservoir Architecture" },
    robots: { index: false, follow: false },
};

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--v2-font" });

function sheet(project: ProjectData, label: string): string | null {
    const value = project.techSheet?.find((t) => t.label.toLowerCase().startsWith(label.toLowerCase()))?.value;
    if (!value || value === "N/A") return null;
    return value.replace(/m2/g, "m²");
}

function projectHref(project: ProjectData) {
    return `/${categoryToPath(project.category)}/${project.slug}`;
}

const FEATURED: { project: ProjectData; img: string; kind: string; text: string }[] = [
    {
        project: VILLA_F_PROJECT,
        img: VILLA_F_PROJECT.heroImages[1],
        kind: "Villa contemporaine",
        text: "Une villa organisée autour d'une cour-piscine. Béton clair, bois brûlé, lignes nettes : un haut de gamme sans ostentation.",
    },
    {
        project: REGIE_DES_EAUX_PROJECT,
        img: REGIE_DES_EAUX_PROJECT.heroImages[0],
        kind: "Équipement public",
        text: "D'anciens ateliers de la Régie des eaux d'Aix-en-Provence restructurés, agrandis et transformés en bureaux.",
    },
    {
        project: PUYRICARD_PROJECT,
        img: PUYRICARD_PROJECT.heroImages[0],
        kind: "Commerces et services",
        text: "Un ensemble de commerces autour d'un patio d'oliviers, qui réinterprète l'esprit des bastides à Puyricard.",
    },
    {
        project: SAMARITAINE_PROJECT,
        img: SAMARITAINE_PROJECT.heroImages[0],
        kind: "Logements collectifs",
        text: "Une résidence de 30 logements organisée autour d'un jardin patio. Béton teinté, loggias et claustras en bois qui filtrent la lumière.",
    },
];

const DOMAINS = [
    { label: "Villas et maisons", href: "/villas", category: "VILLAS", text: "Construction neuve, rénovation, extension." },
    { label: "Logements collectifs", href: "/logements", category: "LOGEMENTS", text: "Résidences et petits collectifs pour promoteurs." },
    { label: "Commerces", href: "/commerces", category: "COMMERCES", text: "Boutiques, showrooms, ensembles commerciaux." },
    { label: "Équipements publics", href: "/equipements", category: "ÉQUIPEMENTS", text: "Maîtrise d'œuvre pour les collectivités (loi MOP)." },
];

export default function AccueilV2() {
    const count = (category: string) => PROJECTS.filter((p) => p.category === category).length;
    return (
        <div className={`v2 ${manrope.variable}`}>
            {/* 1. Hero : nom en très grand, accroche à droite, photo pleine largeur */}
            <section className="v2-hero">
                <div className="v2-hero-top">
                    <p className="v2-wordmark" aria-hidden="true">Reservoir</p>
                    <div className="v2-hero-side">
                        <h1 className="v2-label">Architecte à Aix-en-Provence</h1>
                        <p className="v2-small">
                            Agence d&apos;architecture DPLG fondée en 2013. Villas, logements, commerces et équipements publics, pensés pour leur site, leurs usages et leur budget.
                        </p>
                    </div>
                </div>
                <div className="v2-hero-photo">
                    <Image
                        src={VILLA_F_PROJECT.heroImages[0]}
                        alt="Villa F, villa contemporaine avec piscine conçue par Reservoir Architecture"
                        fill
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 768px) 100vw, calc(100vw - 48px)"
                    />
                    <p className="v2-cartouche">Villa F · Caissargues (30) · 401 m² · 2015</p>
                </div>
            </section>

            {/* 2. L'agence : titre à gauche, manifeste à droite, photo centrée */}
            <section className="v2-section v2-about">
                <div className="v2-row">
                    <h2 className="v2-h2">L&apos;agence</h2>
                    <p className="v2-statement">
                        Reservoir Architecture conçoit et suit des projets depuis Aix-en-Provence, du particulier à la collectivité. Une pratique large, une seule exigence : la justesse plutôt que la signature.
                    </p>
                </div>
                <div className="v2-about-body">
                    <div className="v2-about-text">
                        <p className="v2-small">
                            L&apos;agence est dirigée par Serge Ettore, architecte DPLG depuis 1999, ancien responsable des projets d&apos;architecture de Cacharel. Chaque projet part d&apos;un contexte précis : orientation, lumière, structure existante, règles d&apos;urbanisme, économie de moyens.
                        </p>
                        <dl className="v2-facts">
                            <div><dt>Fondée en</dt><dd>2013</dd></div>
                            <div><dt>Architecte DPLG depuis</dt><dd>1999</dd></div>
                            <div><dt>Projets présentés</dt><dd>{PROJECTS.length}</dd></div>
                        </dl>
                    </div>
                    <div className="v2-about-photo">
                        <AfterLoad>
                            <Image
                                src="/images/projects/1-villas/villa T/villaT_1.jpg"
                                alt="Villa T, maison de ville rénovée à Aix-en-Provence"
                                fill
                                sizes="(max-width: 768px) 100vw, 34vw"
                            />
                        </AfterLoad>
                    </div>
                </div>
            </section>

            {/* 3. Projets : cartes qui s'empilent au défilement */}
            <section className="v2-projects" aria-labelledby="v2-projects-title">
                <h2 id="v2-projects-title" className="v2-h2 v2-projects-title">Projets</h2>
                {FEATURED.map(({ project, img, kind, text }, i) => {
                    const facts = [sheet(project, "Lieu"), sheet(project, "Surface"), sheet(project, "Année")].filter(Boolean);
                    return (
                        <article className={`v2-card v2-card-${i % 2 ? "dark" : "light"}`} key={project.id}>
                            <div className="v2-card-inner">
                                <div className="v2-card-info">
                                    <div>
                                        <h3 className="v2-h3">{project.title}</h3>
                                        <p className="v2-label v2-muted">{kind}</p>
                                    </div>
                                    <div className="v2-card-bottom">
                                        <p className="v2-small">{text}</p>
                                        {facts.length > 0 && <p className="v2-cartouche v2-cartouche-inline v2-nocaps">{facts.join(" · ")}</p>}
                                        <Link href={projectHref(project)} className="v2-btn">Voir le projet</Link>
                                    </div>
                                </div>
                                <div className="v2-card-photo">
                                    <AfterLoad>
                                        <Image src={img} alt={`${project.title}, ${kind.toLowerCase()} par Reservoir Architecture`} fill sizes="(max-width: 768px) 100vw, 50vw" />
                                    </AfterLoad>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </section>

            {/* 4. Domaines : liste numérotée à filets */}
            <section className="v2-section">
                <div className="v2-row">
                    <h2 className="v2-h2">Domaines</h2>
                    <p className="v2-small v2-row-text">
                        De la faisabilité au suivi de chantier, un seul interlocuteur responsable, qui engage sa signature et son assurance sur la qualité du projet.
                    </p>
                </div>
                <ol className="v2-list">
                    {DOMAINS.map((d, i) => (
                        <li key={d.href}>
                            <Link href={d.href} className="v2-list-row">
                                <span className="v2-list-num">{String(i + 1).padStart(2, "0")}</span>
                                <span className="v2-list-label">{d.label}</span>
                                <span className="v2-list-text">{d.text}</span>
                                <span className="v2-list-count">{count(d.category)} projets</span>
                            </Link>
                        </li>
                    ))}
                </ol>
            </section>

            {/* 5. Réalisations locales */}
            <section className="v2-section">
                <div className="v2-row">
                    <h2 className="v2-h2">À Aix et alentours</h2>
                    <p className="v2-small v2-row-text">
                        Maison de ville, commerces, équipements publics : des projets à Aix-en-Provence, Puyricard, Bouc-Bel-Air, Vitrolles et Salon-de-Provence.
                    </p>
                </div>
                <ul className="v2-local">
                    {LOCAL_PROJECTS.map(({ project, place, summary }) => (
                        <li key={project.id}>
                            <Link href={projectHref(project)} className="v2-local-item">
                                <div className="v2-local-photo">
                                    <AfterLoad>
                                        <Image src={project.heroImages[0]} alt={`${project.title} à ${place}`} fill sizes="(max-width: 768px) 50vw, 16vw" />
                                    </AfterLoad>
                                </div>
                                <p className="v2-label">{project.title}</p>
                                <p className="v2-small v2-muted">{place} · {summary}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            {/* 6. Citation */}
            <section className="v2-section v2-quote">
                <div className="v2-quote-portrait">
                    <AfterLoad>
                        <Image src="/images/serge-ettore.webp" alt="Serge Ettore, architecte DPLG" fill sizes="120px" />
                    </AfterLoad>
                </div>
                <blockquote>
                    <p className="v2-quote-text">« L&apos;objectif n&apos;est pas la signature. Il est la justesse. »</p>
                    <footer className="v2-label v2-muted">Serge Ettore · Architecte DPLG</footer>
                </blockquote>
            </section>

            {/* 7. FAQ */}
            <section className="v2-section">
                <div className="v2-row v2-row-top">
                    <h2 className="v2-h2">Questions fréquentes</h2>
                    <div className="v2-faq">
                        {FAQ_ITEMS.map((f) => (
                            <details key={f.q}>
                                <summary>{f.q}</summary>
                                <p className="v2-small">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Appel à l'action sur photo */}
            <section className="v2-cta">
                <div className="v2-cta-photo">
                    <AfterLoad>
                        <Image src="/images/projects/1-villas/villa S/villaS_1.jpg" alt="Villa S, maison entre les pins" fill sizes="100vw" />
                    </AfterLoad>
                </div>
                <div className="v2-cta-content">
                    <p className="v2-label">Parlons de votre projet</p>
                    <div>
                        <p className="v2-cta-title">Un terrain, un programme, un budget : commençons par un échange.</p>
                        <div className="v2-cta-actions">
                            <a href={`tel:${SITE_PHONE}`} className="v2-btn">{SITE_PHONE_DISPLAY}</a>
                            <a href={`mailto:${SITE_EMAIL}`} className="v2-btn v2-btn-ghost">{SITE_EMAIL}</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
