"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PREFIX = "/v1";
// Fichiers servis tels quels (images, PDF…) : jamais préfixés.
const isPage = (path: string) => path.startsWith("/") && !path.startsWith("//") && !path.startsWith(PREFIX) && !/\.[a-z0-9]+$/i.test(path.split(/[?#]/)[0]);

// Les composants v1 ont des liens écrits en dur (« /villas »…). Sous /v1, on les garde dans la v1 :
// l'adresse affichée est préfixée, et le clic est intercepté avant la navigation de next/link.
export default function V1Links() {
    const router = useRouter();

    useEffect(() => {
        const fix = () => {
            document.querySelectorAll<HTMLAnchorElement>("a[href^='/']").forEach((a) => {
                const href = a.getAttribute("href")!;
                if (isPage(href)) a.setAttribute("href", href === "/" ? PREFIX : PREFIX + href);
            });
        };
        const onClick = (e: MouseEvent) => {
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            const a = (e.target as Element).closest?.("a");
            const href = a?.getAttribute("href");
            if (!a || !href || a.target === "_blank") return;
            const path = href.startsWith(PREFIX) ? href : isPage(href) ? (href === "/" ? PREFIX : PREFIX + href) : null;
            if (!path) return;
            e.preventDefault();
            e.stopPropagation();
            router.push(path);
        };
        fix();
        const obs = new MutationObserver(fix);
        obs.observe(document.body, { childList: true, subtree: true });
        document.addEventListener("click", onClick, true);
        return () => {
            obs.disconnect();
            document.removeEventListener("click", onClick, true);
        };
    }, [router]);

    return null;
}
