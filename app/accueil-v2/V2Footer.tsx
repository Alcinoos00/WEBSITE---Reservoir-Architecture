import Image from "next/image";
import Link from "next/link";
import {
    FACEBOOK_URL,
    GOOGLE_REVIEWS_URL,
    HOUZZ_URL,
    INSTAGRAM_URL,
    LINKEDIN_URL,
    PINTEREST_URL,
    SITE_EMAIL,
    SITE_PHONE,
    SITE_PHONE_DISPLAY,
} from "@/lib/seo";
import { v2 } from "./v2Links";

// Réseaux : icônes officielles (Simple Icons, CC0) dans public/images/ui/social.
// LinkedIn : icône Bootstrap Icons (MIT) ; affiché dès que LINKEDIN_URL est renseigné dans lib/seo.ts.
const SOCIALS = [
    { name: "Instagram", href: INSTAGRAM_URL, icon: "instagram" },
    { name: "Facebook", href: FACEBOOK_URL, icon: "facebook" },
    { name: "LinkedIn", href: LINKEDIN_URL, icon: "linkedin" },
    { name: "Houzz", href: HOUZZ_URL, icon: "houzz" },
    { name: "Pinterest", href: PINTEREST_URL, icon: "pinterest" },
    { name: "Avis Google", href: GOOGLE_REVIEWS_URL, icon: "google" },
];

// Pied de page réorganisé le 2026-10-30, condensé le 2026-11-01 : logo et réseaux sur une ligne,
// contact en taille de texte courant, liens à la suite (séparés par des points) au lieu de colonnes.
// Tous les liens sont conservés (pages Aix en particulier, utiles au référencement).
export default function V2Footer() {
    return (
        <footer className="v2-footer v2-foot v2-ft">
            <div className="v2-ft-top">
                <Image src="/images/ui/logo-navbar.svg" alt="Reservoir Architecture" width={335} height={74} className="v2-footer-logo v2-ft-logo" />
                <ul className="v2-ft-social" aria-label="Suivre l'agence">
                    {SOCIALS.filter((s) => s.href).map((s) => (
                        <li key={s.icon}>
                            <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}>
                                <Image src={`/images/ui/social/${s.icon}.svg`} alt="" width={22} height={22} unoptimized />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="v2-ft-grid">
                <div className="v2-ft-block">
                    <p className="v2-label">Contact</p>
                    <p className="v2-ft-line">
                        <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>
                        <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                    </p>
                </div>

                <nav className="v2-ft-block" aria-label="Réalisations">
                    <p className="v2-label">Réalisations</p>
                    <p className="v2-ft-line">
                        <Link href={v2("/villas")}>Villas</Link>
                        <Link href={v2("/logements")}>Logements</Link>
                        <Link href={v2("/commerces")}>Commerces</Link>
                        <Link href={v2("/equipements")}>Équipements</Link>
                    </p>
                </nav>

                <nav className="v2-ft-block" aria-label="À Aix-en-Provence">
                    <p className="v2-label">À Aix-en-Provence</p>
                    <p className="v2-ft-line">
                        <Link href={v2("/villas-aix-en-provence")}>Architecte villa</Link>
                        <Link href={v2("/commerces-aix-en-provence")}>Architecte commerce</Link>
                        <Link href={v2("/logements-aix-en-provence")}>Architecte logements</Link>
                        <Link href={v2("/equipements-aix-en-provence")}>Équipements publics</Link>
                        <Link href={v2("/etudes")}>Études avant achat</Link>
                    </p>
                </nav>
            </div>

            <p className="v2-footer-copy">
                © {new Date().getFullYear()} Reservoir Architecture · Architecte DPLG · Ordre des architectes S16033 · <Link href={v2("/mentions-legales")}>Mentions légales</Link>
            </p>
        </footer>
    );
}
