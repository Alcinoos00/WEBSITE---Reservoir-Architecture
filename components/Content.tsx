import Image from "next/image";
import "./content.css";

export default function Content() {
    return (
        <section className="content-container">
            <div className="content-header">
                <p className="subtitle content-subtitle">WAUQUIEZ - NAUTISME</p>
                <h1 className="title content-title">Show - Room</h1>
                <div className="content-logo-wrapper">
                    <Image
                        src="/logo-content.png"
                        alt="Wauquiez Logo"
                        width={120}
                        height={48}
                        className="content-logo"
                        priority
                    />
                </div>
            </div>

            <div className="content-body">
                <div className="content-column left-column">
                    <h2 className="title-1 column-title">Espace Signature</h2>
                    <p className="body-text">
                        Un espace écrin sur deux niveaux qui rappelle la promesse de Wauquiez : confort,
                        matériaux nobles et attention aux détails, marqueurs de leur ligne nautique.
                    </p>
                    <p className="body-text">
                        Un show room pensé en parcours client : espace détente et accueil en RDC, espace
                        conseil et administration en mezzanine.
                    </p>
                    <p className="body-text">
                        L&apos;espace déploie une architecture intérieure fluide où mezzanine, escalier et verrières
                        structurent la perspective.
                    </p>
                    <p className="body-text">
                        Le bois chaleureux dialogue avec des parois blanches épurées, créant une atmosphère
                        élégante et contemporaine baignée de lumière naturelle.
                    </p>
                    <p className="body-text">
                        Entre accueil sculptural, lignes graphiques et mobilier intégré, le projet affirme une identité
                        forte et raffinée au service de la marque.
                    </p>
                </div>

                <div className="content-divider" />

                <div className="content-column right-column">
                    <div className="tech-sheet">
                        <div className="tech-row">
                            <span className="tech-label">Lieu</span>
                            <span className="tech-value">Port Camargue (30)</span>
                        </div>
                        <div className="tech-row">
                            <span className="tech-label">Maître d&apos;Ouvrage</span>
                            <span className="tech-value">Cap Yatching</span>
                        </div>
                        <div className="tech-row">
                            <span className="tech-label">Mission</span>
                            <span className="tech-value">Conception / Permis de construire</span>
                        </div>
                        <div className="tech-row">
                            <span className="tech-label">Surface</span>
                            <span className="tech-value">97,00 m2</span>
                        </div>
                        <div className="tech-row">
                            <span className="tech-label">Calendrier</span>
                            <span className="tech-value">2014</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
