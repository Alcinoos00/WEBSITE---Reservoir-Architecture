"use client";

import { useEffect } from "react";

// Librairie GA4 injectée dès l'hydratation, sans <link rel="preload"> : elle ne part plus en
// priorité haute avant la photo principale (ce que faisait next/script afterInteractive), mais
// elle est chargée assez tôt pour que page_view et click_phone / click_email partent avant
// qu'un visiteur Ads ne quitte la page ou n'ouvre son composeur.
export default function GtagLoader({ id }: { id: string }) {
  useEffect(() => {
    if (document.getElementById("gtag-js")) return;
    const script = document.createElement("script");
    script.id = "gtag-js";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);
  }, [id]);
  return null;
}
