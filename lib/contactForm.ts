// Le formulaire de contact ne s'affiche que si l'envoi d'email est configuré sur Vercel
// (SMTP_USER + SMTP_PASS, cf. app/api/contact/route.ts). Lu au build : redéployer après avoir ajouté les variables.
export const CONTACT_FORM_ENABLED = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
