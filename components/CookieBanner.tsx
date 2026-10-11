"use client";

import { useEffect, useState } from "react";
import "./cookie-banner.css";
import { CONSENT_OPEN_EVENT, readConsent, writeConsent, type ConsentChoice } from "@/lib/consent";

// Bandeau de consentement : « Refuser » et « Accepter » ont le même poids visuel.
// Il s'affiche tant que le visiteur n'a pas choisi, et peut être rouvert depuis le pied de page.
export default function CookieBanner() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (readConsent() === null) setOpen(true);
        const reopen = () => setOpen(true);
        window.addEventListener(CONSENT_OPEN_EVENT, reopen);
        return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
    }, []);

    const choose = (choice: ConsentChoice) => {
        const previous = readConsent();
        writeConsent(choice);
        setOpen(false);
        // Retrait d'un accord déjà donné : on recharge pour arrêter les outils déjà lancés.
        if (previous === "granted" && choice === "denied") window.location.reload();
    };

    if (!open) return null;

    return (
        <div className="cc-banner" role="dialog" aria-live="polite" aria-label="Gestion des cookies">
            <p className="cc-text">
                Nous utilisons Microsoft Clarity et Google Analytics pour mesurer la fréquentation du site et améliorer ses pages. Ces outils ne sont activés qu’avec votre accord. Vous pouvez changer d’avis à tout moment via « Gérer les cookies » en bas de page.
            </p>
            <div className="cc-actions">
                <button type="button" className="cc-btn" onClick={() => choose("denied")}>
                    Refuser
                </button>
                <button type="button" className="cc-btn" onClick={() => choose("granted")}>
                    Accepter
                </button>
            </div>
        </div>
    );
}

export function CookieSettingsLink({ className }: { className?: string }) {
    return (
        <button type="button" className={`cc-settings-link ${className ?? ""}`} onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}>
            Gérer les cookies
        </button>
    );
}
