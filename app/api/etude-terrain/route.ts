import nodemailer from "nodemailer";
import { SITE_EMAIL } from "@/lib/seo";

export const runtime = "nodejs";

// Formulaires « Étude de terrain » et « Étude de faisabilité » : dossier + pièces jointes envoyés par email à l'agence,
// avec le même SMTP que le formulaire de contact (SMTP_USER, SMTP_PASS, CONTACT_TO facultatif).
// Vercel limite le corps d'une requête à 4,5 Mo : le navigateur compresse les photos avant l'envoi
// et refuse au-delà de MAX_TOTAL ; le reste peut être envoyé par email.

const MAX_FILES = 10;
const MAX_TOTAL = 4 * 1024 * 1024;
const ALLOWED = /^(image\/(jpeg|png|webp|heic|heif)|application\/pdf)$/;

const clean = (v: FormDataEntryValue | null, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export async function POST(req: Request) {
    let form: FormData;
    try {
        form = await req.formData();
    } catch {
        return Response.json({ ok: false, error: "Envoi trop lourd ou invalide. Réduisez les pièces jointes ou envoyez-les par email." }, { status: 400 });
    }

    // Champ piège invisible : un robot le remplit, un humain non.
    if (clean(form.get("website"), 200)) return Response.json({ ok: true });

    const name = clean(form.get("name"), 120);
    const email = clean(form.get("email"), 200);
    const phone = clean(form.get("phone"), 40);
    const kind = clean(form.get("kind"), 80);
    const address = clean(form.get("address"), 300);
    const cadastre = clean(form.get("cadastre"), 200);
    const signature = clean(form.get("signature"), 60);
    const project = clean(form.get("project"), 5000);
    const page = clean(form.get("page"), 300);
    const offer = clean(form.get("offer"), 60) || "Étude de terrain";

    if (!name || !address || !project || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return Response.json({ ok: false, error: "Merci d’indiquer votre nom, un email valide, l’adresse et votre projet." }, { status: 400 });
    }

    const files = form.getAll("files").filter((f): f is File => typeof f === "object" && f !== null && "arrayBuffer" in f && f.size > 0);
    if (files.length > MAX_FILES) {
        return Response.json({ ok: false, error: `${MAX_FILES} fichiers au maximum. Envoyez les autres par email.` }, { status: 400 });
    }
    const total = files.reduce((s, f) => s + f.size, 0);
    if (total > MAX_TOTAL) {
        return Response.json({ ok: false, error: "Les pièces jointes dépassent 4 Mo. Retirez-en quelques-unes et envoyez-les par email." }, { status: 400 });
    }
    if (files.some((f) => !ALLOWED.test(f.type))) {
        return Response.json({ ok: false, error: "Formats acceptés : photos (JPG, PNG, WebP, HEIC) et PDF." }, { status: 400 });
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!user || !pass) {
        console.error("[etude-terrain] SMTP_USER / SMTP_PASS manquants");
        return Response.json({ ok: false, error: "L’envoi est momentanément indisponible." }, { status: 503 });
    }

    const attachments = await Promise.all(
        files.map(async (f, i) => ({
            filename: (f.name || `piece-${i + 1}`).replace(/[^\w.\- ()À-ÿ]/g, "_").slice(0, 120),
            content: Buffer.from(await f.arrayBuffer()),
            contentType: f.type,
        })),
    );

    const rows: [string, string][] = [
        ["Nom", name],
        ["Email", email],
        ["Téléphone", phone || "Non précisé"],
        ["Bien", kind || "Non précisé"],
        ["Offre", offer],
        ["Adresse", address],
        ["Références cadastrales", cadastre || "Non précisées"],
        ["Date / calendrier", signature || "Non précisé"],
        ["Pièces jointes", files.length ? `${files.length} fichier(s)` : "Aucune"],
        ["Page", page || "Non précisée"],
    ];

    const transport = nodemailer.createTransport({ host: "smtp.gmail.com", port: 465, secure: true, auth: { user, pass } });
    try {
        await transport.sendMail({
            from: `"Site Reservoir Architecture" <${user}>`,
            to: process.env.CONTACT_TO || SITE_EMAIL,
            replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
            subject: `${offer} : ${name} – ${address.slice(0, 80)}`,
            text: `${rows.map(([k, v]) => `${k} : ${v}`).join("\n")}\n\nProjet :\n${project}`,
            html: `<table cellpadding="4">${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`).join("")}</table><p><b>Projet</b></p><p style="white-space:pre-wrap">${esc(project)}</p>`,
            attachments,
        });
    } catch (e) {
        console.error("[etude-terrain] échec d'envoi", e);
        return Response.json({ ok: false, error: "L’envoi a échoué. Vous pouvez nous écrire directement par email." }, { status: 502 });
    }

    return Response.json({ ok: true });
}
