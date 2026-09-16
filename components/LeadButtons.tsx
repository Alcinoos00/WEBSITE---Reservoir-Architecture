"use client";

import { useEffect, useId, useRef, useState } from "react";
import Clarity from "@microsoft/clarity";
import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/seo";
import { useDialogFocus } from "@/lib/useDialogFocus";

const TEL = `tel:${SITE_PHONE}`;

// Envoie un événement de lead vers Clarity (déjà installé) et, si présent, GA4.
// cta = "appel" | "email" ; loc = emplacement du bouton (hero, final, card_villa_f, ...)
export function trackLead(cta: string, loc: string) {
    try {
        Clarity.event(`lead_${cta}`);
        Clarity.setTag("lead_cta", cta);
        Clarity.setTag("lead_loc", loc);
    } catch {
        // Clarity pas encore initialisé : on ignore
    }
    try {
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        if (typeof w.gtag === "function") {
            w.gtag("event", cta === "appel" ? "click_phone" : "click_email", { lead_location: loc });
        }
    } catch {
        // gtag (GA4) pas encore branché : on ignore
    }
}

// Écouteur délégué monté dans le layout : capture les clics sur TOUS les liens téléphone et
// email du site (landing pages, /contact, footer). Les liens des landing pages portent
// data-cta / data-loc ; pour les autres, le type vient du href et l'emplacement de la page.
export function LeadTracking() {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            const link = target?.closest?.('a[data-cta], a[href^="tel:"], a[href^="mailto:"]') as HTMLAnchorElement | null;
            if (!link) return;
            const href = link.getAttribute("href") || "";
            const cta = link.getAttribute("data-cta") || (href.startsWith("tel:") ? "appel" : href.startsWith("mailto:") ? "email" : "");
            const zone = link.closest("footer") ? "footer" : link.closest("nav") ? "navbar" : "page";
            const loc = link.getAttribute("data-loc") || `${zone}:${window.location.pathname}`;
            if (cta) trackLead(cta, loc);
        };
        document.addEventListener("click", onClick, { capture: true });
        return () => document.removeEventListener("click", onClick, { capture: true });
    }, []);
    return null;
}

// Bouton email : affiche l'adresse, la copie au clic, confirme, et track la copie.
export function EmailButton({ loc, className }: { loc: string; className?: string }) {
    const [copied, setCopied] = useState(false);

    const handleClick = async () => {
        trackLead("email", loc);
        try {
            await navigator.clipboard.writeText(SITE_EMAIL);
        } catch {
            // Presse-papier indisponible (navigateur intégré, permission refusée) : on ouvre
            // la messagerie plutôt que d'afficher une confirmation fausse.
            window.location.href = `mailto:${SITE_EMAIL}`;
            return;
        }
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <button type="button" className={className} onClick={handleClick} aria-label={`Copier l'adresse email ${SITE_EMAIL}`}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                </svg>
                {copied ? "Adresse copiée" : SITE_EMAIL}
            </button>
            {/* Annonce hors du bouton : les enfants d'un bouton ne sont pas lus par les lecteurs d'écran */}
            <span className="sr-only" aria-live="polite">{copied ? "Adresse email copiée" : ""}</span>
        </>
    );
}

function MiniArrow() {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
}

function MiniPhone() {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
        </svg>
    );
}

// CTA de carte : ouvre une modale proposant l'appel ou l'email (les deux trackés).
export function CardCtaButton({ label, loc }: { label: string; loc: string }) {
    const [open, setOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const titleId = useId();
    useDialogFocus(modalRef, open);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <button type="button" className="lp-btn lp-btn--solid lp-btn--full lp-card-cta" onClick={() => setOpen(true)}>
                {label} <MiniArrow />
            </button>
            {open && (
                <div className="lp-modal-overlay" onClick={() => setOpen(false)}>
                    <div
                        className="lp-modal"
                        ref={modalRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={titleId}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button type="button" className="lp-modal-close" onClick={() => setOpen(false)} aria-label="Fermer">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <p className="lp-modal-title" id={titleId}>Parlons de votre projet</p>
                        <p className="lp-modal-sub">Appelez-nous ou copiez notre email, réponse rapide.</p>
                        <div className="lp-modal-actions">
                            <a className="lp-btn lp-btn--solid lp-btn--full" href={TEL} data-cta="appel" data-loc={loc}>
                                <MiniPhone /> {SITE_PHONE_DISPLAY}
                            </a>
                            <EmailButton loc={loc} className="lp-btn lp-btn--ghost lp-btn--full lp-btn--email" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
