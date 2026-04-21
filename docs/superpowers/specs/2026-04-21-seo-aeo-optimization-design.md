# SEO / AEO / GEO — Optimisation du site Reservoir Architecture

**Date** : 2026-04-21
**Périmètre** : SEO technique, SEO local, AEO/GEO (visibilité IA générative)
**Domaine canonique** : `https://reservoir-architecture.com`

---

## 1. Objectif

Maximiser la visibilité du site dans :
- **Google / Bing** sur les requêtes longue traîne `[typologie + ville/dépt]` ciblées.
- **Google Images / Pinterest / recherche visuelle IA** sur les visuels projets.
- **LLMs (ChatGPT, Perplexity, Google AI Overviews, Claude)** sur les requêtes type "quel architecte pour une villa contemporaine en Provence ?".

Sans modifier l'UI visible, sans ajouter de pages, sans ajouter de FAQ.

## 2. Stratégie de ciblage

**Géo** : Aix-en-Provence, Marseille, Nîmes — départements 13, 30, 83, 84 — région Provence.

**Audiences** : particuliers (villas, rénovation, extension) + promoteurs immobiliers (logements collectifs, résidences).

**Familles de mots-clés cibles** :
- Architecte + typologie : villa, maison contemporaine, maison luxe, logement, immeuble, résidence collective, commerce, boutique, showroom, équipement public.
- Architecte + ville : `architecte Aix-en-Provence`, `architecte Marseille`, `architecte Nîmes`.
- Combinaisons : `architecte villa Marseille`, `architecte promoteur Aix`, `aménagement showroom luxe`, `architecte commerce Nîmes`, etc.
- Verbes intentionnels : `rénovation maison architecte`, `construction maison architecte`, `extension maison architecte`, `conception showroom`, `plan maison architecte moderne`.

## 3. Hors scope

- ❌ Création de pages SEO dédiées (landing pages par ville × typologie).
- ❌ Ajout de sections FAQ.
- ❌ Création d'un blog / journal éditorial.
- ❌ Modification du contenu textuel des projets ou de la section agence.
- ❌ Modification visuelle des composants (Hero, Content, AgencySection, NavigationCarousel, Footer).
- ❌ Setup Google Search Console, Analytics, Tag Manager (à faire côté client après déploiement).
- ❌ Backlinks, netlinking, citations externes (hors scope développement).
- ❌ Remplacement des liens sociaux du footer (laissés en `href="#"` — à compléter ultérieurement par le client avec les URLs réelles).

## 4. Architecture technique

### 4.1 Fichiers modifiés

| Fichier | Action |
|---|---|
| `app/layout.tsx` | Ajout `metadataBase`, enrichissement `metadata` racine, injection JSON-LD `ProfessionalService` global |
| `app/page.tsx` | Ajout `export const metadata` (homepage) |
| `app/villas/page.tsx` | Ajout `export const metadata` + JSON-LD `CollectionPage`/`ItemList` |
| `app/logements/page.tsx` | Idem |
| `app/commerces/page.tsx` | Idem |
| `app/equipements/page.tsx` | Idem |
| `app/{villas,logements,commerces,equipements}/[slug]/page.tsx` (36 pages) | Ajout `generateMetadata()` + JSON-LD `CreativeWork`+`Place` |
| `lib/projects.ts` | Aucune modification — `PROJECTS` (36 projets) existe déjà |
| `components/Hero.tsx` | Remplacement alt minimaliste par `getProjectAlt()` (importé depuis `lib/seo.ts`) |

### 4.2 Fichiers créés

| Fichier | Rôle |
|---|---|
| `app/sitemap.ts` | Sitemap dynamique généré depuis `lib/projects.ts` |
| `app/robots.ts` | Robots.txt — autorise tous bots y compris IA, pointe sitemap |
| `lib/seo.ts` | Helpers SEO partagés : constantes site, mapping typologie, `getProjectAlt()`, `getProjectMetadata()`, `categoryToPath()`, générateurs JSON-LD |

## 5. Metadata par page

### 5.1 Constantes globales (`lib/seo.ts`)

```ts
export const SITE_URL = "https://reservoir-architecture.com";
export const SITE_NAME = "Reservoir Architecture";
export const SITE_LOCATION = "Aix-en-Provence";
export const AREA_SERVED = ["Aix-en-Provence", "Marseille", "Nîmes", "Bouches-du-Rhône", "Gard", "Var", "Vaucluse", "Provence-Alpes-Côte d'Azur"];
```

### 5.2 `metadataBase` racine

```ts
metadataBase: new URL("https://reservoir-architecture.com")
```

### 5.3 Pattern par page

| Page | Title | Description (≤ 160 car) |
|---|---|---|
| `/` | `RESERVOIR Architecture — Architecte à Aix-en-Provence, Marseille, Nîmes` | `Agence d'architecture en Provence (13, 30, 83, 84). Villas contemporaines, logements collectifs, commerces, équipements publics. Particuliers & promoteurs.` |
| `/villas` | `Architecte villa contemporaine en Provence — Reservoir Architecture` | `Conception et rénovation de villas modernes, maisons d'architecte de luxe à Aix-en-Provence, Marseille, Nîmes. 10 projets réalisés.` |
| `/logements` | `Architecte logements collectifs & promoteurs immobiliers — Reservoir Architecture` | `Conception d'immeubles de logements et résidences en Provence (13, 30). Partenaire des promoteurs immobiliers à Aix, Marseille, Nîmes.` |
| `/commerces` | `Architecte commerce, boutique & showroom — Reservoir Architecture` | `Aménagement et design de magasins, showrooms, espaces de vente. Architecture commerciale en Provence (Aix, Marseille, Nîmes).` |
| `/equipements` | `Architecte équipements publics — Reservoir Architecture` | `Conception d'équipements publics : gendarmeries, capitaineries, bâtiments municipaux. Architecte en Provence pour collectivités.` |
| `/{cat}/{slug}` | `{titre projet} — {typologie} à {ville (dépt)} \| Reservoir Architecture` | Auto : 1ère phrase de `descriptionParagraphs[0]` tronquée à 160 car, fallback sur `optionalSubtitle` |

### 5.4 OpenGraph & Twitter

Chaque page :
- `openGraph.type` : `website` (catégories) ou `article` (fiches projet)
- `openGraph.images` : 1ère image hero du projet (ou logo pour pages génériques), dimension 1200×800
- `openGraph.locale` : `fr_FR`
- `twitter.card` : `summary_large_image`
- `alternates.canonical` : URL absolue de la page courante

## 6. Schemas JSON-LD

Tous injectés via `<script type="application/ld+json">` dans le layout/page concerné (pas via `next/script` — Next.js 15 supporte le rendu inline en RSC).

### 6.1 Layout racine — `ProfessionalService`

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://reservoir-architecture.com/#organization",
  "name": "Reservoir Architecture",
  "alternateName": "RESERVOIR Architecture",
  "description": "Agence d'architecture à Aix-en-Provence. Villas contemporaines, logements collectifs, commerces, équipements publics en Provence.",
  "url": "https://reservoir-architecture.com",
  "logo": "https://reservoir-architecture.com/images/ui/logo_light.svg",
  "image": "https://reservoir-architecture.com/images/ui/logo_light.svg",
  "telephone": "+33613516767",
  "email": "contact@reservoir-architecture.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Aix-en-Provence",
    "addressRegion": "Provence-Alpes-Côte d'Azur",
    "addressCountry": "FR"
  },
  "areaServed": [
    { "@type": "City", "name": "Aix-en-Provence" },
    { "@type": "City", "name": "Marseille" },
    { "@type": "City", "name": "Nîmes" },
    { "@type": "AdministrativeArea", "name": "Bouches-du-Rhône" },
    { "@type": "AdministrativeArea", "name": "Gard" },
    { "@type": "AdministrativeArea", "name": "Var" },
    { "@type": "AdministrativeArea", "name": "Vaucluse" }
  ],
  "founder": {
    "@type": "Person",
    "name": "Serge Ettore",
    "jobTitle": "Architecte DPLG"
  },
  "foundingDate": "2013",
  "knowsAbout": [
    "Architecture résidentielle",
    "Villa contemporaine",
    "Maison d'architecte",
    "Logements collectifs",
    "Résidences",
    "Architecture commerciale",
    "Aménagement de showroom",
    "Design retail",
    "Équipements publics",
    "Rénovation",
    "Extension"
  ],
  "slogan": "Construire une présence"
}
```

### 6.2 Pages catégories — `CollectionPage` + `ItemList`

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "{title de la page}",
  "description": "{description de la page}",
  "url": "https://reservoir-architecture.com/{cat}",
  "isPartOf": { "@id": "https://reservoir-architecture.com/#organization" },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "url": "https://.../{cat}/{slug}", "name": "{titre projet}" },
      ...
    ]
  }
}
```

### 6.3 Fiches projet — `CreativeWork` + `Place`

```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "{titre projet}",
  "description": "{1ère phrase de descriptionParagraphs[0]}",
  "creator": { "@id": "https://reservoir-architecture.com/#organization" },
  "image": [ "{URL absolue heroImages[0..n]}" ],
  "locationCreated": {
    "@type": "Place",
    "name": "{subtitle, ex: 'Caissargues (30)'}",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "{ville extraite}",
      "addressRegion": "{région dérivée du dépt}",
      "addressCountry": "FR"
    }
  },
  "about": "{categorie mappée: Villa contemporaine, Logements collectifs, Architecture commerciale, Équipement public}",
  "dateCreated": "{techSheet.Année si présent}"
}
```

## 7. Alt images — enrichissement

Helper `getProjectAlt(project, index)` dans `lib/seo.ts` :

```ts
const TYPOLOGY_LABEL: Record<string, string> = {
  "VILLAS": "Villa contemporaine",
  "LOGEMENTS": "Logements collectifs",
  "COMMERCES": "Architecture commerciale",
  "ÉQUIPEMENTS": "Équipement public",
};

export function getProjectAlt(project: ProjectData, index: number): string {
  const typology = TYPOLOGY_LABEL[project.category] ?? "Projet d'architecture";
  return `${typology} ${project.title} à ${project.subtitle} — projet d'architecte Reservoir Architecture, image ${index + 1}`;
}
```

Exemple résultat :
- Avant : `"VILLA F 1"`
- Après : `"Villa contemporaine VILLA F à Caissargues (30) — projet d'architecte Reservoir Architecture, image 1"`

Utilisé dans `Hero.tsx` (l'image hero) et dans le lightbox.

## 8. Sitemap (`app/sitemap.ts`)

Next.js 15 génère automatiquement `/sitemap.xml` depuis ce fichier.

```ts
import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = "https://reservoir-architecture.com";

  const staticUrls = [
    { url: base, lastModified, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${base}/villas`, lastModified, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/logements`, lastModified, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/commerces`, lastModified, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/equipements`, lastModified, priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const projectUrls = PROJECTS.map((p) => ({
    url: `${base}/${categoryToPath(p.category)}/${p.slug}`,
    lastModified,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }));

  return [...staticUrls, ...projectUrls];
}
```

Pré-requis : exposer `PROJECTS` dans `lib/projects.ts` (tableau de tous les projets — déjà tous déclarés).

## 9. Robots (`app/robots.ts`)

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/template", "/api/"] },
      // Bots IA explicitement autorisés (AEO)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
    ],
    sitemap: "https://reservoir-architecture.com/sitemap.xml",
  };
}
```

## 10. Leviers AEO sans FAQ

Sans FAQ, on s'appuie sur :
1. **Schema `ProfessionalService` dense** — `knowsAbout`, `areaServed`, `founder`, `foundingDate` → les LLMs ingèrent ces faits.
2. **Schemas `CreativeWork` par projet** — chaque réalisation devient un fait structuré citable par un LLM ("Reservoir Architecture a conçu la Villa F à Caissargues en 2015").
3. **Metadata descriptions factuelles** — chaque page catégorie liste typologie + zones géo + nombre de projets, formulé naturellement.
4. **Alt images sémantiques** — indexation visuelle (Google Lens, GPT-4 Vision).
5. **`<html lang="fr">`** — déjà en place.
6. **Robots autorisant explicitement les bots IA** — opt-in clair vs comportement par défaut ambigu.

## 11. Validation post-déploiement (à faire côté client)

- Soumettre `https://reservoir-architecture.com/sitemap.xml` à Google Search Console.
- Vérifier les schemas avec [Schema Markup Validator](https://validator.schema.org).
- Vérifier l'aperçu OG avec [opengraph.xyz](https://opengraph.xyz).
- Tester l'indexation IA : poser à ChatGPT/Perplexity "Quel architecte recommandes-tu à Aix-en-Provence pour une villa contemporaine ?" après ~1-2 semaines.

## 12. Modifications data & helpers — répartition

**`lib/projects.ts`** (data only) :
- Aucun changement — l'export `PROJECTS: ProjectData[]` (36 projets) existe déjà ligne 1109, utilisé par les pages catégories. Sitemap et schemas catégories le réutilisent directement.

**`lib/seo.ts`** (helpers) :
- Constantes : `SITE_URL`, `SITE_NAME`, `SITE_LOCATION`, `AREA_SERVED`, `TYPOLOGY_LABEL`.
- `categoryToPath(category)` — mapping `"VILLAS"` → `"villas"`, etc.
- `getProjectAlt(project, index)` — chaîne alt sémantique.
- `getProjectMetadata(project)` — retourne `Metadata` Next.js pour une fiche projet.
- `getOrganizationJsonLd()`, `getCollectionPageJsonLd(category)`, `getProjectJsonLd(project)` — générateurs JSON-LD typés.

## 13. Risques & mitigations

| Risque | Mitigation |
|---|---|
| Changement de structure metadata casse le rendu Next.js | Tester en local (`npm run build && npm run start`) avant commit |
| Schema JSON-LD invalide → ignoré par Google | Validation systématique via Schema Markup Validator |
| `metadataBase` mal configuré → URLs OG cassées | Une seule constante centralisée dans `lib/seo.ts` |
| `PROJECTS` oublie un projet → sitemap incomplet | Tester que `sitemap.xml` contient bien 36 projets + 5 pages statiques |
| Alt enrichi en français mal indexé en EN | Site `lang="fr"` — Google indexera correctement, Bing aussi |
