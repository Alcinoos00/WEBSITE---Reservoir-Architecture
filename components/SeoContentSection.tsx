import Link from "next/link";
import type { ReactNode } from "react";
import "./agency-section.css";
import "./seo-content-section.css";

type SeoContentLink = {
    href: string;
    label: string;
};

interface SeoContentSectionProps {
    eyebrow: string;
    title: string;
    subtitle?: string;
    children: ReactNode;
    links?: SeoContentLink[];
}

export default function SeoContentSection({
    eyebrow,
    title,
    subtitle,
    children,
    links = [],
}: SeoContentSectionProps) {
    return (
        <section className="agency-section seo-content-section">
            <div className="agency-container seo-content-container">
                <div className="agency-header seo-content-header">
                    <p className="subtitle agency-subtitle seo-content-eyebrow">{eyebrow}</p>
                    <h1 className="title agency-title seo-content-title">{title}</h1>
                    {subtitle && <p className="body-text seo-content-lede">{subtitle}</p>}
                </div>

                <div className="agency-content seo-content-body">{children}</div>

                {links.length > 0 && (
                    <nav className="seo-content-links" aria-label="Liens internes">
                        {links.map((link) => (
                            <Link key={link.href} href={link.href} className="seo-content-link">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </section>
    );
}
