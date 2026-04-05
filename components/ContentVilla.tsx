"use client";

import { useState } from "react";
import Image from "next/image";
import "./content-villa.css";
import "./content.css";
import { ProjectData } from "@/types/project";

interface ContentVillaProps {
    project: ProjectData;
}

export default function ContentVilla({ project }: ContentVillaProps) {
    const [isTechSheetOpen, setIsTechSheetOpen] = useState(false);

    return (
        <section className="content-villa-container">
            <div className="content-villa-header">
                {/* OVERLINE */}
                <p className="subtitle content-villa-overline">
                    {project.subtitle}
                </p>

                {/* TITLE - H1 */}
                <h1 className="title content-villa-title">
                    {project.title}
                </h1>

                {/* SUBTITLE - H2 */}
                {project.optionalSubtitle && (
                    <h2 className="title-1 content-villa-subtitle">
                        {project.optionalSubtitle}
                    </h2>
                )}

                {/* H3 */}
                {project.optionalSubtitle3 && (
                    <h3 className="title-2 content-villa-subtitle3">
                        {project.optionalSubtitle3}
                    </h3>
                )}

                {/* DESCRIPTION HEADER */}
                {project.descriptionHeader && (
                    <p className="body-text content-villa-desc-header">
                        {project.descriptionHeader}
                    </p>
                )}
            </div>

            <div className="content-villa-body">
                <div className="content-column main-text-column">
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
