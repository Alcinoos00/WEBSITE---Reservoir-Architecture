"use client";

import { useEffect } from "react";

// Animations de l'accueil v2 (reprises du template Teras, sans GSAP) :
// - [data-rise]   : lettres du nom qui montent une à une au chargement ;
// - [data-reveal] : blocs qui apparaissent en glissant vers le haut à l'entrée dans l'écran ;
// - [data-scrub]  : lettres qui passent de 20 % à 100 % d'opacité au fil du défilement ;
// - [data-parallax] : image qui glisse plus lentement que la page.
// Sans JavaScript ou avec « réduire les animations », tout reste visible et immobile.
export default function V2Motion() {
    useEffect(() => {
        const root = document.querySelector<HTMLElement>(".v2");
        if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        root.classList.add("v2-js");

        // setTimeout et non requestAnimationFrame : un onglet en arrière-plan ne déclenche pas rAF.
        const t = window.setTimeout(() => root.classList.add("v2-loaded"), 40);

        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-in");
                        io.unobserve(e.target);
                    }
                }
            },
            { rootMargin: "0px 0px -12% 0px" },
        );
        root.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

        const scrubs = Array.from(root.querySelectorAll<HTMLElement>("[data-scrub]")).map((el) => ({
            el,
            letters: Array.from(el.querySelectorAll<HTMLElement>(".v2-l")),
        }));
        let ticking = false;
        const update = () => {
            ticking = false;
            const vh = window.innerHeight;
            // Re-lu à chaque passage : les photos sous la ligne de flottaison arrivent après le chargement.
            const parallax = root.querySelectorAll<HTMLElement>("[data-parallax]");
            for (const { el, letters } of scrubs) {
                const r = el.getBoundingClientRect();
                // 0 quand le bloc entre par le bas, 1 quand son bas atteint le milieu de l'écran
                const p = Math.min(1, Math.max(0, (vh * 0.9 - r.top) / (r.height + vh * 0.35)));
                const lit = Math.round(p * letters.length);
                letters.forEach((l, i) => l.classList.toggle("is-lit", i < lit));
            }
            for (const el of parallax) {
                const box = el.parentElement!.getBoundingClientRect();
                if (box.bottom < 0 || box.top > vh) continue;
                const p = (box.top + box.height / 2 - vh / 2) / vh;
                el.style.transform = `translate3d(0, ${(p * -8).toFixed(2)}%, 0) scale(1.12)`;
            }
        };
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.clearTimeout(t);
            io.disconnect();
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);
    return null;
}
