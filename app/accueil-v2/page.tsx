import { Fragment } from "react";
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
import { categoryToPath, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/seo";
import V2Motion from "./V2Motion";
import V2Nav from "./V2Nav";
import "./v2.css";

// Version de travail de l'accueil, calquée sur la structure du template Teras
// (hero, à propos, projets empilés, domaines, citation, contact, pied de page).
// Hors index tant qu'Emeric ne l'a pas validée : l'accueil en ligne reste app/page.tsx.
export const metadata: Metadata = {
    title: { absolute: "Accueil v2 | Reservoir Architecture" },
    robots: { index: false, follow: false },
};

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--v2-font" });

function sheet(project: ProjectData, label: string): string | null {
    const value = project.techSheet?.find((t) => t.label.toLowerCase().startsWith(label.toLowerCase()))?.value;
    if (!value || value === "N/A") return null;
    return value.replace(/\bm2\b/g, "m²");
}

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
    { label: "Villas et maisons", href: "/villas", category: "VILLAS" },
    { label: "Logements collectifs", href: "/logements", category: "LOGEMENTS" },
    { label: "Commerces et showrooms", href: "/commerces", category: "COMMERCES" },
    { label: "Équipements publics", href: "/equipements", category: "ÉQUIPEMENTS" },
];

const STATEMENT =
    "Reservoir Architecture conçoit et suit des projets depuis Aix-en-Provence, du particulier à la collectivité. Une pratique large, une seule exigence : la justesse plutôt que la signature.";

export default function AccueilV2() {
    const count = (category: string) => PROJECTS.filter((p) => p.category === category).length;
    return (
        <div className={`v2 ${manrope.variable}`}>
            <V2Motion />
            <V2Nav />

            {/* Hero */}
            <section className="v2-hero">
                <div className="v2-hero-top">
                    <p className="v2-wordmark" aria-label="Reservoir" data-rise>
                        {Array.from("RESERVOIR").map((ch, i) => (
                            <span className="v2-rise" key={i}>
                                <span style={{ ["--i" as string]: i }}>{ch}</span>
                            </span>
                        ))}
                    </p>
                    <div className="v2-hero-side v2-fade" data-reveal>
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
                        data-parallax
                    />
                </div>
            </section>

            {/* À propos */}
            <section className="v2-section v2-about">
                <div className="v2-row">
                    <h2 className="v2-h2 v2-fade" data-reveal>L&apos;agence</h2>
                    <p className="v2-statement" data-scrub aria-label={STATEMENT}>
                        <span aria-hidden="true"><Letters text={STATEMENT} /></span>
                    </p>
                </div>
                <div className="v2-about-body">
                    <p className="v2-small v2-fade" data-reveal>
                        L&apos;agence est dirigée par Serge Ettore, architecte DPLG depuis 1999, ancien responsable des projets d&apos;architecture de Cacharel. Chaque projet part d&apos;un contexte précis : orientation, lumière, structure existante, règles d&apos;urbanisme, économie de moyens.
                    </p>
                    <div className="v2-about-photo v2-fade" data-reveal>
                        <AfterLoad>
                            <Image
                                src="/images/projects/1-villas/villa T/villaT_1.jpg"
                                alt="Villa T, maison de ville rénovée à Aix-en-Provence"
                                fill
                                sizes="(max-width: 768px) 70vw, 24vw"
                            />
                        </AfterLoad>
                    </div>
                </div>
            </section>

            {/* Projets empilés */}
            <section className="v2-projects" aria-label="Projets">
                {FEATURED.map(({ project, img, kind, text }, i) => {
                    const facts = [sheet(project, "Lieu"), sheet(project, "Surface"), sheet(project, "Année")].filter(Boolean);
                    return (
                        <article className={`v2-card v2-card-${i % 2 ? "dark" : "light"}`} key={project.id}>
                            <div className="v2-card-inner">
                                <div className="v2-card-info">
                                    <div>
                                        <h3 className="v2-h3">{project.title}</h3>
                                        <p className="v2-tag">{kind}</p>
                                    </div>
                                    <div className="v2-card-bottom">
                                        <div className="v2-card-text">
                                            <p className="v2-small">{text}</p>
                                            {facts.length > 0 && <p className="v2-facts-line">{facts.join(" · ")}</p>}
                                        </div>
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

            {/* Domaines */}
            <section className="v2-section">
                <div className="v2-row">
                    <h2 className="v2-h2 v2-fade" data-reveal>Domaines</h2>
                    <p className="v2-small v2-fade" data-reveal>
                        De la première esquisse à la réception du chantier, conception, permis et suivi des travaux forment un seul et même travail, avec un seul interlocuteur.
                    </p>
                </div>
                <ol className="v2-list">
                    {DOMAINS.map((d, i) => (
                        <li key={d.href} className="v2-fade" data-reveal>
                            <Link href={d.href} className="v2-list-row">
                                <span className="v2-list-num">{String(i + 1).padStart(2, "0")}</span>
                                <span className="v2-list-label">{d.label}</span>
                                <span className="v2-list-count">{count(d.category)} projets</span>
                            </Link>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Citation */}
            <section className="v2-section v2-quote">
                <div className="v2-quote-head v2-fade" data-reveal>
                    <div className="v2-quote-portrait">
                        <AfterLoad>
                            <Image src="/images/serge-ettore.webp" alt="Serge Ettore" fill sizes="64px" />
                        </AfterLoad>
                    </div>
                    <div>
                        <p className="v2-label">Serge Ettore</p>
                        <p className="v2-tag">Architecte DPLG, fondateur</p>
                    </div>
                </div>
                <blockquote className="v2-quote-text v2-fade" data-reveal>
                    « L&apos;objectif n&apos;est pas la signature. Il est la justesse. »
                </blockquote>
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
                    <Image src="/images/ui/icon_dark.svg" alt="Reservoir Architecture" width={64} height={64} className="v2-footer-icon" />
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
                        <a href="https://www.instagram.com/reservoirarchitecture/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.facebook.com/reservoir.architecture/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                </div>
                <div className="v2-footer-photo">
                    <AfterLoad>
                        <Image src="/images/projects/1-villas/villa C/villaC_2.jpg" alt="" fill sizes="100vw" />
                    </AfterLoad>
                    <p className="v2-footer-copy">© {new Date().getFullYear()} Reservoir Architecture · Architecte DPLG à Aix-en-Provence</p>
                </div>
            </footer>
        </div>
    );
}
