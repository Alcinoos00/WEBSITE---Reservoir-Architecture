// Consentement aux traceurs de mesure d'audience (Microsoft Clarity, Google Analytics).
// Le choix du visiteur est gardé dans son navigateur. Tant qu'il n'a pas accepté,
// aucun de ces outils n'est chargé.

export type ConsentChoice = "granted" | "denied";

const KEY = "ra-cookie-consent";
export const CONSENT_EVENT = "ra-consent-change";
export const CONSENT_OPEN_EVENT = "ra-consent-open";

// Le choix est redemandé au bout de 6 mois.
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182;

export function readConsent(): ConsentChoice | null {
    try {
        const raw = window.localStorage.getItem(KEY);
        if (!raw) return null;
        const { v, t } = JSON.parse(raw) as { v?: string; t?: number };
        if (typeof t !== "number" || Date.now() - t > MAX_AGE_MS) return null;
        return v === "granted" || v === "denied" ? v : null;
    } catch {
        return null;
    }
}

export function writeConsent(choice: ConsentChoice) {
    try {
        window.localStorage.setItem(KEY, JSON.stringify({ v: choice, t: Date.now() }));
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
