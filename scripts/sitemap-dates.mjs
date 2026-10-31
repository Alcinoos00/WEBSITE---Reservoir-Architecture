// Génère lib/sitemap-dates.ts : la vraie date de dernière modification du contenu de chaque page,
// tirée de l'historique git. À lancer avant chaque commit qui modifie un texte ou un projet :
//   node scripts/sitemap-dates.mjs
// Sources prises en compte : le fichier page.tsx de la route, ses données (lib/landings/<route>.ts,
// lib/homeContent.ts pour l'accueil) et, pour un projet, son bloc dans lib/projects.ts.
// Les composants partagés (mise en page, styles) ne comptent pas : un changement de design
// n'est pas un changement de contenu.
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const SITE_DIR = path.join(ROOT, "app", "(site)");

const git = (args) => execFileSync("git", args, { cwd: ROOT, encoding: "utf8" }).trim();

// Date (AAAA-MM-JJ) du dernier commit qui a touché le fichier, ou null s'il n'est pas suivi.
function fileDate(rel) {
    if (!existsSync(path.join(ROOT, rel))) return null;
    const out = git(["log", "-1", "--format=%cs", "--", rel]);
    return out || null;
}

// Date la plus récente parmi les lignes [start, end] d'un fichier (git blame).
function blockDate(rel, start, end) {
    const out = git(["blame", "--line-porcelain", "-L", `${start},${end}`, "--", rel]);
    let max = 0;
    for (const line of out.split("\n")) {
        if (line.startsWith("committer-time ")) max = Math.max(max, Number(line.slice(15)));
    }
    return max ? new Date(max * 1000).toISOString().slice(0, 10) : null;
}

const latest = (...dates) => dates.filter(Boolean).sort().at(-1) ?? null;

// Blocs « export const X_PROJECT: ProjectData = { … } » de lib/projects.ts, indexés par slug.
function projectBlocks() {
    const rel = "lib/projects.ts";
    const lines = readFileSync(path.join(ROOT, rel), "utf8").split("\n");
    const starts = [];
    lines.forEach((l, i) => {
        if (/^export const [A-Z0-9_]+_PROJECT: ProjectData = \{/.test(l)) starts.push(i + 1);
    });
    const blocks = {};
    starts.forEach((start, k) => {
        let end = (starts[k + 1] ?? lines.length + 1) - 1;
        // Le dernier bloc s'arrête avant le tableau PROJECTS.
        const listAt = lines.findIndex((l, i) => i + 1 > start && /^export const PROJECTS/.test(l));
        if (listAt !== -1 && listAt + 1 <= end) end = listAt;
        const slugLine = lines.slice(start - 1, end).find((l) => /^\s*slug:/.test(l));
        const slug = slugLine?.match(/slug:\s*"([^"]+)"/)?.[1];
        if (slug) blocks[slug] = blockDate(rel, start, end);
    });
    return blocks;
}

// Toutes les routes de app/(site) qui ont un page.tsx.
function routes(dir = SITE_DIR, prefix = "") {
    const found = [];
    for (const name of readdirSync(dir)) {
        const full = path.join(dir, name);
        if (!statSync(full).isDirectory()) continue;
        const route = `${prefix}/${name}`;
        if (existsSync(path.join(full, "page.tsx"))) found.push(route);
        found.push(...routes(full, route));
    }
    return found;
}

const blocks = projectBlocks();
const dates = {};

dates["/"] = latest(fileDate("app/(site)/page.tsx"), fileDate("lib/homeContent.ts"));

for (const route of routes()) {
    const pageRel = `app/(site)${route}/page.tsx`;
    const parts = route.split("/").filter(Boolean);
    const sources = [fileDate(pageRel)];
    if (parts.length === 1) sources.push(fileDate(`lib/landings/${parts[0]}.ts`));
    if (parts.length === 2) sources.push(blocks[parts[1]] ?? null);
    const d = latest(...sources);
    if (d) dates[route] = d;
}

const sorted = Object.fromEntries(Object.entries(dates).sort(([a], [b]) => a.localeCompare(b)));
const body =
    "// Fichier généré par scripts/sitemap-dates.mjs : ne pas modifier à la main.\n" +
    "// Date de dernière modification du contenu de chaque page (AAAA-MM-JJ), utilisée par app/sitemap.ts.\n" +
    `export const SITEMAP_DATES: Record<string, string> = ${JSON.stringify(sorted, null, 4)};\n`;

writeFileSync(path.join(ROOT, "lib", "sitemap-dates.ts"), body);
console.log(`lib/sitemap-dates.ts : ${Object.keys(sorted).length} pages datées.`);
