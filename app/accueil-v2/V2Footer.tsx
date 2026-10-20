import Image from "next/image";
import Link from "next/link";
import { FACEBOOK_URL, HOUZZ_URL, INSTAGRAM_URL, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/seo";
import { v2 } from "./v2Links";

export default function V2Footer() {
    return (
        <footer className="v2-footer">
            <div className="v2-footer-top">
                <Image src="/images/ui/logo-navbar.svg" alt="Reservoir Architecture" width={335} height={74} className="v2-footer-logo" />
                <div className="v2-footer-col">
                    <p className="v2-label">Découvrir</p>
                    <Link href={v2("/villas")}>Villas</Link>
                    <Link href={v2("/logements")}>Logements</Link>
                    <Link href={v2("/commerces")}>Commerces</Link>
                    <Link href={v2("/equipements")}>Équipements</Link>
                </div>
                <div className="v2-footer-col">
                    <p className="v2-label">Aix-en-Provence</p>
                    <Link href={v2("/villas-aix-en-provence")}>Architecte villa</Link>
                    <Link href={v2("/commerces-aix-en-provence")}>Architecte commerce</Link>
                    <Link href={v2("/logements-aix-en-provence")}>Architecte logements</Link>
                    <Link href={v2("/equipements-aix-en-provence")}>Équipements publics</Link>
                </div>
                <div className="v2-footer-col">
                    <p className="v2-label">Contact</p>
                    <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>
                    <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href={HOUZZ_URL} target="_blank" rel="noopener noreferrer">Houzz</a>
                </div>
            </div>
            <p className="v2-footer-copy">© {new Date().getFullYear()} Reservoir Architecture · Architecte DPLG à Aix-en-Provence</p>
        </footer>
    );
}
