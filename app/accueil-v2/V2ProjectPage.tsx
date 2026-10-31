import Image from "next/image";
import type { ProjectData } from "@/types/project";
import V2Cta from "./V2Cta";
import V2Strip from "./V2Strip";
import { StyleImageColonne } from "./V2ProjectStyles";
import { projectTypology, titleCase } from "@/lib/seo";

// Fiche projet v2.
// Sélecteur de mise en page retiré le 2026-10-31 : « Image + colonne » sur ordinateur, « Actuel » sur téléphone (CSS).
// I « Image + colonne » : photo panoramique, puis photos à gauche et texte fixe à droite (V2ProjectStyles) ;
// B « Actuel » : même ordre que la fiche en ligne (bande de photos puis texte), habillé en v2.
export default function V2ProjectPage({ project }: { project: ProjectData }) {
    const tech = project.techSheet ?? [];

    return (
        <div className="v2-project" data-pstyle="i">

            <div className="v2-pi"><StyleImageColonne p={project} /></div>

            {/* ---------- Style B : structure actuelle ---------- */}
            <div className="v2-pb">
                <V2Strip project={project} />
                <section className="v2-section v2-pb-body">
                    <div className="v2-row">
                        <div className="v2-fade" data-reveal>
                            {/* Le h1 porte le type de projet et la ville, pas seulement « VILLA T » : c'est ce que lisent
                                Google et les assistants IA pour savoir de quoi parle la page. Rendu visuel inchangé. */}
                            <h1 className="v2-project-h1">
                                <span className="v2-tag">{projectTypology(project)} · {titleCase(project.subtitle)}</span>{" "}
                                <span className="v2-h2 v2-project-title">{project.title}</span>
                            </h1>
                            {project.optionalLogo && (
                                <Image className="v2-pb-logo" src={project.optionalLogo.src} alt={project.optionalLogo.alt} width={project.optionalLogo.width} height={project.optionalLogo.height} />
                            )}
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

            <V2Cta />
        </div>
    );
}
