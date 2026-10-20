import Image from "next/image";
import Link from "next/link";
import AfterLoad from "@/components/AfterLoad";
import { noBreakHyphens } from "@/components/noBreakHyphens";
import { PROJECTS } from "@/lib/projects";
import type { V2Category } from "./v2Categories";
import { v2, v2ProjectHref } from "./v2Links";
import V2Cta from "./V2Cta";
import V2Carousel from "./V2Carousel";
import StyleSwitch from "./StyleSwitch";
import HeroCategories from "./HeroCategories";

const STYLES = [
    { id: "grid", label: "Grille" },
    { id: "band", label: "Bandeau" },
    { id: "panels", label: "Panneaux" },
];

// Page catégorie v2 : titre, projets (grille, bandeau défilant ou panneaux comme l'accueil, au choix via le sélecteur),
// texte de la catégorie, liens, contact.
export default function V2CategoryPage({ c }: { c: V2Category }) {
    const projects = PROJECTS.filter((p) => p.category === c.category);
    return (
        <div className="v2-cat" data-cstyle="grid">
            <StyleSwitch target=".v2-cat" attr="cstyle" storageKey="v2-category-style" options={STYLES} />
            <section className="v2-section v2-page-top">
                <div className="v2-stack v2-stack-top v2-fade" data-reveal>
                    <p className="v2-tag">{c.eyebrow}</p>
                    <h1 className="v2-h2">{noBreakHyphens(c.title)}</h1>
                    <p className="v2-small">{c.subtitle}</p>
                </div>
                <ul className="v2-works v2-cat-grid">
                    {projects.map((p, i) => (
                        <li key={p.id} className="v2-fade" data-reveal>
                            <Link href={v2ProjectHref(p)}>
                                <span className="v2-works-photo">
                                    <AfterLoad>
                                        <Image src={p.heroImages[0]} alt={`${p.title}, ${p.subtitle}`} fill sizes="(max-width: 768px) 100vw, 50vw" priority={i < 2} />
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
            <div className="v2-cat-panels">
                <HeroCategories
                    items={projects.map((p) => ({ label: p.title, href: v2ProjectHref(p), meta: p.subtitle, img: p.heroImages[0], alt: `${p.title}, ${p.subtitle}` }))}
                />
            </div>
            <div className="v2-cat-band">
                <V2Carousel
                    items={projects.map((p) => ({ href: v2ProjectHref(p), img: p.heroImages[0], alt: `${p.title}, ${p.subtitle}`, title: p.title, place: p.subtitle }))}
                />
            </div>

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
