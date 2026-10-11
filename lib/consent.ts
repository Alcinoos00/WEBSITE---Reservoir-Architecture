// Consentement aux traceurs de mesure d'audience (Microsoft Clarity, Google Analytics).
// Le choix du visiteur est gardé dans son navigateur. Tant qu'il n'a pas accepté,
// aucun de ces outils n'est chargé.

export type ConsentChoice = "granted" | "denied";

const KEY = "ra-cookie-consent";
export const CONSENT_EVENT = "ra-consent-change";
export const CONSENT_OPEN_EVENT = "ra-consent-open";

export function readConsent(): ConsentChoice | null {
    try {
        const v = window.localStorage.getItem(KEY);
        return v === "granted" || v === "denied" ? v : null;
    } catch {
        return null;
    }
}

export function writeConsent(choice: ConsentChoice) {
    try {
        window.localStorage.setItem(KEY, choice);
    } catch {
        // Stockage indisponible (navigation privée stricte) : le choix vaut pour cette page seulement.
    }
    window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_EVENT, { detail: choice }));
}

// Exécute `run` dès que le consentement est donné (tout de suite s'il l'est déjà).
export function onConsentGranted(run: () => void): () => void {
    if (readConsent() === "granted") {
        run();
        return () => {};
    }
    const handler = (e: Event) => {
        if ((e as CustomEvent<ConsentChoice>).detail === "granted") {
            window.removeEventListener(CONSENT_EVENT, handler);
            run();
        }
    };
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
}
