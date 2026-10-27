import type { ReactNode } from "react";
import V2Shell from "../accueil-v2/V2Shell";

// Site en ligne (v2, à la racine depuis le 2026-10-27). Les wrappers .main-container / .content-wrapper
// reprennent la structure de l'ancien layout racine, sur laquelle v2.css s'appuie.
export default function SiteLayout({ children }: { children: ReactNode }) {
    return (
        <div className="main-container">
            <div className="content-wrapper">
                <V2Shell>{children}</V2Shell>
            </div>
        </div>
    );
}
