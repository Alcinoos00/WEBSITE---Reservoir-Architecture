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
    // Variantes du logo de la barre, à comparer (sélecteur en bas à droite, temporaire)
    const [brand, setBrand] = useState<1 | 2 | 3>(1);
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
                    {brand === 3 ? (
                        <Image src="/images/ui/brand/logo-dark.svg" alt="" width={391} height={86} className="v2-nav-logo-img" priority />
                    ) : (
                        <Image src={brand === 1 ? "/images/ui/brand/icon-dark.svg" : "/images/ui/brand/icon-light.svg"} alt="" width={206} height={212} className="v2-nav-icon-img" priority />
                    )}
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
            <div className="v2-switch" role="group" aria-label="Comparer les logos de la barre">
                <span>Barre</span>
                {([1, 2, 3] as const).map((v) => (
                    <button key={v} type="button" aria-pressed={brand === v} onClick={() => setBrand(v)}>{v}</button>
                ))}
            </div>
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
