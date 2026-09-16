"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

type ClarityQueue = ((...args: unknown[]) => void) & { q?: unknown[] };

// Clarity n'est chargé qu'une fois la page affichée (load + temps mort du navigateur) :
// son script ne concurrence plus l'image principale sur mobile. La file d'attente
// window.clarity est créée tout de suite, pour que les événements de lead déclenchés
// avant le chargement (trackLead) soient conservés et envoyés ensuite.
export default function ClarityInit() {
  useEffect(() => {
    const w = window as Window & { clarity?: ClarityQueue };
    w.clarity =
      w.clarity ||
      function () {
        // eslint-disable-next-line prefer-rest-params
        (w.clarity!.q = w.clarity!.q || []).push(arguments);
      };

    let idleId: number | undefined;
    let timeoutId: number | undefined;

    const start = () => {
      Clarity.init("wlbn4591mp");
      Clarity.consent();
    };
    const schedule = () => {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(start, { timeout: 4000 });
      } else {
        timeoutId = window.setTimeout(start, 2000);
      }
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);
  return null;
}
