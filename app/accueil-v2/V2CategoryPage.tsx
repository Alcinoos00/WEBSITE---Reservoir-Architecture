import Image from "next/image";
import Link from "next/link";
import AfterLoad from "@/components/AfterLoad";
import { noBreakHyphens } from "@/components/noBreakHyphens";
import { PROJECTS } from "@/lib/projects";
import type { ProjectData } from "@/types/project";
import type { V2Category } from "./v2Categories";
import { v2, v2ProjectHref } from "./v2Links";
import { GEO_COAST, GEO_DURANCE, GEO_LANDMARKS, GEO_RATIO, GEO_RHONE, PROJECT_GEO, geoPath, geoToPct } from "./v2Geo";
import V2Cta from "./V2Cta";
import V2Carousel from "./V2Carousel";
import V2ProjectIndex from "./V2ProjectIndex";
import StyleSwitch from "./StyleSwitch";
import HeroCategories from "./HeroCategories";

const STYLES = [
    { id: "grid", label: "Grille" },
    { id: "band", label: "Bandeau" },
    { id: "panels", label: "Panneaux" },
    { id: "index", label: "Index" },
    { id: "stack", label: "Empilées" },
    { id: "map", label: "Carte" },
    { id: "sheet", label: "Planche" },
];

const year = (p: ProjectData) => {
    const v = p.techSheet?.find((t) => /ann/i.test(t.label))?.value;
    return v && v !== "N/A" ? v : undefined;
};
const alt = (p: ProjectData) => `${p.title}, ${p.subtitle}`;

// Les projets d'une même commune sont écartés en petit cercle pour rester cliquables sur la carte.
function mapPoints(projects: ProjectData[]) {
    const seen = new Map<string, number>();
    return projects
        .filter((p) => PROJECT_GEO[p.slug])
        .map((p) => {
            const geo = PROJECT_GEO[p.slug];
            const key = geo.join(",");
            const n = seen.get(key) ?? 0;
            seen.set(key, n + 1);
            const { x, y } = geoToPct(geo);
            const r = n === 0 ? 0 : 1.4 + 0.5 * Math.floor((n - 1) / 6);
            const a = (n * Math.PI) / 3;
            return { p, x: x + r * Math.cos(a), y: y + r * Math.sin(a) * GEO_RATIO };
        });
}

// Page catégorie v2 : titre, projets selon la vue choisie avec le sélecteur (grille, bandeau, panneaux,
// index typographique, cartes empilées, carte du territoire, planche de toutes les photos), texte, liens, contact.
export default function V2CategoryPage({ c }: { c: V2Category }) {
    const projects = PROJECTS.filter((p) => p.category === c.category);
    const points = mapPoints(projects);
    const offMap = projects.filter((p) => !PROJECT_GEO[p.slug]);
    const photos = projects.flatMap((p) => p.heroImages.map((src, i) => ({ p, src, i })));

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
                        <li key={p.id} className="v2-fade" data-reveal>
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

            {/* Index typographique, photo qui suit le curseur */}
            <section className="v2-section v2-cat-view" data-view="index">
                <V2ProjectIndex
                    rows={projects.map((p) => ({ href: v2ProjectHref(p), img: p.heroImages[0], alt: alt(p), title: p.title, place: p.subtitle, mission: p.optionalSubtitle, year: year(p) }))}
                />
            </section>

            {/* Cartes empilées : chaque projet occupe l'écran et glisse par-dessus le précédent */}
            <section className="v2-section v2-cat-view" data-view="stack">
                <ol className="v2-stackcards">
                    {projects.map((p, i) => (
                        <li key={p.id} style={{ ["--n" as string]: i }}>
                            <Link href={v2ProjectHref(p)}>
                                <AfterLoad>
                                    <Image src={p.heroImages[0]} alt={alt(p)} fill sizes="100vw" />
                                </AfterLoad>
                                <span className="v2-stackcards-text">
                                    <span className="v2-index-num">{String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
                                    <span className="v2-stackcards-title">{p.title}</span>
                                    <span>{p.subtitle}{year(p) ? ` · ${year(p)}` : ""}</span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Carte du territoire */}
            <section className="v2-section v2-cat-view" data-view="map">
                <div className="v2-map" style={{ aspectRatio: GEO_RATIO }}>
                    <svg className="v2-map-bg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <path className="v2-map-sea" d={`${geoPath(GEO_COAST)} L100,100 L0,100 Z`} />
                        <path className="v2-map-river" d={geoPath(GEO_RHONE)} />
                        <path className="v2-map-river" d={geoPath(GEO_DURANCE)} />
                    </svg>
                    {GEO_LANDMARKS.map((l) => {
                        const { x, y } = geoToPct(l.at);
                        return (
                            <span key={l.name} className="v2-map-city" style={{ left: `${x}%`, top: `${y}%` }}>
                                {l.name}
                            </span>
                        );
                    })}
                    {points.map(({ p, x, y }) => (
                        <Link key={p.id} href={v2ProjectHref(p)} className={`v2-map-pin${x > 62 ? " is-left" : ""}`} style={{ left: `${x}%`, top: `${y}%` }} aria-label={alt(p)}>
                            <span className="v2-map-card">
                                <span className="v2-map-photo">
                                    <AfterLoad>
                                        <Image src={p.heroImages[0]} alt="" fill sizes="220px" />
                                    </AfterLoad>
                                </span>
                                <span className="v2-domain-caption">{p.title}</span>
                                <span className="v2-domain-place">{p.subtitle}</span>
                            </span>
                        </Link>
                    ))}
                </div>
                <p className="v2-tag v2-map-note">
                    {points.length} projets sur la carte. Survolez un point pour voir le projet.
                    {offMap.length > 0 && <> Hors carte : {offMap.map((p) => <Link key={p.id} href={v2ProjectHref(p)}>{p.title} ({p.subtitle})</Link>)}</>}
                </p>
            </section>

            {/* Planche : toutes les photos de la catégorie, comme une planche contact */}
            <section className="v2-section v2-cat-view" data-view="sheet">
                <ul className="v2-sheet">
                    {photos.map(({ p, src, i }) => (
                        <li key={src}>
                            <Link href={v2ProjectHref(p)}>
                                <Image src={src} alt={`${alt(p)}, photo ${i + 1}`} width={600} height={400} sizes="(max-width: 768px) 50vw, 25vw" />
                                <span className="v2-sheet-cap">{p.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
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
