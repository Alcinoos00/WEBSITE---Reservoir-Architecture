import Image from "next/image";
import AfterLoad from "@/components/AfterLoad";
import { getProjectAlt, typologyLabel } from "@/lib/seo";
import type { ProjectData } from "@/types/project";
import V2HScroll from "./V2HScroll";

// Six mises en page supplémentaires de la fiche projet, à comparer avec le sélecteur (data-pstyle c à h).
// Toutes reprennent les mêmes contenus : titre, lieu, programme, texte, fiche technique, photos.

function Tech({ p, className = "v2-tech" }: { p: ProjectData; className?: string }) {
    const tech = p.techSheet ?? [];
    if (!tech.length) return null;
    return (
        <dl className={className}>
            {tech.map((t) => (
                <div key={t.label}>
                    <dt>{t.label}</dt>
                    <dd>{t.value}</dd>
                </div>
            ))}
        </dl>
    );
}

function Photo({ p, i, sizes, priority }: { p: ProjectData; i: number; sizes: string; priority?: boolean }) {
    const img = <Image src={p.heroImages[i]} alt={getProjectAlt(p, i)} fill sizes={sizes} priority={priority} />;
    return priority ? img : <AfterLoad>{img}</AfterLoad>;
}

function Head({ p }: { p: ProjectData }) {
    return (
        <>
            <p className="v2-tag">{typologyLabel(p.category)} · {p.subtitle}</p>
            <h1 className="v2-h2 v2-project-title">{p.title}</h1>
            {p.optionalSubtitle && <p className="v2-tag">{p.optionalSubtitle}</p>}
        </>
    );
}

// C. Récit (idée d'Emeric) : le texte avance paragraphe par paragraphe, une photo apparaît à chaque étape,
// une fois à gauche, une fois à droite. Les photos restantes suivent, toujours en alternance.
export function StyleRecit({ p }: { p: ProjectData }) {
    const paras = [p.descriptionHeader, ...p.descriptionParagraphs].filter(Boolean) as string[];
    const n = Math.max(paras.length, p.heroImages.length);
    return (
        <section className="v2-section v2-page-top v2-recit">
            <div className="v2-recit-head v2-fade" data-reveal>
                <Head p={p} />
            </div>
            <ol className="v2-recit-list">
                {Array.from({ length: n }, (_, k) => (
                    <li key={k} className={`v2-fade${k % 2 ? " is-right" : ""}`} data-reveal>
                        {k < p.heroImages.length && (
                            <span className="v2-recit-photo">
                                <Photo p={p} i={k} sizes="(max-width: 768px) 100vw, 50vw" priority={k === 0} />
                            </span>
                        )}
                        {k < paras.length && (
                            <p className={k === 0 && p.descriptionHeader ? "v2-h3 v2-recit-text" : "v2-small v2-recit-text"}>{paras[k]}</p>
                        )}
                    </li>
                ))}
            </ol>
            <Tech p={p} />
        </section>
    );
}

// D. Plein écran : grande photo d'ouverture sur tout l'écran avec le titre posé dessus,
// texte centré, puis chaque photo en pleine largeur.
export function StylePlein({ p }: { p: ProjectData }) {
    return (
        <>
            <div className="v2-plein-hero">
                <Image src={p.heroImages[0]} alt={getProjectAlt(p, 0)} fill priority sizes="100vw" />
                <div className="v2-plein-title">
                    <Head p={p} />
                </div>
            </div>
            <section className="v2-section v2-plein-text v2-fade" data-reveal>
                {p.descriptionHeader && <h2 className="v2-h3">{p.descriptionHeader}</h2>}
                {p.descriptionParagraphs.map((t) => (
                    <p className="v2-small" key={t.slice(0, 24)}>{t}</p>
                ))}
                <Tech p={p} />
            </section>
            <div className="v2-plein-photos">
                {p.heroImages.slice(1).map((src, k) => (
                    <figure key={src}>
                        <Photo p={p} i={k + 1} sizes="100vw" />
                    </figure>
                ))}
            </div>
        </>
    );
}

// E. Colonne fixe : à gauche, titre, texte et fiche technique restent à l'écran ;
// à droite, toutes les photos défilent les unes sous les autres.
export function StyleColonne({ p }: { p: ProjectData }) {
    return (
        <section className="v2-section v2-page-top v2-colfix">
            <div className="v2-colfix-info">
                <Head p={p} />
                {p.descriptionHeader && <h2 className="v2-h3">{p.descriptionHeader}</h2>}
                {p.descriptionParagraphs.map((t) => (
                    <p className="v2-small" key={t.slice(0, 24)}>{t}</p>
                ))}
                <Tech p={p} className="v2-pb-tech" />
            </div>
            <div className="v2-colfix-photos">
                {p.heroImages.map((src, k) => (
                    <figure key={src}>
                        <Image src={src} alt={getProjectAlt(p, k)} width={1600} height={1066} sizes="(max-width: 768px) 100vw, 60vw" loading={k < 2 ? "eager" : "lazy"} />
                    </figure>
                ))}
            </div>
        </section>
    );
}

// F. Magazine : en-tête, puis les photos en rangées de tailles alternées (comme les pages catégories).
const MAG = [[2, 1], [1, 1, 1], [1, 2]];
export function StyleMagazine({ p }: { p: ProjectData }) {
    const rows: { src: string; i: number; span: number }[][] = [];
    let i = 0;
    let r = 0;
    while (i < p.heroImages.length) {
        const spans = MAG[r % MAG.length];
        rows.push(p.heroImages.slice(i, i + spans.length).map((src, k) => ({ src, i: i + k, span: spans[k] })));
        i += spans.length;
        r++;
    }
    return (
        <section className="v2-section v2-page-top">
            <div className="v2-row v2-fade" data-reveal>
                <div>
                    <Head p={p} />
                </div>
                <div className="v2-project-desc">
                    {p.descriptionHeader && <h2 className="v2-h3">{p.descriptionHeader}</h2>}
                    {p.descriptionParagraphs.map((t) => (
                        <p className="v2-small" key={t.slice(0, 24)}>{t}</p>
                    ))}
                </div>
            </div>
            <Tech p={p} />
            <div className="v2-mag v2-pmag">
                {rows.map((row, k) => (
                    <ul key={k} className={`v2-mag-row${k % 3 === 0 ? " is-tall" : ""}`}>
                        {row.map(({ i: idx, span }) => (
                            <li key={idx} style={{ ["--grow" as string]: span }}>
                                <span className="v2-pmag-cell">
                                    <Photo p={p} i={idx} sizes="(max-width: 768px) 100vw, 66vw" priority={idx === 0} />
                                </span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </section>
    );
}

// G. Diptyques : les photos vont par deux, côte à côte, numérotées comme des planches ;
// le texte s'intercale après la première paire.
export function StyleDiptyque({ p }: { p: ProjectData }) {
    const pairs: number[][] = [];
    for (let k = 0; k < p.heroImages.length; k += 2) pairs.push([k, k + 1].filter((x) => x < p.heroImages.length));
    const total = String(p.heroImages.length).padStart(2, "0");
    return (
        <section className="v2-section v2-page-top">
            <div className="v2-stack v2-stack-top v2-fade" data-reveal>
                <Head p={p} />
            </div>
            {pairs.map((pair, k) => (
                <div key={k}>
                    <div className={`v2-dipt${pair.length === 1 ? " is-single" : ""} v2-fade`} data-reveal>
                        {pair.map((idx) => (
                            <figure key={idx}>
                                <span className="v2-dipt-photo">
                                    <Photo p={p} i={idx} sizes="(max-width: 768px) 100vw, 50vw" priority={idx < 2} />
                                </span>
                                <figcaption className="v2-tag">Planche {String(idx + 1).padStart(2, "0")} / {total}</figcaption>
                            </figure>
                        ))}
                    </div>
                    {k === 0 && (
                        <div className="v2-row v2-dipt-text v2-fade" data-reveal>
                            <div>{p.descriptionHeader && <h2 className="v2-h3">{p.descriptionHeader}</h2>}</div>
                            <div className="v2-project-desc">
                                {p.descriptionParagraphs.map((t) => (
                                    <p className="v2-small" key={t.slice(0, 24)}>{t}</p>
                                ))}
                                <Tech p={p} className="v2-pb-tech" />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}

// H. Horizontal : en descendant la page, les photos défilent de droite à gauche,
// précédées d'une carte avec le titre, le texte et la fiche technique.
export function StyleHorizontal({ p }: { p: ProjectData }) {
    return (
        <V2HScroll
            intro={
                <div className="v2-hs-intro">
                    <Head p={p} />
                    {p.descriptionHeader && <h2 className="v2-h3">{p.descriptionHeader}</h2>}
                    {p.descriptionParagraphs.slice(0, 2).map((t) => (
                        <p className="v2-small" key={t.slice(0, 24)}>{t}</p>
                    ))}
                    <Tech p={p} className="v2-pb-tech" />
                </div>
            }
            photos={p.heroImages.map((src, k) => (
                <span key={src} className="v2-hs-photo">
                    <Image src={src} alt={getProjectAlt(p, k)} fill sizes="70vw" loading={k < 2 ? "eager" : "lazy"} />
                </span>
            ))}
        />
    );
}
