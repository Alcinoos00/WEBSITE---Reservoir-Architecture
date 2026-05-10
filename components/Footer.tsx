import "./footer.css";
import Image from "next/image";
import Link from "next/link";
import { SITE_ADDRESS, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/seo";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-container" id="contact">
            <div className="footer-top">
                <div className="footer-branding">
                    <Image
                        src="/images/ui/logo_light.svg"
                        alt="Reservoir Architecture"
                        width={200}
                        height={40}
                        className="footer-logo"
                    />
                </div>
                <div className="footer-contact">
                    <p className="body-text footer-info"><a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></p>
                    <p className="body-text footer-info"><a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a></p>
                    <p className="body-text footer-info">{SITE_ADDRESS}</p>
                </div>
            </div>

            <div className="footer-divider" />

            <div className="footer-bottom">
                <div className="footer-links-bottom">
                    <Link href="/contact" className="footer-link-small">Contact</Link>
                    <Link href="/villas" className="footer-link-small">Villas</Link>
                    <Link href="/logements" className="footer-link-small">Logements</Link>
                    <Link href="/commerces" className="footer-link-small">Commerces</Link>
                    <Link href="/equipements" className="footer-link-small">Équipements</Link>
                </div>
                <div className="footer-copyright">
                    <p className="footer-link-small">Â© {currentYear} Reservoir Architecture</p>
                </div>
            </div>
        </footer>
    );
}
