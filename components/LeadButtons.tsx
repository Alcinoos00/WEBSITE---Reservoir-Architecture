"use client";

import { useEffect, useState } from "react";
import Clarity from "@microsoft/clarity";
import { SITE_EMAIL } from "@/lib/seo";

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

// Écouteur délégué : capture les clics sur tous les liens téléphone (a[data-cta]).
export function LeadTracking() {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            const link = target?.closest?.("a[data-cta]") as HTMLElement | null;
            if (!link) return;
            const cta = link.getAttribute("data-cta") || "";
            const loc = link.getAttribute("data-loc") || "";
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
        try {
            await navigator.clipboard.writeText(SITE_EMAIL);
        } catch {
            // Presse-papier bloqué : on track quand même l'intention
        }
        setCopied(true);
        trackLead("email", loc);
        window.setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button type="button" className={className} onClick={handleClick} aria-label={`Copier l'adresse email ${SITE_EMAIL}`}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
            </svg>
            {copied ? "Adresse copiée" : SITE_EMAIL}
        </button>
    );
}
