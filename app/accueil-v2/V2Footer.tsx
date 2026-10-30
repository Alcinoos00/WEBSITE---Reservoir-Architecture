import Image from "next/image";
import Link from "next/link";
import {
    FACEBOOK_URL,
    GOOGLE_REVIEWS_URL,
    HOUZZ_URL,
    INSTAGRAM_URL,
    PINTEREST_URL,
    SITE_EMAIL,
    SITE_PHONE,
    SITE_PHONE_DISPLAY,
} from "@/lib/seo";
import { v2 } from "./v2Links";

// Réseaux : icônes officielles (Simple Icons, CC0) dans public/images/ui/social.
// LinkedIn à ajouter quand l'adresse de la page sera connue (icône absente de Simple Icons).
const SOCIALS = [
    { name: "Instagram", href: INSTAGRAM_URL, icon: "instagram" },
    { name: "Facebook", href: FACEBOOK_URL, icon: "facebook" },
    { name: "Houzz", href: HOUZZ_URL, icon: "houzz" },
    { name: "Pinterest", href: PINTEREST_URL, icon: "pinterest" },
    { name: "Avis Google", href: GOOGLE_REVIEWS_URL, icon: "google" },
];

// Pied de page réorganisé le 2026-10-30 : logo, contact, réalisations, pages Aix, réseaux, ligne légale.
export default function V2Footer() {
    return (
        <footer className="v2-footer v2-foot">
            <div className="v2-foot-grid">
                <div className="v2-foot-brand">
                    <Image src="/images/ui/logo-navbar.svg" alt="Reservoir Architecture" width={335} height={74} className="v2-footer-logo" />
                </div>

                <div className="v2-foot-col v2-foot-contact">
                    <p className="v2-label">Contact</p>
                    <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>
                    <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                </div>

                <nav className="v2-foot-col" aria-label="Réalisations">
                    <p className="v2-label">Réalisations</p>
                    <Link href={v2("/villas")}>Villas</Link>
                    <Link href={v2("/logements")}>Logements</Link>
                    <Link href={v2("/commerces")}>Commerces</Link>
                    <Link href={v2("/equipements")}>Équipements</Link>
                </nav>

                <nav className="v2-foot-col" aria-label="À Aix-en-Provence">
                    <p className="v2-label">À Aix-en-Provence</p>
                    <Link href={v2("/villas-aix-en-provence")}>Architecte villa</Link>
                    <Link href={v2("/commerces-aix-en-provence")}>Architecte commerce</Link>
                    <Link href={v2("/logements-aix-en-provence")}>Architecte logements</Link>
                    <Link href={v2("/equipements-aix-en-provence")}>Équipements publics</Link>
                </nav>

                <div className="v2-foot-col v2-foot-social">
                    <p className="v2-label">Suivre l&apos;agence</p>
                    <ul>
                        {SOCIALS.map((s) => (
                            <li key={s.icon}>
                                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}>
                                    <Image src={`/images/ui/social/${s.icon}.svg`} alt="" width={22} height={22} unoptimized />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className="v2-footer-copy">
                © {new Date().getFullYear()} Reservoir Architecture · Architecte DPLG · Ordre des architectes S16033 · <Link href={v2("/mentions-legales")}>Mentions légales</Link>
            </p>
        </footer>
    );
}
