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
    const hasH3 = !!project.optionalSubtitle3;
    const hasLogo = !!project.optionalLogo;

    return (
        <section className="content-container">
            <div className="content-header">
                {/* OVERLINE - Subtitle 1 */}
                <p 
                    className="subtitle content-subtitle"
                    style={{ 
                        marginBottom: '30px' 
                    }}
                >
                    {project.subtitle}
                </p>

                {/* LOGO */}
                {project.optionalLogo && (
                    <div className="content-optional-logo-wrapper" style={{ marginBottom: '16px' }}>
                        <Image
                            src={project.optionalLogo.src}
                            alt={project.optionalLogo.alt || "Logo"}
                            width={project.optionalLogo.width}
                            height={project.optionalLogo.height}
                            className="content-optional-logo"
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

                {/* SOUS-TITRE 3 - H3 */}
                {project.optionalSubtitle3 && (
                    <h3 
                        className="title-2 content-optional-subtitle-3"
                        style={{ 
                            marginBottom: '4px' 
                        }}
                    >
                        {project.optionalSubtitle3}
                    </h3>
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

                {project.descriptionHeader && !project.projectLogo && (
                    <p className="body-text" style={{ fontWeight: 600, marginBottom: '2rem' }}>
                        {project.descriptionHeader}
                    </p>
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
