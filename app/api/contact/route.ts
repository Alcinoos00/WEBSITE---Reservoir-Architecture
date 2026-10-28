import nodemailer from "nodemailer";
import { SITE_EMAIL } from "@/lib/seo";

export const runtime = "nodejs";

// Formulaire de contact : envoie la demande par email à l'agence via le SMTP Google Workspace.
// Réglages dans les variables d'environnement Vercel (jamais dans le code) :
//   SMTP_USER = boîte qui envoie (contact@reservoir-architecture.com)
//   SMTP_PASS = mot de passe d'application Google de cette boîte (pas le mot de passe de connexion)
//   CONTACT_TO = destinataire, facultatif (défaut : SITE_EMAIL)

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export async function POST(req: Request) {
    let body: Record<string, unknown>;
    try {
        body = await req.json();
    } catch {
        return Response.json({ ok: false, error: "Requête invalide." }, { status: 400 });
    }

    // Champ piège invisible : un robot le remplit, un humain non. On fait comme si tout allait bien.
    if (clean(body.website, 200)) return Response.json({ ok: true });

    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const budget = clean(body.budget, 120);
    const message = clean(body.message, 5000);
    const page = clean(body.page, 300);

    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return Response.json({ ok: false, error: "Merci de remplir votre nom, un email valide et la description du projet." }, { status: 400 });
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!user || !pass) {
        console.error("[contact] SMTP_USER / SMTP_PASS manquants");
        return Response.json({ ok: false, error: "L'envoi est momentanément indisponible." }, { status: 503 });
    }

    const transport = nodemailer.createTransport({ host: "smtp.gmail.com", port: 465, secure: true, auth: { user, pass } });
    const rows: [string, string][] = [
        ["Nom", name],
        ["Email", email],
        ["Budget", budget || "Non précisé"],
        ["Page", page || "Non précisée"],
    ];

    try {
        await transport.sendMail({
            from: `"Site Reservoir Architecture" <${user}>`,
            to: process.env.CONTACT_TO || SITE_EMAIL,
            replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
            subject: `Nouvelle demande de projet : ${name}`,
            text: `${rows.map(([k, v]) => `${k} : ${v}`).join("\n")}\n\nDescription du projet :\n${message}`,
            html: `<table cellpadding="4">${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`).join("")}</table><p><b>Description du projet</b></p><p style="white-space:pre-wrap">${esc(message)}</p>`,
        });
    } catch (e) {
        console.error("[contact] échec d'envoi", e);
        return Response.json({ ok: false, error: "L'envoi a échoué. Vous pouvez nous écrire directement par email." }, { status: 502 });
    }

    return Response.json({ ok: true });
}
