import Image from "next/image";
import Link from "next/link";
import AfterLoad from "@/components/AfterLoad";
import { noBreakHyphens } from "@/components/noBreakHyphens";
import { PROJECTS } from "@/lib/projects";
import type { ProjectData } from "@/types/project";
import type { V2Category } from "./v2Categories";
import { v2, v2ProjectHref } from "./v2Links";
import V2Cta from "./V2Cta";
import V2Carousel from "./V2Carousel";
import V2Columns from "./V2Columns";
import StyleSwitch from "./StyleSwitch";
import HeroCategories from "./HeroCategories";

const STYLES = [
    { id: "grid", label: "Grille" },
    { id: "band", label: "Bandeau" },
    { id: "panels", label: "Panneaux" },
    { id: "cols", label: "Colonnes" },
    { id: "mosaic", label: "Mosaïque" },
    { id: "bento", label: "Magazine" },
    { id: "time", label: "Chronologie" },
];

const yearOf = (p: ProjectData) => {
    const v = p.techSheet?.find((t) => /ann/i.test(t.label))?.value;
    return v && v !== "N/A" ? v : undefined;
};
const firstYear = (p: ProjectData) => Number(yearOf(p)?.match(/\d{4}/)?.[0] ?? 0);
const alt = (p: ProjectData) => `${p.title}, ${p.subtitle}`;

// Page catégorie v2 : titre, projets selon la vue choisie avec le sélecteur (grille, bandeau, panneaux,
// colonnes décalées, mosaïque, mise en page magazine, chronologie), texte, liens, contact.
export default function V2CategoryPage({ c }: { c: V2Category }) {
    const projects = PROJECTS.filter((p) => p.category === c.category);
    const byYear = [...projects].sort((a, b) => firstYear(b) - firstYear(a));

    return (
        <div className="v2-cat" data-cstyle="grid">
            <StyleSwitch target=".v2-cat" attr="cstyle" storageKey="v2-category-style" options={STYLES} />
            <section className="v2-section v2-page-top v2-cat-head">
                <div className="v2-stack v2-stack-top v2-fade" data-reveal>
                    <p className="v2-tag">{c.eyebrow}</p>
                    <h1 className="v2-h2">{noBreakHyphens(c.title)}</h1>
                    <p className="v2-small">{c.subtitle}</p>
                </div>
            </section>

            {/* Grille */}
            <section className="v2-section v2-cat-view" data-view="grid">
                <ul className="v2-works">
                    {projects.map((p, i) => (
                        <li key={p.id}>
                            <Link href={v2ProjectHref(p)}>
                                <span className="v2-works-photo">
                                    <AfterLoad>
                                        <Image src={p.heroImages[0]} alt={alt(p)} fill sizes="(max-width: 768px) 100vw, 50vw" priority={i < 2} />
                                    </AfterLoad>
                                </span>
                                <span className="v2-works-meta">
                                    <span className="v2-domain-caption">{p.title}</span>
                                    <span className="v2-domain-place">{p.subtitle}</span>
                                </span>
                                {p.optionalSubtitle && <span className="v2-tag v2-works-mission">{p.optionalSubtitle}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Bandeau */}
            <div className="v2-cat-view v2-cat-band" data-view="band">
                <V2Carousel items={projects.map((p) => ({ href: v2ProjectHref(p), img: p.heroImages[0], alt: alt(p), title: p.title, place: p.subtitle }))} />
            </div>

            {/* Panneaux */}
            <div className="v2-cat-view v2-cat-panels" data-view="panels">
                <HeroCategories items={projects.map((p) => ({ label: p.title, href: v2ProjectHref(p), meta: p.subtitle, img: p.heroImages[0], alt: alt(p) }))} />
            </div>

            {/* Colonnes : trois colonnes qui glissent à des vitesses différentes */}
            <section className="v2-section v2-cat-view" data-view="cols">
                <V2Columns items={projects.map((p) => ({ href: v2ProjectHref(p), img: p.heroImages[0], alt: alt(p), title: p.title, place: p.subtitle }))} />
            </section>

            {/* Mosaïque : tous les projets d'un coup d'oeil en vignettes carrées */}
            <section className="v2-section v2-cat-view" data-view="mosaic">
                <ul className="v2-mosaic">
                    {projects.map((p) => (
                        <li key={p.id}>
                            <Link href={v2ProjectHref(p)}>
                                <AfterLoad>
                                    <Image src={p.heroImages[0]} alt={alt(p)} fill sizes="(max-width: 768px) 50vw, 25vw" />
                                </AfterLoad>
                                <span className="v2-mosaic-cap">
                                    <span className="v2-bento-title">{p.title}</span>
                                    <span>{p.subtitle}</span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Magazine : grille éditoriale aux tailles variées */}
            <section className="v2-section v2-cat-view" data-view="bento">
                <ul className="v2-bento">
                    {projects.map((p, i) => (
                        <li key={p.id} className={`v2-bento-${i % 7}`}>
                            <Link href={v2ProjectHref(p)}>
                                <AfterLoad>
                                    <Image src={p.heroImages[0]} alt={alt(p)} fill sizes="(max-width: 768px) 100vw, 60vw" />
                                </AfterLoad>
                                <span className="v2-bento-cap">
                                    <span className="v2-bento-title">{p.title}</span>
                                    <span>{p.subtitle}</span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Chronologie : les projets sur une frise, du plus récent au plus ancien */}
            <section className="v2-section v2-cat-view" data-view="time">
                <ol className="v2-time">
                    {byYear.map((p) => (
                        <li key={p.id}>
                            <span className="v2-time-year">{yearOf(p) ?? "—"}</span>
                            <Link href={v2ProjectHref(p)}>
                                <span className="v2-works-photo v2-time-photo">
                                    <AfterLoad>
                                        <Image src={p.heroImages[0]} alt={alt(p)} fill sizes="300px" />
                                    </AfterLoad>
                                </span>
                                <span className="v2-domain-caption">{p.title}</span>
                                <span className="v2-domain-place">{p.subtitle}</span>
                            </Link>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="v2-section">
                <div className="v2-stack v2-fade" data-reveal>
                    <h2 className="v2-h2">Notre approche</h2>
                </div>
                <div className="v2-about-body">
                    <div className="v2-about-text v2-fade" data-reveal>
                        {c.paragraphs.map((t) => (
                            <p className="v2-small" key={t.slice(0, 24)}>{t}</p>
                        ))}
                    </div>
                </div>
                <nav className="v2-local-links" aria-label="Pages liées">
                    {c.links.map((l) => (
                        <Link key={l.href} href={v2(l.href)}>{l.label}</Link>
                    ))}
                </nav>
            </section>

            <V2Cta />
        </div>
    );
}
