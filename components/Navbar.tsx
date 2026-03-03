import Image from "next/image";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <div className="navbar-content">
                <Link href="/" className="logo-container">
                    <Image
                        src="/logo-navbar.svg"
                        alt="RESERVOIR Architecture"
                        width={240}
                        height={50}
                        className="logo-img"
                        priority
                    />
                </Link>
                <div className="nav-links-container">
                    <Link href="#villas" className="nav-link">VILLAS</Link>
                    <span className="nav-separator">|</span>
                    <Link href="#logements" className="nav-link">LOGEMENTS</Link>
                    <span className="nav-separator">|</span>
                    <Link href="#commerces" className="nav-link">COMMERCES</Link>
                    <span className="nav-separator">|</span>
                    <Link href="#equipements" className="nav-link">EQUIPEMENTS</Link>
                </div>
                <div className="cta-container">
                    <Link href="#contact" className="cta-button cta-text">
                        Nous Contacter
                    </Link>
                </div>
            </div>
        </nav>
    );
}
