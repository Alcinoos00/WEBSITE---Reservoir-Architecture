"use client";

import { useEffect } from "react";

// Librairie GA4 (190 Ko) injectée au premier de ces trois moments :
// - premier geste du visiteur (toucher, clic, clavier, défilement) : une conversion
//   click_phone / click_email mise en file part aussitôt que possible ;
// - 1,5 seconde après la fin du chargement de la page ;
// - 3 secondes au plus tard.
// Elle ne concurrence donc plus la photo principale pendant l'affichage, sans perdre les
// page_view des visiteurs qui restent quelques secondes.
const INTERACTIONS = ["pointerdown", "keydown", "touchstart", "scroll"] as const;

export default function GtagLoader({ id }: { id: string }) {
  useEffect(() => {
    let done = false;
    const inject = () => {
      if (done) return;
      done = true;
      cleanup();
      if (document.getElementById("gtag-js")) return;
      const script = document.createElement("script");
      script.id = "gtag-js";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      document.head.appendChild(script);
    };

    const timer = window.setTimeout(inject, 3000);
    let afterLoadTimer: number | undefined;
    const onLoad = () => {
      afterLoadTimer = window.setTimeout(inject, 1500);
    };
    const cleanup = () => {
      window.clearTimeout(timer);
      if (afterLoadTimer !== undefined) window.clearTimeout(afterLoadTimer);
      window.removeEventListener("load", onLoad);
      INTERACTIONS.forEach((type) => window.removeEventListener(type, inject, true));
    };

    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    INTERACTIONS.forEach((type) => window.addEventListener(type, inject, { capture: true, passive: true, once: true }));
    return cleanup;
  }, [id]);
  return null;
}
