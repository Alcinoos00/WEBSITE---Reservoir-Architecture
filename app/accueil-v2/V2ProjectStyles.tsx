import Image from "next/image";
import { getProjectAlt, typologyLabel } from "@/lib/seo";
import type { ProjectData } from "@/types/project";

// Fiche projet v2, style « Image + colonne » (retenu par Emeric le 2026-10-20) :
// une photo panoramique en haut, puis les autres photos défilent à gauche
// pendant que le titre, le texte et la fiche technique restent fixes à droite.
export function StyleImageColonne({ p }: { p: ProjectData }) {
    const tech = p.techSheet ?? [];
    return (
        <>
            <div className="v2-banner is-top">
                {/* Pas de priority (préchargement forcé) : ce bloc est masqué sur téléphone, où il volait la bande passante
                    de la vraie photo principale. lazy + fetchPriority : chargée seulement si affichée, mais en premier. */}
                <Image src={p.heroImages[0]} alt={getProjectAlt(p, 0)} fill loading="lazy" fetchPriority="high" sizes="(max-width: 1200px) 100vw, 1200px" />
            </div>
            <section className="v2-section v2-colfix v2-colfix-rev">
                <div className="v2-colfix-photos">
                    {p.heroImages.slice(1).map((src, k) => (
                        <figure key={src}>
                            <Image src={src} alt={getProjectAlt(p, k + 1)} width={1600} height={1066} sizes="(max-width: 768px) 100vw, 60vw" />
                        </figure>
                    ))}
                </div>
                <div className="v2-colfix-info">
                    <p className="v2-tag">{typologyLabel(p.category)} · {p.subtitle}</p>
                    <h1 className="v2-h2 v2-project-title">{p.title}</h1>
                    {p.optionalSubtitle && <p className="v2-tag">{p.optionalSubtitle}</p>}
                    {p.descriptionHeader && <h2 className="v2-h3">{p.descriptionHeader}</h2>}
                    {p.descriptionParagraphs.map((t) => (
                        <p className="v2-small" key={t.slice(0, 24)}>{t}</p>
                    ))}
                    {tech.length > 0 && (
                        <dl className="v2-pb-tech">
                            {tech.map((t) => (
                                <div key={t.label}>
                                    <dt>{t.label}</dt>
                                    <dd>{t.value}</dd>
                                </div>
                            ))}
                        </dl>
                    )}
                </div>
            </section>
        </>
    );
}
