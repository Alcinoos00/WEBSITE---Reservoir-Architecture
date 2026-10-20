import Image from "next/image";
import Link from "next/link";
import AfterLoad from "@/components/AfterLoad";
import { PROJECTS } from "@/lib/projects";
import { getProjectAlt, typologyLabel } from "@/lib/seo";
import type { ProjectData } from "@/types/project";
import { v2ProjectHref } from "./v2Links";
import StyleSwitch from "./StyleSwitch";

const STYLES = [
    { id: "a", label: "Style Teras" },
    { id: "b", label: "Style actuel" },
];
import V2Cta from "./V2Cta";

function nextProject(project: ProjectData) {
    const same = PROJECTS.filter((p) => p.category === project.category);
    const i = same.findIndex((p) => p.id === project.id);
    return same[(i + 1) % same.length];
}

// Fiche projet v2, en deux styles à comparer (sélecteur flottant) :
// A « Teras » : titre, fiche technique en colonnes, grande photo, galerie pleine largeur ;
// B « actuel » : même ordre que la fiche en ligne (bande de photos puis texte), habillé en v2.
export default function V2ProjectPage({ project }: { project: ProjectData }) {
    const next = nextProject(project);
    const [first, ...rest] = project.heroImages;
    const tech = project.techSheet ?? [];

    return (
        <div className="v2-project" data-pstyle="a">
            <StyleSwitch target=".v2-project" attr="pstyle" storageKey="v2-project-style" options={STYLES} />

            {/* ---------- Style A : Teras ---------- */}
            <div className="v2-pa">
                <section className="v2-section v2-page-top">
                    <div className="v2-row v2-fade" data-reveal>
                        <div>
                            <p className="v2-tag">{typologyLabel(project.category)} · {project.subtitle}</p>
                            <h1 className="v2-h2 v2-project-title">{project.title}</h1>
                            {project.optionalSubtitle && <p className="v2-tag">{project.optionalSubtitle}</p>}
                        </div>
                        <div className="v2-project-desc">
                            {project.descriptionHeader && <h2 className="v2-h3">{project.descriptionHeader}</h2>}
                            {project.descriptionParagraphs.map((t) => (
                                <p className="v2-small" key={t.slice(0, 24)}>{t}</p>
                            ))}
                        </div>
                    </div>
                    {tech.length > 0 && (
                        <dl className="v2-tech">
                            {tech.map((t) => (
                                <div key={t.label}>
                                    <dt>{t.label}</dt>
                                    <dd>{t.value}</dd>
                                </div>
                            ))}
                        </dl>
                    )}
                </section>
                <div className="v2-project-hero">
                    <Image src={first} alt={getProjectAlt(project, 0)} fill priority sizes="100vw" />
                </div>
                <section className="v2-section v2-gallery">
                    {rest.map((src, i) => (
                        <figure key={src} className={`v2-gallery-item${i % 3 === 0 ? " is-wide" : ""} v2-fade`} data-reveal>
                            <AfterLoad>
                                <Image src={src} alt={getProjectAlt(project, i + 1)} fill sizes={i % 3 === 0 ? "(max-width: 768px) 100vw, 1440px" : "(max-width: 768px) 100vw, 720px"} />
                            </AfterLoad>
                        </figure>
                    ))}
                </section>
            </div>

            {/* ---------- Style B : structure actuelle ---------- */}
            <div className="v2-pb">
                <div className="v2-pb-strip v2-page-top-strip">
                    {project.heroImages.map((src, i) => (
                        <div key={src} className="v2-pb-strip-item">
                            <Image src={src} alt={getProjectAlt(project, i)} width={1200} height={800} sizes="(max-width: 768px) 200vw, 90vh" loading={i < 3 ? "eager" : "lazy"} />
                        </div>
                    ))}
                </div>
                <section className="v2-section v2-pb-body">
                    <div className="v2-row">
                        <div className="v2-fade" data-reveal>
                            <p className="v2-tag">{project.subtitle}</p>
                            {project.optionalLogo && (
                                <Image className="v2-pb-logo" src={project.optionalLogo.src} alt={project.optionalLogo.alt} width={project.optionalLogo.width} height={project.optionalLogo.height} />
                            )}
                            <h1 className="v2-h2 v2-project-title">{project.title}</h1>
                            {project.optionalSubtitle && <p className="v2-tag">{project.optionalSubtitle}</p>}
                            {tech.length > 0 && (
                                <dl className="v2-pb-tech">
                                    {tech.map((t) => (
                                        <div key={t.label}>
                                            <dt>{t.label}</dt>
                                            <dd>{t.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            )}
                        </div>
                        <div className="v2-project-desc v2-fade" data-reveal>
                            {project.descriptionHeader && <h2 className="v2-h3">{project.descriptionHeader}</h2>}
                            {project.descriptionParagraphs.map((t) => (
                                <p className="v2-small" key={t.slice(0, 24)}>{t}</p>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Projet suivant (commun aux deux styles) */}
            <section className="v2-section">
                <Link href={v2ProjectHref(next)} className="v2-next">
                    <span className="v2-stack">
                        <span className="v2-tag">Projet suivant</span>
                        <span className="v2-h2">{next.title}</span>
                        <span className="v2-domain-place">{next.subtitle}</span>
                    </span>
                    <span className="v2-next-photo">
                        <AfterLoad>
                            <Image src={next.heroImages[0]} alt={`${next.title}, ${next.subtitle}`} fill sizes="(max-width: 768px) 100vw, 40vw" />
                        </AfterLoad>
                    </span>
                </Link>
            </section>

            <V2Cta />
        </div>
    );
}
