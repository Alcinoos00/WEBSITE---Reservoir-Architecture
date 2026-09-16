import type { ReactNode } from "react";

// Empêche la coupure d'un titre sur le trait d'union d'un nom composé (« Aix-en- / Provence »).
// Le texte reste identique pour les moteurs : seul un <span> sans retour à la ligne l'entoure.
export function noBreakHyphens(text: string): ReactNode {
    const parts = text.split(/(\S*\p{L}-\p{L}\S*)/u);
    if (parts.length === 1) return text;
    return parts.map((part, i) =>
        /\p{L}-\p{L}/u.test(part) ? (
            <span key={i} className="nowrap">
                {part}
            </span>
        ) : (
            part
        ),
    );
}
