"use client";

import { useState } from "react";
import Image from "next/image";
import "./content.css";
import { ProjectData } from "@/types/project";

interface ContentProps {
    project: ProjectData;
}

export default function Content({ project }: ContentProps) {
    const [isTechSheetOpen, setIsTechSheetOpen] = useState(false);

    const hasH2 = !!project.optionalSubtitle;
    const hasH3 = !!project.descriptionHeader;
    const hasLogo = !!project.optionalLogo;

    return (
        <section className="content-container">
            <div className="content-header">
                {/* OVERLINE - Subtitle 1 */}
                <p
                    className="subtitle content-subtitle"
                    style={{
                        marginBottom: hasLogo ? '16px' : '30px'
                    }}
                >
                    {project.subtitle}
                </p>

                {/* LOGO */}
                {project.optionalLogo && (
                    <div className="content-optional-logo-wrapper">
                        <Image
                            src={project.optionalLogo.src}
                            alt={project.optionalLogo.alt || "Logo"}
                            width={project.optionalLogo.width}
                            height={project.optionalLogo.height}
                            className="content-optional-logo"
                            style={project.optionalLogo.invert ? { filter: 'invert(1)' } : undefined}
                            priority
                        />
                    </div>
                )}

                {/* TITRE - H1 */}
                <h1 
                    className="title content-title" 
                    style={{ 
                        marginBottom: (hasH2 || hasH3) ? '12px' : '24px' 
                    }}
                >
                    {project.title}
                </h1>

                {/* SOUS-TITRE 2 - H2 */}
                {project.optionalSubtitle && (
                    <h2 
                        className="title-1 content-optional-subtitle"
                        style={{ 
                            marginBottom: hasH3 ? '30px' : '20px' 
                        }}
                    >
                        {project.optionalSubtitle}
                    </h2>
                )}

                {project.projectLogo && (
                    <div className="content-logo-wrapper">
                        <Image
                            src={project.projectLogo.src}
                            alt={project.projectLogo.alt}
                            width={project.projectLogo.width}
                            height={project.projectLogo.height}
                            className="content-logo"
                            priority
                        />
                    </div>
                )}

                {/* H3 - Sous-titre poetique */}
                {project.descriptionHeader && !project.projectLogo && (
                    <h3 className="title-2" style={{ marginBottom: '2rem' }}>
                        {project.descriptionHeader}
                    </h3>
                )}
            </div>

            <div className="content-body">
                <div className="content-column main-text-column">
                    {project.descriptionHeader && project.projectLogo && (
                        <h2 className="title-1 column-title">{project.descriptionHeader}</h2>
                    )}

                    {project.descriptionParagraphs.map((para, index) => (
                        <p key={`${project.id}-para-${index}`} className="body-text">
                            {para}
                        </p>
                    ))}
                </div>

                <div className="tech-sheet-square-wrapper">
                    <button
                        className={`tech-sheet-toggle ${isTechSheetOpen ? 'active' : ''}`}
                        onClick={() => setIsTechSheetOpen(!isTechSheetOpen)}
                    >
                        <span>Fiche technique</span>
                        <span className="toggle-icon">{isTechSheetOpen ? '−' : '+'}</span>
                    </button>

                    <div className={`tech-sheet-content ${isTechSheetOpen ? 'open' : ''}`}>
                        <div className="tech-sheet">
                            {project.techSheet?.map((item, index) => (
                                <div key={`${project.id}-tech-${index}`} className="tech-row">
                                    <span className="tech-label">{item.label}</span>
                                    <span className="tech-value">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
