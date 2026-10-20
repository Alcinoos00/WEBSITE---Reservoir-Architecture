"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Défilement horizontal piloté par le défilement vertical : le bloc reste à l'écran (sticky)
// pendant que la bande glisse vers la gauche. Sur téléphone, simple bande à faire glisser au doigt.
export default function V2HScroll({ intro, photos }: { intro: ReactNode; photos: ReactNode[] }) {
    const outer = useRef<HTMLDivElement>(null);
    const track = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const o = outer.current;
        const t = track.current;
        if (!o || !t) return;
        const mq = window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)");
        let ticking = false;
        const size = () => {
            if (mq.matches) {
                o.style.height = "";
                t.style.transform = "";
                return;
            }
            o.style.height = `${t.scrollWidth - window.innerWidth + window.innerHeight}px`;
        };
        const update = () => {
            ticking = false;
            if (mq.matches) return;
            const r = o.getBoundingClientRect();
            const max = t.scrollWidth - window.innerWidth;
            const p = Math.min(1, Math.max(0, -r.top / Math.max(1, o.offsetHeight - window.innerHeight)));
            t.style.transform = `translate3d(${(-p * max).toFixed(1)}px, 0, 0)`;
        };
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };
        const onResize = () => {
            size();
            update();
        };
        size();
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);
        // La bande n'a sa vraie largeur qu'une fois la vue affichée et les photos posées.
        const ro = new ResizeObserver(onResize);
        ro.observe(t);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
            ro.disconnect();
        };
    }, []);

    return (
        <div className="v2-hs" ref={outer}>
            <div className="v2-hs-sticky">
                <div className="v2-hs-track" ref={track}>
                    {intro}
                    {photos}
                </div>
            </div>
        </div>
    );
}
