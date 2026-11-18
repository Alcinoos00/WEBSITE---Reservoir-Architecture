import Link from "next/link";
import type { ProjectData } from "@/types/project";
import { PROJECTS } from "@/lib/projects";
import { categoryToPath, projectName, projectTypology, titleCase } from "@/lib/seo";
import { v2, v2ProjectHref } from "./v2Links";

// Liens vers d'autres projets de la même catégorie, en bas de chaque fiche projet (ajouté le 2026-11-18).
// But : maillage interne. Search Console signalait 33 fiches « détectées, non indexées » :
// sans lien depuis les autres fiches, Google les jugeait peu prioritaires.
// On prend les projets qui suivent dans PROJECTS (ordre circulaire) : chaque fiche reçoit ainsi des liens
// de plusieurs autres fiches, au lieu que toutes pointent vers les mêmes premiers projets.
const MAX_LINKS = 4;

const CATEGORY_LABEL: Record<string, string> = {
    villas: "Toutes nos villas",
    logements: "Tous nos logements collectifs",
    commerces: "Tous nos commerces et showrooms",
    equipements: "Tous nos équipements publics",
};

export default function V2RelatedProjects({ project }: { project: ProjectData }) {
    const same = PROJECTS.filter((p) => p.category === project.category);
    const index = same.findIndex((p) => p.slug === project.slug);
    const others = index < 0 ? same : [...same.slice(index + 1), ...same.slice(0, index)];
    const related = others.slice(0, MAX_LINKS);
    const categoryPath = categoryToPath(project.category);

    if (related.length === 0) return null;

    return (
        <section className="v2-section v2-related" aria-labelledby="v2-related-title">
            <p className="v2-label" id="v2-related-title">Autres projets</p>
            <ul className="v2-related-list">
                {related.map((p) => (
                    <li key={p.slug}>
                        <Link href={v2ProjectHref(p)}>
                            <span className="v2-related-name">{projectName(p)}</span>
                            <span className="v2-related-meta">{projectTypology(p)} · {titleCase(p.subtitle)}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            {categoryPath && (
                <p className="v2-small v2-related-all">
                    <Link href={v2(`/${categoryPath}`)}>{CATEGORY_LABEL[categoryPath] ?? "Toutes nos réalisations"} →</Link>
                </p>
            )}
        </section>
    );
}
