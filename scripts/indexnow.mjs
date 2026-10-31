// Signale à Bing (et aux autres moteurs IndexNow : Yandex, Seznam, Naver…) les pages du site
// modifiées, pour qu'elles soient réexplorées vite. À lancer APRÈS la mise en ligne :
//   node scripts/indexnow.mjs              → pages modifiées dans les 7 derniers jours
//   node scripts/indexnow.mjs 2026-10-31   → pages modifiées depuis cette date
//   node scripts/indexnow.mjs all          → toutes les pages du sitemap
// La clé est publiée dans public/<clé>.txt ; IndexNow vérifie sa présence sur le site.
const SITE = "https://www.reservoir-architecture.com";
const KEY = "7c9eedfd1ddb425faa9108806511bc12";

const arg = process.argv[2];
const since =
    arg === "all" ? null : arg ?? new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString().slice(0, 10);

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, block]) => ({
    loc: block.match(/<loc>(.*?)<\/loc>/)?.[1],
    lastmod: block.match(/<lastmod>(.*?)<\/lastmod>/)?.[1]?.slice(0, 10),
}));

const urls = entries
    .filter((e) => e.loc && (since === null || (e.lastmod && e.lastmod >= since)))
    .map((e) => e.loc);

if (urls.length === 0) {
    console.log(`Aucune page modifiée depuis ${since}. Rien à envoyer.`);
    process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
        host: new URL(SITE).host,
        key: KEY,
        keyLocation: `${SITE}/${KEY}.txt`,
        urlList: urls,
    }),
});

// 200 ou 202 : accepté. 403 : clé introuvable sur le site. 422 : URL hors du domaine.
console.log(`IndexNow : ${res.status} ${res.statusText} pour ${urls.length} page(s).`);
for (const u of urls) console.log(`  ${u}`);
if (res.status !== 200 && res.status !== 202) process.exit(1);
