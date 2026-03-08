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

    return (
        <section className="content-container">
            <div className="content-header">
                <p className="subtitle content-subtitle">{project.subtitle}</p>
                <h1 className="title content-title">{project.title}</h1>

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
                            {project.techSheet.map((item, index) => (
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
