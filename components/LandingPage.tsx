import "./landing.css";
import { SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/seo";
import { LeadTracking, EmailButton, CardCtaButton } from "./LeadButtons";

const TEL = `tel:${SITE_PHONE}`;

export type Spec = { icon: string; label: string };
export type ProjectCard = {
    title: string;
    img: string;
    alt: string;
    desc: string;
    specs: Spec[];
    cta: string;
    loc: string;
};
export type Reason = { icon: string; title: string; text: string };
export type Step = { title: string; text: string };
export type FaqItem = { q: string; a: string };

export type LandingData = {
    hero: {
        eyebrow: string;
        h1: string;
        sub: string;
        trust: string;
        img: string;
        alt: string;
        ctaPrimary: string;
        ctaEmail: string;
    };
    realisations: { eyebrow: string; lead: string; projects: ProjectCard[] };
    reassurance: {
        reasonsEyebrow: string;
        reasons: Reason[];
        stepsEyebrow: string;
        steps: Step[];
        cta: string;
        ctaLoc: string;
    };
    local: {
        img: string;
        alt: string;
        eyebrow: string;
        city: string;
        paragraphs: string[];
        cta: string;
        ctaLoc: string;
    };
    faq: { eyebrow: string; items: FaqItem[]; cta: string; ctaLoc: string };
    finalCta: { img: string; h2: string; p: string; ctaPrimary: string; ctaEmail: string };
};

function ArrowIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
        </svg>
    );
}

function StarIcon() {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
    );
}

function SpecIcon({ name }: { name: string }) {
    const p = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
    if (name === "surface") {
        return (
            <svg {...p}>
                <path d="M3 16V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
                <path d="M7 6v3M11 6v2M15 6v2M19 6v3" />
            </svg>
        );
    }
    if (name === "units") {
        return (
            <svg {...p}>
                <path d="M3 21h18" />
                <rect x="5" y="9" width="6" height="12" />
                <rect x="13" y="3" width="6" height="18" />
            </svg>
        );
    }
    if (name === "tag") {
        return (
            <svg {...p}>
                <path d="M3 3h7l11 11-7 7L3 10V3Z" />
                <circle cx="7.5" cy="7.5" r="1.5" />
            </svg>
        );
    }
    if (name === "mission") {
        return (
            <svg {...p}>
                <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
                <polyline points="14 3 14 8 19 8" />
            </svg>
        );
    }
    return (
        <svg {...p}>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function ReasonIcon({ name }: { name: string }) {
    const p = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
    if (name === "pin") {
        return (
            <svg {...p}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        );
    }
    if (name === "building") {
        return (
            <svg {...p}>
                <path d="M3 21h18" />
                <path d="M5 21V7l8-4v18" />
                <path d="M19 21V11l-6-4" />
                <path d="M9 9h0M9 12h0M9 15h0" />
            </svg>
        );
    }
    if (name === "store") {
        return (
            <svg {...p}>
                <path d="M3 9 4.5 4h15L21 9" />
                <path d="M4 9v11h16V9" />
                <path d="M4 9h16" />
                <path d="M9 20v-6h6v6" />
            </svg>
        );
    }
    if (name === "award") {
        return (
            <svg {...p}>
                <circle cx="12" cy="8" r="5" />
                <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
            </svg>
        );
    }
    if (name === "route") {
        return (
            <svg {...p}>
                <circle cx="6" cy="19" r="2" />
                <circle cx="18" cy="5" r="2" />
                <path d="M8 19h7a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h7" />
            </svg>
        );
    }
    return (
        <svg {...p}>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6Z" />
            <polyline points="9 12 11 14 15 10" />
        </svg>
    );
}

export default function LandingPage({ data }: { data: LandingData }) {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faq.items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <main className="lp">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <LeadTracking />

            {/* 1. HERO */}
            <section className="lp-hero">
                <img className="lp-hero-bg" src={data.hero.img} alt={data.hero.alt} />
                <div className="lp-hero-overlay" />
                <div className="lp-inner lp-hero-inner">
                    <p className="lp-eyebrow lp-hero-eyebrow">{data.hero.eyebrow}</p>
                    <h1>{data.hero.h1}</h1>
                    <p className="lp-hero-sub">{data.hero.sub}</p>
                    <div className="lp-cta-row">
                        <a className="lp-btn lp-btn--on-dark lp-btn--solid" href={TEL} data-cta="appel" data-loc="hero">
                            <PhoneIcon /> {SITE_PHONE_DISPLAY}
                        </a>
                        <EmailButton loc="hero" className="lp-btn lp-btn--on-dark lp-btn--ghost lp-btn--email" />
                    </div>
                    <p className="lp-hero-trust">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="9" />
                            <polyline points="8.5 12.5 11 15 16 9.5" />
                        </svg>
                        {data.hero.trust}
                    </p>
                </div>
            </section>

            {/* 2. NOS RÉALISATIONS */}
            <section className="lp-section lp-section--cream">
                <div className="lp-inner">
                    <div className="lp-section-head">
                        <p className="lp-eyebrow">{data.realisations.eyebrow}</p>
                        <p className="lp-section-lead">{data.realisations.lead}</p>
                    </div>
                    <div className="lp-cards">
                        {data.realisations.projects.map((proj) => (
                            <article className="lp-card" key={proj.title}>
                                <div className="lp-card-imgwrap">
                                    <img className="lp-card-img" src={proj.img} alt={proj.alt} loading="lazy" />
                                </div>
                                <div className="lp-card-body">
                                    <h3 className="lp-card-title">{proj.title}</h3>
                                    <p className="lp-card-desc">{proj.desc}</p>
                                    <div className="lp-card-specs">
                                        {proj.specs.filter((s) => s.icon !== "pin").map((s) => (
                                            <span className="lp-spec" key={s.label}>
                                                <SpecIcon name={s.icon} />
                                                {s.label}
                                            </span>
                                        ))}
                                    </div>
                                    <CardCtaButton label={proj.cta} loc={proj.loc} />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. RÉASSURANCE + ÉTAPES */}
            <section className="lp-section lp-section--white">
                <div className="lp-inner">
                    <div className="lp-two-col">
                        <div>
                            <p className="lp-eyebrow">{data.reassurance.reasonsEyebrow}</p>
                            <div className="lp-reasons">
                                {data.reassurance.reasons.map((r) => (
                                    <div className="lp-reason" key={r.title}>
                                        <span className="lp-reason-icon">
                                            <ReasonIcon name={r.icon} />
                                        </span>
                                        <div>
                                            <h3>{r.title}</h3>
                                            <p>{r.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="lp-eyebrow">{data.reassurance.stepsEyebrow}</p>
                            <div className="lp-steps">
                                {data.reassurance.steps.map((s, i) => (
                                    <div className="lp-step" key={s.title}>
                                        <span className="lp-step-num">{i + 1}</span>
                                        <div>
                                            <h3>{s.title}</h3>
                                            <p>{s.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lp-center-cta">
                        <a className="lp-btn lp-btn--solid" href={TEL} data-cta="appel" data-loc={data.reassurance.ctaLoc}>
                            {data.reassurance.cta} <ArrowIcon />
                        </a>
                    </div>
                </div>
            </section>

            {/* 4. ANCRAGE LOCAL */}
            <section className="lp-section lp-section--cream lp-local">
                <div className="lp-inner">
                    <div className="lp-local-grid">
                        <div className="lp-local-imgwrap">
                            <img className="lp-local-img" src={data.local.img} alt={data.local.alt} loading="lazy" />
                        </div>
                        <div>
                            <p className="lp-eyebrow">{data.local.eyebrow}</p>
                            <h2>{data.local.city}</h2>
                            {data.local.paragraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                            <div className="lp-cta-row">
                                <a className="lp-btn lp-btn--solid" href={TEL} data-cta="appel" data-loc={data.local.ctaLoc}>
                                    {data.local.cta} <ArrowIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lp-reviews">
                        <div className="lp-reviews-head">
                            <span className="lp-reviews-score">5,0<span className="lp-reviews-max">/5</span></span>
                            <span className="lp-stars" aria-label="Note 5 sur 5">
                                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                            </span>
                            <span className="lp-reviews-label">Avis clients vérifiés sur Archidvisor</span>
                            <a className="lp-reviews-link" href="https://www.archidvisor.com/professionnels/architectes/provence-alpes-cote-d-azur/bouches-du-rhone/aix-en-provence-13/reservoir-architecture" target="_blank" rel="noopener noreferrer">
                                Voir tous les avis <ArrowIcon />
                            </a>
                        </div>
                        <div className="lp-reviews-list">
                            <blockquote className="lp-review">« Très disponible, rapide, de bons conseils. »<cite>Celsio C.</cite></blockquote>
                            <blockquote className="lp-review">« Il a été très rapide et précis. Merci pour votre professionnalisme et votre compétence. »<cite>Hamid Y.</cite></blockquote>
                            <blockquote className="lp-review">« Bien à l’écoute, a parfaitement compris ce que j’attendais. »<cite>Axel A.</cite></blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. QUESTIONS FRÉQUENTES */}
            <section className="lp-section lp-section--white">
                <div className="lp-inner">
                    <div className="lp-section-head">
                        <p className="lp-eyebrow">{data.faq.eyebrow}</p>
                    </div>
                    <div className="lp-faq-grid">
                        {data.faq.items.map((f) => (
                            <details className="lp-faq-item" key={f.q}>
                                <summary>
                                    {f.q}
                                    <svg className="lp-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </summary>
                                <p className="lp-faq-answer">{f.a}</p>
                            </details>
                        ))}
                    </div>
                    <div className="lp-center-cta">
                        <a className="lp-btn lp-btn--ghost" href={TEL} data-cta="appel" data-loc={data.faq.ctaLoc}>
                            {data.faq.cta} <ArrowIcon />
                        </a>
                    </div>
                </div>
            </section>

            {/* 6. GROS CTA FINAL */}
            <section className="lp-final">
                <img className="lp-final-bg" src={data.finalCta.img} alt="" aria-hidden="true" />
                <div className="lp-final-overlay" />
                <div className="lp-inner lp-final-inner">
                    <h2>{data.finalCta.h2}</h2>
                    <p>{data.finalCta.p}</p>
                    <div className="lp-cta-row">
                        <a className="lp-btn lp-btn--on-dark lp-btn--solid" href={TEL} data-cta="appel" data-loc="final">
                            <PhoneIcon /> {SITE_PHONE_DISPLAY}
                        </a>
                        <EmailButton loc="final" className="lp-btn lp-btn--on-dark lp-btn--ghost lp-btn--email" />
                    </div>
                </div>
            </section>

            {/* Barre d'appel fixe (mobile) */}
            <div className="lp-mobile-cta">
                <a className="lp-btn lp-btn--solid" href={TEL} data-cta="appel" data-loc="mobile_sticky">
                    <PhoneIcon /> Appeler {SITE_PHONE_DISPLAY}
                </a>
            </div>
        </main>
    );
}
