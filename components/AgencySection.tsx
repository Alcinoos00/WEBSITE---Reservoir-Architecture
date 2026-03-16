"use client";

import "./agency-section.css";

export default function AgencySection() {
    return (
        <section className="agency-section">
            <div className="agency-container">
                <div className="agency-header">
                    <p className="subtitle agency-subtitle">NOTRE AGENCE</p>
                    <h2 className="title agency-title">Construire une présence</h2>
                </div>

                <div className="agency-content">
                    <div className="agency-column-single">
                        <h3 className="title-1 agency-subheading">RESERVOIR ARCHITECTURE</h3>
                        
                        <p className="body-text">
                            est née d’un parcours qui ne cloisonne pas, celui de Serge ETTORE, architecte Dplg depuis 1999, dirigeant l’agence.
                        </p>
                        <p className="body-text">
                            Formé à l’architecture et actif très tôt dans l’univers de la marque, Serge ETTORE développe une approche où l’espace est à la fois structure, usage et perception. Responsable de projets architecture au sein de CACHAREL, il participe à des workshops internationaux qui l’exposent à d’autres cultures constructives et à d’autres manières d’habiter l’espace.
                        </p>
                        <p className="body-text">
                            Cette double culture — architecturale et scénographique — structure aujourd’hui la méthode de l’agence.
                            Chaque projet est abordé comme une situation spécifique : un territoire, un programme, des contraintes, un budget, des usages réels. L’agence ne cherche pas à reproduire une écriture formelle mais à produire une réponse cohérente, contextualisée et durable.
                        </p>
                        <p className="body-text">
                            Qu’il s’agisse d’équipements publics, de logements, de commerces ou de résidences privées, le travail porte autant sur la rigueur constructive que sur la qualité des parcours, la lumière, la matérialité et la lisibilité des espaces.
                        </p>
                        <p className="body-text">
                            La conception durable n’est pas un argument ajouté : elle conditionne les choix dès l’analyse du site, dans l’orientation, l’économie de moyens, la pérennité des systèmes constructifs.
                        </p>
                        <p className="body-text">
                            Implantée à Aix-en-Provence depuis 2013, l’agence fonctionne en structure agile. Elle mobilise, selon les projets, un réseau de partenaires spécialisés afin d’ajuster précisément l’expertise technique aux enjeux de chaque opération.
                        </p>
                        
                        <p className="body-text" style={{ marginTop: '1rem' }}>
                            L’objectif n’est pas la signature. <strong>Il est la justesse.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
