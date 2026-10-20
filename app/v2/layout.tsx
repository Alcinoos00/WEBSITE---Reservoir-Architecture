import type { Metadata } from "next";
import type { ReactNode } from "react";
import V2Shell from "../accueil-v2/V2Shell";

// Site v2 complet, pour comparer avec le site en ligne. Hors index tant qu'Emeric ne l'a pas validé.
export const metadata: Metadata = {
    title: { default: "Site v2 | Reservoir Architecture", template: "%s | v2 Reservoir Architecture" },
    robots: { index: false, follow: false },
};

export default function V2Layout({ children }: { children: ReactNode }) {
    return <V2Shell>{children}</V2Shell>;
}
