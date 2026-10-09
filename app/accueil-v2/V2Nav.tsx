"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const LINKS = [
    { href: "/villas", label: "Villas" },
    { href: "/logements", label: "Logements" },
    { href: "/commerces", label: "Commerces" },
    { href: "/equipements", label: "Équipements" },
    { href: "/contact", label: "Contact" },
];

// Barre du haut façon Teras : icône à gauche, « Contact » et menu à droite.
// Elle se cache quand on descend et revient dès qu'on remonte.
export default function V2Nav() {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const last = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setHidden(y > 120 && y > last.current);
            last.current = y;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <header className={`v2-nav${hidden && !open ? " is-hidden" : ""}`}>
                <Link href="/" className="v2-nav-logo" aria-label="Reservoir Architecture, accueil">
                    <Image src="/images/ui/icon_dark.svg" alt="" width={28} height={28} />
                </Link>
                <div className="v2-nav-right">
                    <Link href="/contact" className="v2-nav-link">Contact</Link>
                    <button
                        type="button"
                        className={`v2-burger${open ? " is-open" : ""}`}
                        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={open}
                        aria-controls="v2-menu"
                        onClick={() => setOpen((o) => !o)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>
            <div id="v2-menu" className={`v2-menu${open ? " is-open" : ""}`} inert={!open}>
                <nav aria-label="Menu principal">
                    <ul>
                        {LINKS.map((l, i) => (
                            <li key={l.href} style={{ ["--i" as string]: i }}>
                                <Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}
