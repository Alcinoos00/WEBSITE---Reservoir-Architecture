import Image from "next/image";
import Link from "next/link";
import AfterLoad from "@/components/AfterLoad";
import { noBreakHyphens } from "@/components/noBreakHyphens";
import { PROJECTS } from "@/lib/projects";
import type { ProjectData } from "@/types/project";
import type { V2Category } from "./v2Categories";
import { v2, v2ProjectHref } from "./v2Links";
import V2Cta from "./V2Cta";

const alt = (p: ProjectData) => `${p.title}, ${p.subtitle}`;

// Page catégorie v2 : titre, projets en grille « magazine » (tailles qui alternent), texte, liens, contact.
// Vue retenue par Emeric le 2026-10-20 parmi une dizaine de variantes.
export default function V2CategoryPage({ c }: { c: V2Category }) {
    const projects = PROJECTS.filter((p) => p.category === c.category);

    return (
        <>
            <section className="v2-section v2-page-top v2-cat-head">
                <div className="v2-stack v2-stack-top v2-fade" data-reveal>
                    <p className="v2-tag">{c.eyebrow}</p>
                    <h1 className="v2-h2">{noBreakHyphens(c.title)}</h1>
                    <p className="v2-small">{c.subtitle}</p>
                </div>
            </section>

            <section className="v2-section v2-cat-projects">
                <ul className="v2-bento">
                    {projects.map((p, i) => (
                        <li key={p.id} className={`v2-bento-${i % 7}`}>
                            <Link href={v2ProjectHref(p)}>
                                <AfterLoad>
                                    <Image src={p.heroImages[0]} alt={alt(p)} fill sizes="(max-width: 768px) 100vw, 60vw" priority={i < 2} />
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
        </>
    );
}
