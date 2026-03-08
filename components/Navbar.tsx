"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={`navbar-container ${isMenuOpen ? "menu-open" : ""}`}>
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

                {/* Desktop Menu */}
                <div className="nav-links-container desktop-only">
                    <Link href="/villas" className="nav-link">VILLAS</Link>
                    <span className="nav-separator">|</span>
                    <Link href="/logements" className="nav-link">LOGEMENTS</Link>
                    <span className="nav-separator">|</span>
                    <Link href="/commerces" className="nav-link">COMMERCES</Link>
                    <span className="nav-separator">|</span>
                    <Link href="/equipements" className="nav-link">EQUIPEMENTS</Link>
                </div>

                <div className="cta-container desktop-only">
                    <Link href="/#contact" className="cta-button cta-text">
                        Nous Contacter
                    </Link>
                </div>

                {/* Hamburger Toggle */}
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

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
                <div className="mobile-nav-links">
                    <Link href="/villas" className="nav-link" onClick={closeMenu}>VILLAS</Link>
                    <Link href="/logements" className="nav-link" onClick={closeMenu}>LOGEMENTS</Link>
                    <Link href="/commerces" className="nav-link" onClick={closeMenu}>COMMERCES</Link>
                    <Link href="/equipements" className="nav-link" onClick={closeMenu}>EQUIPEMENTS</Link>
                    <Link href="/#contact" className="mobile-cta" onClick={closeMenu}>Nous Contacter</Link>
                </div>
            </div>
        </nav>
    );
}
