import Image from "next/image";
import Link from "next/link";
import AfterLoad from "@/components/AfterLoad";
import { noBreakHyphens } from "@/components/noBreakHyphens";
import { PROJECTS } from "@/lib/projects";
import type { ProjectData } from "@/types/project";
import type { V2Category } from "./v2Categories";
import { v2, v2ProjectHref } from "./v2Links";
import V2Cta from "./V2Cta";
import V2CatCarousel from "./V2CatCarousel";

const alt = (p: ProjectData) => `${p.title}, ${p.subtitle}`;

// Rangées de la grille magazine : largeurs relatives des projets de chaque rangée (motif qui se répète),
// et hauteur de la rangée. La dernière rangée peut être incomplète : ses projets se partagent la largeur.
const ROWS = [
    { spans: [4, 2], tall: true },
    { spans: [2, 2, 2], tall: false },
    { spans: [3, 3], tall: false },
];

function toRows(projects: ProjectData[]) {
    const rows: { tall: boolean; items: { p: ProjectData; span: number }[] }[] = [];
    let i = 0;
    let r = 0;
    while (i < projects.length) {
        const { spans, tall } = ROWS[r % ROWS.length];
        const items = projects.slice(i, i + spans.length).map((p, k) => ({ p, span: spans[k] }));
        rows.push({ tall, items });
        i += items.length;
        r++;
    }
    return rows;
}

// Page catégorie v2 : titre, projets en grille « magazine » (rangées aux tailles qui alternent), texte, liens, contact.
// Vue retenue par Emeric le 2026-10-20 parmi une dizaine de variantes.
type Faq = { title: string; items: { q: string; a: string }[] };

export default function V2CategoryPage({ c, faq }: { c: V2Category; faq?: Faq }) {
    const projects = PROJECTS.filter((p) => p.category === c.category);

    return (
        <>
            <V2CatCarousel projects={projects} />

            <section className="v2-section v2-page-top v2-cat-head">
                <div className="v2-stack v2-stack-top v2-fade" data-reveal>
                    <p className="v2-tag">{c.eyebrow}</p>
                    <h1 className="v2-h2">{noBreakHyphens(c.title)}</h1>
                    <p className="v2-small">{c.subtitle}</p>
                </div>
            </section>

            <section className="v2-section v2-cat-projects">
                <div className="v2-mag">
                    {toRows(projects).map((row, r) => {
                        return (
                            <ul key={r} className={`v2-mag-row${row.tall ? " is-tall" : ""}`}>
                                {row.items.map(({ p, span }) => (
                                    // --grow : part de la largeur de la rangée.
                                    <li key={p.id} style={{ ["--grow" as string]: span }}>
                                        <Link href={v2ProjectHref(p)}>
                                            <AfterLoad>
                                                <Image src={p.heroImages[0]} alt={alt(p)} fill sizes="(max-width: 768px) 100vw, 70vw" priority={r === 0} />
                                            </AfterLoad>
                                            <span className="v2-bento-cap">
                                                <span className="v2-bento-title">{p.title}</span>
                                                <span>{p.subtitle}</span>
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        );
                    })}
                </div>
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

            {/* FAQ optionnelle (page Logements), avec ses données structurées comme sur la v1 */}
            {faq && (
                <section className="v2-section">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                mainEntity: faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
                            }),
                        }}
                    />
                    <div className="v2-row">
                        <h2 className="v2-h2 v2-fade" data-reveal>{faq.title}</h2>
                        <div className="v2-faq v2-fade" data-reveal>
                            {faq.items.map((f) => (
                                <details key={f.q}>
                                    <summary>{f.q}</summary>
                                    <p className="v2-small">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <V2Cta />
        </>
    );
}
