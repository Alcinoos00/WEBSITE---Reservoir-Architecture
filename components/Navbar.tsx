"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.css";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const isActive = (href: string) => pathname.startsWith(href);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={`navbar-container ${isMenuOpen ? "menu-open" : ""} ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-content">
                <Link href="/" className="logo-container" onClick={closeMenu}>
                    <Image
                        src="/images/ui/logo-navbar.svg"
                        alt="RESERVOIR Architecture"
                        width={240}
                        height={50}
                        className="logo-img"
                        priority
                    />
                </Link>

                <div className="nav-links-container desktop-only">
                    <Link href="/villas" className={`nav-link ${isActive("/villas") ? "active" : ""}`}>VILLAS</Link>
                    <span className="nav-separator">|</span>
                    <Link href="/logements" className={`nav-link ${isActive("/logements") ? "active" : ""}`}>LOGEMENTS</Link>
                    <span className="nav-separator">|</span>
                    <Link href="/commerces" className={`nav-link ${isActive("/commerces") ? "active" : ""}`}>COMMERCES</Link>
                    <span className="nav-separator">|</span>
                    <Link href="/equipements" className={`nav-link ${isActive("/equipements") ? "active" : ""}`}>EQUIPEMENTS</Link>
                </div>

                <div className="cta-container desktop-only">
                    <Link href="/contact" className="cta-button cta-text">
                        Nous Contacter
                    </Link>
                </div>

                <button
                    className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
                <div className="mobile-nav-links">
                    <Link href="/villas" className={`nav-link ${isActive("/villas") ? "active" : ""}`} onClick={closeMenu}>VILLAS</Link>
                    <Link href="/logements" className={`nav-link ${isActive("/logements") ? "active" : ""}`} onClick={closeMenu}>LOGEMENTS</Link>
                    <Link href="/commerces" className={`nav-link ${isActive("/commerces") ? "active" : ""}`} onClick={closeMenu}>COMMERCES</Link>
                    <Link href="/equipements" className={`nav-link ${isActive("/equipements") ? "active" : ""}`} onClick={closeMenu}>EQUIPEMENTS</Link>
                    <Link href="/contact" className="mobile-cta" onClick={closeMenu}>Nous Contacter</Link>
                </div>
            </div>
        </nav>
    );
}
