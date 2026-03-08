"use client";

import "./agency-section.css";

export default function AgencySection() {
    return (
        <section className="agency-section">
            <div className="agency-container">
                <div className="agency-header">
                    <p className="subtitle agency-subtitle">NOTRE AGENCE</p>
                    <h2 className="title agency-title">Construire une présence, bien plus que des lieux.</h2>
                </div>

                <div className="agency-content">
                    <div className="agency-column">
                        <h3 className="title-1 agency-subheading">RESERVOIR ARCHITECTURE</h3>
                        <p className="body-text">
                            Est une agence d’architecture multidisciplinaire
                            <br />
                            Intervenant dans :
                        </p>
                        <ul className="agency-list">
                            <li>Architecture publique (Equipements publics)</li>
                            <li>Architecture tertiaire (bureaux, logements, maison de retraite)</li>
                            <li>Architecture commerciale (Commerces - CACHAREL, DENIM, ESPRIT, BLEU LIBELLULE…/ Centre commercial (Super U)</li>
                            <li>Résidences privées</li>
                            <li>Mobilier, Architecture d’intérieur (CACHAREL, BLEU LIBELLULE, DENIM), Signalétique ( Aéroport Marseille Provence)</li>
                        </ul>

                        <p className="body-text">
                            Dirigée par <strong>Serge ETTORE</strong>, architecte Dplg depuis 1999.
                        </p>

                        <p className="body-text">
                            Cette multidisciplinarité est liée au parcours original de son fondateur architecte, M. Serge ETTORE.
                            Parallèlement à sa formation en architecture, M. ETTORE multiplie les expériences professionnelles au sein de CACHAREL pour qui il devient responsable de Projet Architecture. Ses collaborations dans les workshops de la marque donnent à son début de parcours un caractère international et lui permettent de s’ouvrir à d’autres cultures et savoir-faire.
                            Il continue parallèlement ses activités de design et arts plastiques. Il crée ponctuellement à la demande du client du mobilier. Il s’occupe de scénographie.
                        </p>

                        <h3 className="title-1 agency-subheading">Une démarche composite</h3>
                        <p className="body-text">
                            Cette attitude, aujourd’hui devenue méthodologie, permet à l’agence de parcourir de nouveaux territoires à la recherche d’une vision impliquant à la fois les questions sociales, urbaines, fonctionnelles et formelles. Les projets de l’agence traduisent cet univers protéiforme issu de son parcours.
                        </p>
                        <p className="body-text">
                            Depuis les années 2000, Serge ETTORE s’est diversifié et a accompagné et réalisé divers projets en habitats individuels et collectifs, équipements publics, architectures commerciales.
                        </p>
                        <p className="body-text">
                            Il crée en 2013 la société RESERVOIR ARCHITECTURE et établit son siège préalablement à Nîmes sur Aix en Provence.
                        </p>
                    </div>

                    <div className="agency-column">
                        <p className="body-text">
                            Riche du parcours varié de son architecte et de l’animation d’un réseau de partenaires récurrents aux compétences diverses, RESERVOIR ARCHITECTURE est au centre du système permettant d’ajuster l’expertise et l’offre de l’agence aux caractéristiques des projets et au profil de ses clients : projets complexes, conception-réalisation, développement de concepts, etc., l’objectif est de garantir à chaque fois le plus haut niveau de performance.
                        </p>

                        <p className="body-text">
                            <strong>RESERVOIR ARCHITECTURE, une agence gourmande en idées neuves.</strong>
                        </p>

                        <p className="body-text">
                            Son architecture se veut axer sur la connaissance du contexte, intégrant le temps comme l’une des dimensions majeures de sa conception, de son processus de transformation, l’économie des ressources comme l’une des conditions de son développement et basée sur une approche raisonnée. Une architecture pour aujourd’hui et plus encore pour demain dans le cadre d’une démarche composite– synthèse de différentes visions pour des projets aux usages tout aussi variés.
                        </p>

                        <h3 className="title-1 agency-subheading">Les engagements de l’agence</h3>
                        <p className="body-text" style={{ fontWeight: 600 }}>
                            Conception durable, démarche environnementale, réactivité
                        </p>
                        <p className="body-text">
                            L’approche de l’agence est centrée sur la conception durable que ce soit en termes de conception où un soin particulier sera apporté à l’intégration environnementale du projet que dans le suivi de la construction.
                            RESERVOIR ARCHITECTURE se propose d’apporter à chaque projet un volet environnemental et innovant dans un cadre réactif et engagé.
                        </p>

                        <h3 className="title-1 agency-subheading">Les partenaires</h3>
                        <p className="body-text">
                            Riche du parcours varié de son architecte et de l’animation d’un réseau de partenaires récurrents aux compétences diverses,
                        </p>
                        <p className="body-text">
                            RESERVOIR ARCHITECTURE est au centre du système permettant d’ajuster l’expertise et l’offre de l’agence aux caractéristiques des projets et au profil de ses clients : projets complexes, conception-réalisation, développement de concepts, etc., l’objectif est de garantir à chaque fois le plus haut niveau de performance.
                        </p>
                        <p className="body-text">
                            Pour cela, RESERVOIR ARCHITECTURE s'appuie sur des partenaires expérimentés, bureaux d'études pluridisciplinaires ou spécialisés (structure, fluides, paysage, acoustique, bio-sourcés) qui en fonction de vos projets viendront renforcer son aspect technique et environnemental.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
