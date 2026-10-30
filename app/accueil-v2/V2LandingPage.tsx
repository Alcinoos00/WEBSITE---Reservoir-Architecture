import Image from "next/image";
import Link from "next/link";
import AfterLoad from "@/components/AfterLoad";
import { noBreakHyphens } from "@/components/noBreakHyphens";
import type { LandingData } from "@/components/LandingPage";
import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/seo";
import { v2 } from "./v2Links";
import V2Reviews from "./V2Reviews";
import V2Cta from "./V2Cta";

const TEL = `tel:${SITE_PHONE}`;

// Landing v2 : mêmes contenus que la landing en ligne (lib/landings/*), mise en page v2.
export default function V2LandingPage({ data }: { data: LandingData }) {
    const { hero, realisations, reassurance, local, faq, finalCta } = data;
    // Données structurées FAQ, comme sur la landing v1 (résultats enrichis Google)
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <section className="v2-section v2-page-top">
                <div className="v2-row v2-fade" data-reveal>
                    <div>
                        <p className="v2-tag">{hero.eyebrow}</p>
                        <h1 className="v2-h2">{noBreakHyphens(hero.h1)}</h1>
                    </div>
                    <div>
                        <p className="v2-small">{hero.sub}</p>
                        <p className="v2-tag v2-landing-trust">{hero.trust}</p>
                        <div className="v2-cta-actions">
                            <a href={TEL} className="v2-btn">{hero.ctaPrimary} · {SITE_PHONE_DISPLAY}</a>
                            <a href={`mailto:${SITE_EMAIL}`} className="v2-btn v2-btn-ghost">{hero.ctaEmail}</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="v2-landing-hero">
                <Image src={hero.img} alt={hero.alt} fill priority sizes="100vw" />
            </div>

            <section className="v2-section">
                <div className="v2-stack v2-fade" data-reveal>
                    <h2 className="v2-h2">{realisations.eyebrow}</h2>
                    <p className="v2-small">{realisations.lead}</p>
                </div>
                <ul className="v2-cards">
                    {realisations.projects.map((p) => (
                        <li key={p.title} className="v2-fade" data-reveal>
                            <span className="v2-works-photo v2-cards-photo">
                                <AfterLoad>
                                    <Image src={p.img} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
                                </AfterLoad>
                            </span>
                            <h3 className="v2-domain-caption">{p.title}</h3>
                            <p className="v2-tag">{p.specs.map((s) => s.label).join(" · ")}</p>
                            <p className="v2-small">{p.desc}</p>
                            <a href={TEL} className="v2-cards-link">{p.cta}</a>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="v2-section">
                <div className="v2-stack v2-fade" data-reveal>
                    <h2 className="v2-h2">{reassurance.reasonsEyebrow}</h2>
                </div>
                <ol className="v2-reasons">
                    {reassurance.reasons.map((r, i) => (
                        <li key={r.title} className="v2-fade" data-reveal>
                            <span className="v2-list-num">{String(i + 1).padStart(2, "0")}</span>
                            <h3 className="v2-h3">{r.title}</h3>
                            <p className="v2-small">{r.text}</p>
                        </li>
                    ))}
                </ol>
                <div className="v2-stack v2-steps-head v2-fade" data-reveal>
                    <h2 className="v2-h2">{reassurance.stepsEyebrow}</h2>
                </div>
                <ol className="v2-steps">
                    {reassurance.steps.map((s, i) => (
                        <li key={s.title} className="v2-fade" data-reveal>
                            <span className="v2-steps-num">{String(i + 1).padStart(2, "0")}</span>
                            <div>
                                <h3 className="v2-h3">{s.title}</h3>
                                <p className="v2-small">{s.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
                <div className="v2-cta-actions">
                    <a href={TEL} className="v2-btn">{reassurance.cta}</a>
                    {reassurance.secondaryCta && (
                        <Link href={v2(reassurance.secondaryCta.href)} className="v2-btn v2-btn-ghost">{reassurance.secondaryCta.label}</Link>
                    )}
                </div>
            </section>

            <section className="v2-section">
                <div className="v2-stack v2-fade" data-reveal>
                    <p className="v2-tag">{local.eyebrow}</p>
                    <h2 className="v2-h2">{noBreakHyphens(local.city)}</h2>
                </div>
                <div className="v2-architect v2-landing-local">
                    <div className="v2-architect-head v2-fade" data-reveal>
                        <div className="v2-architect-photo">
                            <AfterLoad>
                                <Image src={local.img} alt={local.alt} fill sizes="(max-width: 768px) 120px, 300px" />
                            </AfterLoad>
                        </div>
                        <div>
                            <p className="v2-h3 v2-architect-name">Serge Ettore</p>
                            <p className="v2-tag">Architecte DPLG, fondateur</p>
                        </div>
                    </div>
                    <div className="v2-architect-text v2-fade" data-reveal>
                        {local.paragraphs.map((t) => (
                            <p className="v2-small" key={t.slice(0, 24)}>{t}</p>
                        ))}
                        <div className="v2-cta-actions">
                            <a href={TEL} className="v2-btn">{local.cta}</a>
                        </div>
                        <V2Reviews />
                    </div>
                </div>
            </section>

            <section className="v2-section">
                <div className="v2-row">
                    <h2 className="v2-h2 v2-fade" data-reveal>{faq.eyebrow}</h2>
                    <div className="v2-faq v2-fade" data-reveal>
                        {faq.items.map((f) => (
                            <details key={f.q}>
                                <summary>{f.q}</summary>
                                <p className="v2-small">{f.a}</p>
                            </details>
                        ))}
                        <div className="v2-cta-actions">
                            <Link href={v2("/contact")} className="v2-btn v2-btn-ghost">{faq.cta}</Link>
                        </div>
                    </div>
                </div>
            </section>

            <V2Cta title={finalCta.h2} text={finalCta.p} img={finalCta.img} alt={finalCta.h2} />
        </>
    );
}
