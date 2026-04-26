import "./footer.css";
import Image from "next/image";

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
                    <p className="body-text footer-info">contact@reservoir-architecture.com</p>
                    <p className="body-text footer-info">+33 6 13 51 67 67</p>
                    <p className="body-text footer-info">Aix-en-Provence, région PACA, France</p>
                </div>
            </div>

            <div className="footer-divider" />

            <div className="footer-bottom">
                <div className="footer-links-bottom">
                    <a href="#accessibility" className="footer-link-small">Accessibility Statement</a>
                    <a href="#privacy" className="footer-link-small">Privacy Policy</a>
                    <a href="#terms" className="footer-link-small">Terms & Conditions</a>
                    <a href="#refund" className="footer-link-small">Refund Policy</a>
                </div>
                <div className="footer-copyright">
                    <p className="footer-link-small">© {currentYear} by Reservoir</p>
                </div>
            </div>
        </footer>
    );
}
