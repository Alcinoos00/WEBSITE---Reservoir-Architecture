"use client";

import { useId, useRef, useState } from "react";
import Clarity from "@microsoft/clarity";
import { SITE_EMAIL } from "@/lib/seo";

type Status = "idle" | "sending" | "sent" | "error";
type Piece = { file: File; key: string };

// Mêmes limites que app/api/etude-terrain/route.ts (corps de requête Vercel ≤ 4,5 Mo).
const MAX_FILES = 10;
const MAX_TOTAL = 4 * 1024 * 1024;
const MAX_SIDE = 2000;

const mo = (n: number) => `${(n / 1024 / 1024).toLocaleString("fr-FR", { maximumFractionDigits: 1 })} Mo`;

// Réduit une photo à 2000 px de côté en JPEG ; garde l'original si le navigateur ne sait pas la lire (HEIC hors Safari…).
async function shrink(file: File): Promise<File> {
    if (!file.type.startsWith("image/") || file.size < 400 * 1024) return file;
    try {
        const bmp = await createImageBitmap(file);
        const scale = Math.min(1, MAX_SIDE / Math.max(bmp.width, bmp.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(bmp.width * scale);
        canvas.height = Math.round(bmp.height * scale);
        canvas.getContext("2d")!.drawImage(bmp, 0, 0, canvas.width, canvas.height);
        const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/jpeg", 0.82));
        if (!blob || blob.size >= file.size) return file;
        return new File([blob], file.name.replace(/\.[^.]+$/, "") + ".jpg", { type: "image/jpeg" });
    } catch {
        return file;
    }
}

type Variant = "terrain" | "faisabilite";

// Libellés propres à chaque offre ; le reste du formulaire est commun.
const TEXTS: Record<Variant, { offer: string; kinds: string[]; address: string; date: string; datePh: string; projectPh: string; docs: string; done: string }> = {
    terrain: {
        offer: "Étude de terrain",
        kinds: ["Terrain à bâtir", "Maison existante (extension, annexes)", "Autre"],
        address: "Adresse du terrain *",
        date: "Date prévue de signature",
        datePh: "Ex. compromis fin novembre",
        projectPh: "Maison (surface, niveaux, piscine), petits logements (combien, quelle taille), ou extension et annexes. Lotissement, division, certificat d’urbanisme : précisez-le ici.",
        docs: "Photos du terrain, annonce, plan de division ou de bornage, règlement de lotissement, certificat d’urbanisme, compromis, plans de la maison existante.",
        done: "Merci, votre dossier est bien parti. Nous l’étudions et vous adressons un devis rapidement.",
    },
    faisabilite: {
        offer: "Étude de faisabilité",
        kinds: ["Terrain à bâtir", "Bâtiment existant (division, surélévation, changement d’usage)", "Local commercial ou d’activité", "Terrain en ZAC ou en zone d’activité", "Autre"],
        address: "Adresse du site *",
        date: "Calendrier",
        datePh: "Ex. offre d’achat en décembre, permis au printemps",
        projectPh: "Programme envisagé : nombre de logements ou de locaux, surfaces, activité, budget. ZAC, lotissement, bâtiment occupé : précisez-le ici.",
        docs: "Annonce ou titre de propriété, plans existants, règlement ou cahier des charges de ZAC ou de lotissement, certificat d’urbanisme, photos du site.",
        done: "Merci, votre dossier est bien parti. Nous l’étudions et vous adressons un devis rapidement.",
    },
};

// Formulaire d'envoi du dossier (étude de terrain, étude de faisabilité) : informations du site + pièces jointes.
export default function V2DossierForm({ variant = "terrain" }: { variant?: Variant }) {
    const t = TEXTS[variant];
    const id = useId();
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");
    const [pieces, setPieces] = useState<Piece[]>([]);
    const [preparing, setPreparing] = useState(false);
    const input = useRef<HTMLInputElement>(null);

    const total = pieces.reduce((s, p) => s + p.file.size, 0);
    const tooMany = pieces.length > MAX_FILES;
    const tooBig = total > MAX_TOTAL;

    async function addFiles(list: FileList | null) {
        if (!list?.length) return;
        setPreparing(true);
        const ready = await Promise.all([...list].map(shrink));
        setPieces((prev) => [...prev, ...ready.map((file) => ({ file, key: `${file.name}-${file.size}-${Math.random()}` }))]);
        setPreparing(false);
        if (input.current) input.current.value = "";
    }

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (tooMany || tooBig || preparing) return;
        const form = e.currentTarget;
        const data = new FormData(form);
        data.delete("picker");
        pieces.forEach((p) => data.append("files", p.file, p.file.name));
        data.append("page", window.location.pathname);
        data.append("offer", t.offer);
        setStatus("sending");
        setError("");
        try {
            const res = await fetch("/api/etude-terrain", { method: "POST", body: data });
            const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
            if (!res.ok || !json.ok) throw new Error(json.error || "L’envoi a échoué.");
            setStatus("sent");
            form.reset();
            setPieces([]);
            try {
                Clarity.event(variant === "terrain" ? "lead_etude_terrain" : "lead_etude_faisabilite");
                const w = window as unknown as { gtag?: (...args: unknown[]) => void };
                w.gtag?.("event", "generate_lead", { lead_location: `${variant}_formulaire` });
            } catch {
                // suivi indisponible : on ignore
            }
        } catch (err) {
            setStatus("error");
            setError(err instanceof Error ? err.message : "L’envoi a échoué.");
        }
    }

    if (status === "sent") {
        return (
            <p className="v2-form-done" role="status">
                {t.done}
            </p>
        );
    }

    return (
        <form className="v2-form v2-dossier-form" onSubmit={onSubmit}>
            <div className="v2-dossier-form-grid">
                <div className="v2-form-field">
                    <label htmlFor={`${id}-name`}>Nom et prénom *</label>
                    <input id={`${id}-name`} name="name" type="text" autoComplete="name" required maxLength={120} />
                </div>
                <div className="v2-form-field">
                    <label htmlFor={`${id}-email`}>Email *</label>
                    <input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={200} />
                </div>
                <div className="v2-form-field">
                    <label htmlFor={`${id}-phone`}>Téléphone</label>
                    <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" maxLength={40} />
                </div>
                <div className="v2-form-field">
                    <label htmlFor={`${id}-kind`}>Le bien</label>
                    <select id={`${id}-kind`} name="kind" defaultValue={t.kinds[0]}>
                        {t.kinds.map((k) => (
                            <option key={k}>{k}</option>
                        ))}
                    </select>
                </div>
                <div className="v2-form-field v2-dossier-form-wide">
                    <label htmlFor={`${id}-address`}>{t.address}</label>
                    <input id={`${id}-address`} name="address" type="text" required maxLength={300} placeholder="Rue, commune" />
                </div>
                <div className="v2-form-field">
                    <label htmlFor={`${id}-cadastre`}>Références cadastrales</label>
                    <input id={`${id}-cadastre`} name="cadastre" type="text" maxLength={200} placeholder="Ex. section AB, parcelle 123" />
                </div>
                <div className="v2-form-field">
                    <label htmlFor={`${id}-signature`}>{t.date}</label>
                    <input id={`${id}-signature`} name="signature" type="text" maxLength={60} placeholder={t.datePh} />
                </div>
                <div className="v2-form-field v2-dossier-form-wide">
                    <label htmlFor={`${id}-project`}>Votre projet *</label>
                    <textarea
                        id={`${id}-project`}
                        name="project"
                        rows={5}
                        required
                        maxLength={5000}
                        placeholder={t.projectPh}
                    />
                </div>
                <div className="v2-form-field v2-dossier-form-wide">
                    <label htmlFor={`${id}-files`}>Photos et documents</label>
                    <p className="v2-dossier-form-help">
                        {t.docs} JPG, PNG ou PDF, 4 Mo au total : les photos sont réduites automatiquement.
                    </p>
                    <input
                        ref={input}
                        id={`${id}-files`}
                        name="picker"
                        type="file"
                        multiple
                        accept="image/jpeg,image/png,image/webp,image/heic,image/heif,application/pdf"
                        onChange={(e) => addFiles(e.target.files)}
                    />
                    {preparing && <p className="v2-dossier-form-help">Préparation des photos…</p>}
                    {pieces.length > 0 && (
                        <ul className="v2-dossier-files">
                            {pieces.map((p) => (
                                <li key={p.key}>
                                    <span>{p.file.name}</span>
                                    <span className="v2-dossier-files-size">{mo(p.file.size)}</span>
                                    <button type="button" onClick={() => setPieces((prev) => prev.filter((x) => x.key !== p.key))} aria-label={`Retirer ${p.file.name}`}>
                                        Retirer
                                    </button>
                                </li>
                            ))}
                            <li className={`v2-dossier-files-total${tooBig || tooMany ? " is-over" : ""}`}>
                                <span>
                                    {pieces.length} fichier{pieces.length > 1 ? "s" : ""} · {mo(total)} sur 4 Mo
                                </span>
                            </li>
                        </ul>
                    )}
                    {(tooBig || tooMany) && (
                        <p className="v2-form-error" role="alert">
                            {tooMany ? `${MAX_FILES} fichiers au maximum.` : "Les pièces jointes dépassent 4 Mo."} Retirez-en quelques-unes et envoyez le reste à{" "}
                            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
                        </p>
                    )}
                </div>
            </div>
            {/* Champ piège pour les robots, invisible pour les visiteurs */}
            <div className="v2-form-hp" aria-hidden="true">
                <label htmlFor={`${id}-website`}>Site web</label>
                <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <p className="v2-dossier-form-help">Vos documents servent uniquement à établir le devis et à réaliser l’étude.</p>
            <div className="v2-form-actions">
                <button type="submit" className="v2-btn" disabled={status === "sending" || preparing || tooBig || tooMany}>
                    {status === "sending" ? "Envoi…" : "Envoyer mon dossier"}
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
