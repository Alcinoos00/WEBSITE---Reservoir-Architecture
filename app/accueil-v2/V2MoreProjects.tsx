import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { projectName, titleCase } from "@/lib/seo";
import { v2ProjectHref } from "./v2Links";

// Liste de liens texte vers les autres projets d'une catégorie (maillage interne : aide Google à découvrir
// et indexer chaque fiche projet). Les projets sans texte de présentation sont écartés.
export default function V2MoreProjects({
    category,
    exclude = [],
    label = "Autres projets",
    className = "",
}: {
    category: string;
    exclude?: string[];
    label?: string;
    className?: string;
}) {
    const list = PROJECTS.filter(
        (p) => p.category === category && !exclude.includes(p.id) && p.descriptionParagraphs.some((t) => t.trim()),
    );
    if (!list.length) return null;
    return (
        <nav className={`v2-more-projects ${className}`.trim()} aria-label={label}>
            <span className="v2-tag">{label} :</span>
            {list.map((p) => (
                <Link key={p.id} href={v2ProjectHref(p)}>
                    {projectName(p)} <span className="v2-more-place">{titleCase(p.subtitle)}</span>
                </Link>
            ))}
        </nav>
    );
}
