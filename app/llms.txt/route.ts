import { FAQ_ITEMS } from "@/lib/homeContent";
import { PROJECTS } from "@/lib/projects";
import {
    SITE_URL, SITE_NAME, SITE_PHONE_DISPLAY, SITE_EMAIL, SITE_FOUNDED, SITE_FOUNDER, SITE_FOUNDER_TITLE,
    AREA_SERVED_CITIES, ARCHIDVISOR_URL, HOUZZ_URL, INSTAGRAM_URL, getProjectUrl, typologyLabel, projectAt, projectName,
} from "@/lib/seo";

// /llms.txt : résumé du site pour les assistants IA (ChatGPT, Perplexity, Claude...).
// Généré depuis les mêmes données que le site, pour rester à jour sans retouche.
export const dynamic = "force-static";

const CATEGORIES = [
    { key: "VILLAS", label: "Villas et maisons", path: "villas" },
    { key: "LOGEMENTS", label: "Logements collectifs", path: "logements" },
    { key: "COMMERCES", label: "Commerces et showrooms", path: "commerces" },
    { key: "ÉQUIPEMENTS", label: "Équipements publics", path: "equipements" },
];

export function GET() {
    const lines = [
        `# ${SITE_NAME}`,
        "",
        `> ${SITE_NAME} est une agence d'architecture basée à Aix-en-Provence (Bouches-du-Rhône), fondée en ${SITE_FOUNDED} par ${SITE_FOUNDER}, ${SITE_FOUNDER_TITLE}. Elle conçoit des villas contemporaines, des rénovations et extensions, des logements collectifs, des commerces et des équipements publics en région PACA et en Occitanie.`,
        "",
        `- Zone d'intervention : ${AREA_SERVED_CITIES.join(", ")}, et l'ensemble des régions PACA et Occitanie.`,
        "- Clients : particuliers, promoteurs, commerçants et collectivités (maîtrise d'œuvre loi MOP).",
        "- Missions : conception, permis de construire, mission complète jusqu'à la réception du chantier.",
        `- Contact : ${SITE_PHONE_DISPLAY}, ${SITE_EMAIL}, ${SITE_URL}/contact`,
        `- Avis clients et profils : ${ARCHIDVISOR_URL} ; ${HOUZZ_URL} ; ${INSTAGRAM_URL}`,
        "",
        "## Pages principales",
        "",
        `- [Accueil : architecte à Aix-en-Provence](${SITE_URL}/)`,
        `- [Architecte villa à Aix-en-Provence](${SITE_URL}/villas-aix-en-provence)`,
        `- [Architecte logements collectifs à Aix-en-Provence](${SITE_URL}/logements-aix-en-provence)`,
        `- [Architecte commerces à Aix-en-Provence](${SITE_URL}/commerces-aix-en-provence)`,
        `- [Architecte équipements publics à Aix-en-Provence](${SITE_URL}/equipements-aix-en-provence)`,
        `- [Architecte villa à Marseille](${SITE_URL}/villas-marseille)`,
        `- [Architecte villa à Nîmes](${SITE_URL}/villas-nimes)`,
        `- [Architecte villa à Nice](${SITE_URL}/villas-nice)`,
        `- [Contact](${SITE_URL}/contact)`,
        "",
        "## Études avant achat",
        "",
        `- [Études avant achat : vue d'ensemble](${SITE_URL}/etudes)`,
        `- [Étude de terrain avant achat (particuliers)](${SITE_URL}/etude-terrain) : analyse du PLU, de la constructibilité, des servitudes et des risques d'un terrain ou d'une maison avant l'achat ; extension et annexes possibles ; rapport écrit sous 15 jours ouvrés, sans visite, sur devis.`,
        `- [Étude de faisabilité et capacitaire (investisseurs et entreprises)](${SITE_URL}/etude-de-faisabilite) : division, surélévation, changement d'usage, petits collectifs, commerces, locaux d'activité, entrepôts, en ville ou en ZAC ; sur devis.`,
        "",
    ];

    for (const c of CATEGORIES) {
        lines.push(`## ${c.label}`, "", `- [Tous les projets : ${c.label.toLowerCase()}](${SITE_URL}/${c.path})`);
        for (const p of PROJECTS.filter((x) => x.category === c.key)) {
            lines.push(`- [${projectName(p)}](${getProjectUrl(p)}) : ${typologyLabel(p.category).toLowerCase()} ${projectAt(p)}`);
        }
        lines.push("");
    }

    lines.push("## Questions fréquentes", "");
    for (const f of FAQ_ITEMS) lines.push(`### ${f.q}`, "", f.a, "");

    return new Response(lines.join("\n"), {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}
