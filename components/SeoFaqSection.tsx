import "./seo-faq-section.css";
import { noBreakHyphens } from "./noBreakHyphens";

export type SeoFaqItem = { q: string; a: string };

interface SeoFaqSectionProps {
    title: string;
    items: SeoFaqItem[];
    eyebrow?: string;
}

export default function SeoFaqSection({ title, items, eyebrow = "Questions fréquentes" }: SeoFaqSectionProps) {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <section className="seo-faq-section">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <div className="seo-faq-container">
                <p className="subtitle seo-faq-eyebrow">{eyebrow}</p>
                <h2 className="title seo-faq-title">{noBreakHyphens(title)}</h2>
                <div className="seo-faq-list">
                    {items.map((f) => (
                        <details className="seo-faq-item" key={f.q}>
                            <summary className="seo-faq-question">
                                <span>{noBreakHyphens(f.q)}</span>
                                <span className="seo-faq-icon" aria-hidden="true" />
                            </summary>
                            <p className="body-text seo-faq-answer">{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
