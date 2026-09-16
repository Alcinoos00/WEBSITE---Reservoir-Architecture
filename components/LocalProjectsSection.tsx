import Image from "next/image";
import Link from "next/link";
import type { ProjectData } from "@/types/project";
import { categoryToPath } from "@/lib/seo";
import "./seo-content-section.css";
import "./local-projects-section.css";
import { noBreakHyphens } from "./noBreakHyphens";
import AfterLoad from "./AfterLoad";

export type LocalProject = {
    project: ProjectData;
    place: string;
    summary: string;
};

type LocalLink = { href: string; label: string };

interface LocalProjectsSectionProps {
    eyebrow: string;
    title: string;
    lede: string;
    items: LocalProject[];
    links?: { intro: string; items: LocalLink[] };
}

export default function LocalProjectsSection({ eyebrow, title, lede, items, links }: LocalProjectsSectionProps) {
    return (
        <section className="local-projects-section" aria-labelledby="local-projects-title">
            <div className="local-projects-container">
                <div className="local-projects-header">
                    <p className="subtitle local-projects-eyebrow">{noBreakHyphens(eyebrow)}</p>
                    <h2 id="local-projects-title" className="title local-projects-title">{noBreakHyphens(title)}</h2>
                    <p className="body-text local-projects-lede">{noBreakHyphens(lede)}</p>
                </div>

                <ul className="local-projects-grid">
                    {items.map(({ project, place, summary }) => (
                        <li key={project.id}>
                            <Link
                                href={`/${categoryToPath(project.category)}/${project.slug}`}
                                className="local-project-card"
                            >
                                <div className="local-project-imgwrap">
                                    <AfterLoad>
                                        <Image
                                            src={project.heroImages[0]}
                                            alt={`${summary}, ${project.title} à ${place}`}
                                            className="local-project-img"
                                            fill
                                            sizes="(max-width: 1024px) 50vw, 33vw"
                                        />
                                    </AfterLoad>
                                </div>
                                <p className="local-project-place">{place}</p>
                                <h3 className="title-2 local-project-title">{project.title}</h3>
                                <p className="body-text local-project-summary">{summary}</p>
                            </Link>
                        </li>
                    ))}
                </ul>

                {links && (
                    <nav className="local-projects-links" aria-label={links.intro}>
                        <p className="body-text local-projects-links-intro">{noBreakHyphens(links.intro)}</p>
                        <div className="seo-content-links">
                            {links.items.map((link) => (
                                <Link key={link.href} href={link.href} className="seo-content-link">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </section>
    );
}
