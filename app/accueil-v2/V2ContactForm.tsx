"use client";

import { useId, useState } from "react";
import Clarity from "@microsoft/clarity";
import { SITE_EMAIL } from "@/lib/seo";

type Status = "idle" | "sending" | "sent" | "error";

// Formulaire de demande de projet (page contact + bloc de contact en fin de page).
// Envoi vers /api/contact, qui transmet la demande par email à l'agence.
export default function V2ContactForm({ loc }: { loc: string }) {
    const id = useId();
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
        setStatus("sending");
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, page: window.location.pathname }),
            });
            const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
            if (!res.ok || !json.ok) throw new Error(json.error || "L'envoi a échoué.");
            setStatus("sent");
            form.reset();
            try {
                Clarity.event("lead_formulaire");
                Clarity.setTag("lead_loc", loc);
                const w = window as unknown as { gtag?: (...args: unknown[]) => void };
                w.gtag?.("event", "generate_lead", { lead_location: loc });
            } catch {
                // suivi indisponible : on ignore
            }
        } catch (err) {
            setStatus("error");
            setError(err instanceof Error ? err.message : "L'envoi a échoué.");
        }
    }

    if (status === "sent") {
        return (
            <p className="v2-form-done" role="status">
                Merci, votre demande est bien partie. L&apos;agence vous répond rapidement.
            </p>
        );
    }

    return (
        <form className="v2-form" onSubmit={onSubmit} noValidate={false}>
            <div className="v2-form-field">
                <label htmlFor={`${id}-name`}>Nom et prénom</label>
                <input id={`${id}-name`} name="name" type="text" autoComplete="name" required maxLength={120} />
            </div>
            <div className="v2-form-field">
                <label htmlFor={`${id}-email`}>Email</label>
                <input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={200} />
            </div>
            <div className="v2-form-field">
                <label htmlFor={`${id}-budget`}>Budget</label>
                <input id={`${id}-budget`} name="budget" type="text" placeholder="Ex. 600 000 €" maxLength={120} />
            </div>
            <div className="v2-form-field">
                <label htmlFor={`${id}-message`}>Description du projet</label>
                <textarea id={`${id}-message`} name="message" rows={5} required maxLength={5000} placeholder="Lieu, type de projet, surface, calendrier…" />
            </div>
            {/* Champ piège pour les robots, invisible pour les visiteurs */}
            <div className="v2-form-hp" aria-hidden="true">
                <label htmlFor={`${id}-website`}>Site web</label>
                <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="v2-form-actions">
                <button type="submit" className="v2-btn" disabled={status === "sending"}>
                    {status === "sending" ? "Envoi…" : "Envoyer la demande"}
                </button>
            </div>
            {status === "error" && (
                <p className="v2-form-error" role="alert">
                    {error} <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                </p>
            )}
        </form>
    );
}
