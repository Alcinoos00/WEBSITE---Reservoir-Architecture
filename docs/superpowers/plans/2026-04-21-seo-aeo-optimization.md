# SEO/AEO/GEO Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add comprehensive SEO, local SEO, and AEO/GEO (LLM-visibility) optimization to the Reservoir Architecture Next.js site without modifying any visible UI or adding pages.

**Architecture:** Add a centralized `lib/seo.ts` module exposing constants, alt/metadata helpers, and JSON-LD generators. Wire into `app/layout.tsx` (root metadata + Organization schema), homepage, 4 category pages, and 36 project pages. Generate `app/sitemap.ts` and `app/robots.ts` via Next.js metadata files. Enrich image alts via shared helper used in `Hero.tsx`.

**Tech Stack:** Next.js 16 (app router), TypeScript, React 19. No test framework — verification via `npm run build`, `npm run lint`, and `curl` inspection of rendered `<head>`.

**Spec:** [docs/superpowers/specs/2026-04-21-seo-aeo-optimization-design.md](../specs/2026-04-21-seo-aeo-optimization-design.md)

---

## File Map

**Created:**
- `lib/seo.ts` — constants + helpers + JSON-LD generators
- `app/sitemap.ts` — dynamic sitemap from project list
- `app/robots.ts` — robots.txt with explicit AI bot allow

**Modified:**
- `app/layout.tsx` — `metadataBase`, enriched root metadata, Organization JSON-LD script
- `app/page.tsx` — homepage metadata
- `app/villas/page.tsx`, `app/logements/page.tsx`, `app/commerces/page.tsx`, `app/equipements/page.tsx` — metadata + CollectionPage JSON-LD
- `components/Hero.tsx` — use `getProjectAlt` for image alt
- 36 project pages under `app/{villas,logements,commerces,equipements}/<slug>/page.tsx` — add metadata + JSON-LD

---

## Task 1: Foundation — Create `lib/seo.ts` with constants

**Files:**
- Create: `lib/seo.ts`

- [ ] **Step 1: Create `lib/seo.ts` with site constants**

```ts
// lib/seo.ts
export const SITE_URL = "https://reservoir-architecture.com";
export const SITE_NAME = "Reservoir Architecture";
export const SITE_LOCATION = "Aix-en-Provence";
export const SITE_REGION = "Provence-Alpes-Côte d'Azur";
export const SITE_COUNTRY = "FR";
export const SITE_PHONE = "+33613516767";
export const SITE_EMAIL = "contact@reservoir-architecture.com";
export const SITE_FOUNDED = "2013";
export const SITE_FOUNDER = "Serge Ettore";
export const SITE_FOUNDER_TITLE = "Architecte DPLG";

export const AREA_SERVED_CITIES = ["Aix-en-Provence", "Marseille", "Nîmes"];
export const AREA_SERVED_REGIONS = [
  "Bouches-du-Rhône",
  "Gard",
  "Var",
  "Vaucluse",
];

export const KNOWS_ABOUT = [
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
  "Extension",
];

export const TYPOLOGY_LABEL: Record<string, string> = {
  VILLAS: "Villa contemporaine",
  LOGEMENTS: "Logements collectifs",
  COMMERCES: "Architecture commerciale",
  ÉQUIPEMENTS: "Équipement public",
};

export const CATEGORY_TO_PATH: Record<string, string> = {
  VILLAS: "villas",
  LOGEMENTS: "logements",
  COMMERCES: "commerces",
  ÉQUIPEMENTS: "equipements",
};
```

- [ ] **Step 2: Verify file compiles**

Run: `npx tsc --noEmit`
Expected: no errors related to `lib/seo.ts`.

- [ ] **Step 3: Commit**

```bash
git add lib/seo.ts
git commit -m "seo: add foundation constants module (lib/seo.ts)"
```

---

## Task 2: Add helper functions to `lib/seo.ts`

**Files:**
- Modify: `lib/seo.ts`

- [ ] **Step 1: Append helpers to `lib/seo.ts`**

Append to the end of `lib/seo.ts`:

```ts
import type { ProjectData } from "@/types/project";
import type { Metadata } from "next";

/** Map a project category to its URL path segment. */
export function categoryToPath(category: string | undefined): string {
  if (!category) return "";
  return CATEGORY_TO_PATH[category] ?? "";
}

/** Map a project category to a human typology label for SEO copy. */
export function typologyLabel(category: string | undefined): string {
  if (!category) return "Projet d'architecture";
  return TYPOLOGY_LABEL[category] ?? "Projet d'architecture";
}

/** Build a semantic alt string for a project image. */
export function getProjectAlt(project: ProjectData, index: number): string {
  const typology = typologyLabel(project.category);
  return `${typology} ${project.title} à ${project.subtitle} — projet d'architecte ${SITE_NAME}, image ${index + 1}`;
}

/** Build the absolute URL for a project page. */
export function getProjectUrl(project: ProjectData): string {
  const path = categoryToPath(project.category);
  return `${SITE_URL}/${path}/${project.slug}`;
}

/** Build the absolute URL for an image stored in /public. */
export function absoluteImageUrl(relativePath: string): string {
  if (relativePath.startsWith("http")) return relativePath;
  const clean = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
  return `${SITE_URL}${clean}`;
}

/** Truncate a string to N characters at a word boundary, append ellipsis. */
export function truncateAtWord(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  const sliced = text.slice(0, maxLen);
  const lastSpace = sliced.lastIndexOf(" ");
  return (lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced) + "…";
}

/** Build Next.js Metadata for a project detail page. */
export function getProjectMetadata(project: ProjectData): Metadata {
  const typology = typologyLabel(project.category);
  const title = `${project.title} — ${typology} à ${project.subtitle} | ${SITE_NAME}`;
  const rawDesc =
    project.descriptionHeader ??
    project.descriptionParagraphs[0] ??
    project.optionalSubtitle ??
    `${typology} ${project.title} à ${project.subtitle} par ${SITE_NAME}.`;
  const description = truncateAtWord(rawDesc.replace(/\s+/g, " "), 160);
  const url = getProjectUrl(project);
  const image = project.heroImages[0]
    ? absoluteImageUrl(project.heroImages[0])
    : `${SITE_URL}/images/ui/logo_light.svg`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      locale: "fr_FR",
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 800, alt: getProjectAlt(project, 0) }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/seo.ts
git commit -m "seo: add alt, URL, metadata helpers"
```

---

## Task 3: Add JSON-LD generators to `lib/seo.ts`

**Files:**
- Modify: `lib/seo.ts`

- [ ] **Step 1: Append JSON-LD generators to `lib/seo.ts`**

Append to the end of `lib/seo.ts`:

```ts
/** Detect département (FR) from project subtitle like "Caissargues (30)". */
function extractDept(subtitle: string): string | undefined {
  const match = subtitle.match(/\((\d{2,3})\)/);
  return match?.[1];
}

/** Map département number to FR region for the LocationCreated address. */
function deptToRegion(dept: string | undefined): string {
  const map: Record<string, string> = {
    "13": "Provence-Alpes-Côte d'Azur",
    "30": "Occitanie",
    "83": "Provence-Alpes-Côte d'Azur",
    "84": "Provence-Alpes-Côte d'Azur",
    "34": "Occitanie",
  };
  if (!dept) return SITE_REGION;
  return map[dept] ?? SITE_REGION;
}

/** Extract city name from subtitle like "Caissargues (30)" → "Caissargues". */
function extractCity(subtitle: string): string {
  return subtitle.replace(/\s*\(\d{2,3}\)\s*$/, "").trim();
}

/** ProfessionalService root JSON-LD (injected in app/layout.tsx). */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "RESERVOIR Architecture",
    description:
      "Agence d'architecture à Aix-en-Provence. Villas contemporaines, logements collectifs, commerces, équipements publics en Provence (13, 30, 83, 84).",
    url: SITE_URL,
    logo: `${SITE_URL}/images/ui/logo_light.svg`,
    image: `${SITE_URL}/images/ui/logo_light.svg`,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_LOCATION,
      addressRegion: SITE_REGION,
      addressCountry: SITE_COUNTRY,
    },
    areaServed: [
      ...AREA_SERVED_CITIES.map((name) => ({ "@type": "City", name })),
      ...AREA_SERVED_REGIONS.map((name) => ({ "@type": "AdministrativeArea", name })),
    ],
    founder: {
      "@type": "Person",
      name: SITE_FOUNDER,
      jobTitle: SITE_FOUNDER_TITLE,
    },
    foundingDate: SITE_FOUNDED,
    knowsAbout: KNOWS_ABOUT,
    slogan: "Construire une présence",
  };
}

/** CollectionPage + ItemList for a category page. */
export function getCollectionPageJsonLd(args: {
  url: string;
  name: string;
  description: string;
  items: ProjectData[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: args.name,
    description: args.description,
    url: args.url,
    isPartOf: { "@id": `${SITE_URL}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: args.items.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: getProjectUrl(p),
        name: p.title,
      })),
    },
  };
}

/** CreativeWork + Place for a project detail page. */
export function getProjectJsonLd(project: ProjectData) {
  const dept = extractDept(project.subtitle);
  const city = extractCity(project.subtitle);
  const year = project.techSheet?.find((t) =>
    /année|year/i.test(t.label),
  )?.value;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: truncateAtWord(
      (project.descriptionParagraphs[0] ?? "").replace(/\s+/g, " "),
      300,
    ),
    creator: { "@id": `${SITE_URL}/#organization` },
    url: getProjectUrl(project),
    image: project.heroImages.map(absoluteImageUrl),
    locationCreated: {
      "@type": "Place",
      name: project.subtitle,
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: deptToRegion(dept),
        addressCountry: SITE_COUNTRY,
      },
    },
    about: typologyLabel(project.category),
    ...(year ? { dateCreated: year } : {}),
  };
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/seo.ts
git commit -m "seo: add Organization, CollectionPage, Project JSON-LD generators"
```

---

## Task 4: (skipped — `PROJECTS` already exists in `lib/projects.ts`)

The constant `PROJECTS: ProjectData[]` is already exported at line 1109 of `lib/projects.ts` and contains all 36 projects. It is reused by sitemap and category schemas without modification.

---

## Task 5: Update `app/layout.tsx` — root metadata + Organization JSON-LD

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace the `metadata` export and inject Organization JSON-LD**

Replace the entire content of `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL, getOrganizationJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Architecte à Aix-en-Provence, Marseille, Nîmes`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Agence d'architecture en Provence (13, 30, 83, 84). Villas contemporaines, logements collectifs, commerces, équipements publics. Particuliers & promoteurs.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  generator: "Next.js",
  keywords: [
    "architecte Aix-en-Provence",
    "architecte Marseille",
    "architecte Nîmes",
    "architecte Provence",
    "villa contemporaine architecte",
    "architecte logements collectifs",
    "architecte promoteur immobilier",
    "architecte commerce",
    "architecte showroom",
    "Reservoir Architecture",
  ],
  icons: {
    icon: [
      { url: "/images/ui/icon_dark.svg", media: "(prefers-color-scheme: light)" },
      { url: "/images/ui/icon_light.svg", media: "(prefers-color-scheme: dark)" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = getOrganizationJsonLd();
  return (
    <html lang="fr">
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Navbar />
        <div className="main-container">
          <main className="content-wrapper">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: build succeeds, no TypeScript errors.

- [ ] **Step 3: Run dev server and inspect head**

Run in one terminal: `npm run dev`
In another terminal: `curl -s http://localhost:3000 | grep -E "(metadataBase|application/ld\+json|<title>|description)" | head -20`
Expected: see `<title>RESERVOIR Architecture — Architecte à Aix-en-Provence...`, the `application/ld+json` script with `"@type":"ProfessionalService"`, and the description meta tag.

Stop dev server (Ctrl+C).

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "seo: enrich root metadata + inject ProfessionalService JSON-LD"
```

---

## Task 6: Add metadata to `app/page.tsx` (homepage)

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Add metadata export**

Replace `app/page.tsx` with:

```tsx
import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import AgencySection from "@/components/AgencySection";
import {
  VILLA_F_PROJECT,
  SAMARITAINE_PROJECT,
  WAUQUIEZ_PROJECT,
  REGIE_DES_EAUX_PROJECT,
} from "@/lib/projects";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Architecte à Aix-en-Provence, Marseille, Nîmes",
  description:
    "Agence d'architecture en Provence (13, 30, 83, 84). Villas contemporaines, logements collectifs, commerces, équipements publics. Particuliers & promoteurs.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Reservoir Architecture — Architecte en Provence",
    description:
      "Villas, logements, commerces, équipements. Conception sur mesure pour particuliers et promoteurs en Provence.",
    url: SITE_URL,
    type: "website",
  },
};

export default function Home() {
  const categoryProjects = [
    VILLA_F_PROJECT,
    SAMARITAINE_PROJECT,
    WAUQUIEZ_PROJECT,
    REGIE_DES_EAUX_PROJECT,
  ];

  return (
    <main>
      <NavigationCarousel items={categoryProjects} isCategoryNav={true} />
      <AgencySection />
    </main>
  );
}
```

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "seo: add homepage metadata"
```

---

## Task 7: Update 4 category pages (metadata + CollectionPage JSON-LD)

**Files:**
- Modify: `app/villas/page.tsx`
- Modify: `app/logements/page.tsx`
- Modify: `app/commerces/page.tsx`
- Modify: `app/equipements/page.tsx`

- [ ] **Step 1: Read current `app/villas/page.tsx` to understand structure**

Run: `cat app/villas/page.tsx`
Note the imports and JSX so the edit preserves the existing UI.

- [ ] **Step 2: Rewrite `app/villas/page.tsx` end-to-end**

Replace the entire file content with:

```tsx
import type { Metadata } from "next";
import NavigationCarousel from "@/components/NavigationCarousel";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, getCollectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Architecte villa contemporaine en Provence",
    description:
        "Conception et rénovation de villas modernes, maisons d'architecte de luxe à Aix-en-Provence, Marseille, Nîmes. 10 projets réalisés en Provence.",
    alternates: { canonical: `${SITE_URL}/villas` },
    openGraph: {
        title: "Architecte villa contemporaine — Reservoir Architecture",
        description:
            "Villas modernes, maisons d'architecte de luxe, rénovation et extension en Provence.",
        url: `${SITE_URL}/villas`,
        type: "website",
    },
};

export default function VillasPage() {
    const categoryProjects = PROJECTS.filter((p) => p.category === "VILLAS");
    const jsonLd = getCollectionPageJsonLd({
        url: `${SITE_URL}/villas`,
        name: "Architecte villa contemporaine en Provence",
        description:
            "Conception et rénovation de villas modernes, maisons d'architecte de luxe à Aix-en-Provence, Marseille, Nîmes.",
        items: categoryProjects,
    });

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <NavigationCarousel items={categoryProjects} />
        </main>
    );
}
```

- [ ] **Step 3: Apply same pattern to `app/logements/page.tsx`**

Use:
- Title: `Architecte logements collectifs & promoteurs immobiliers`
- Description: `Conception d'immeubles de logements et résidences en Provence (13, 30). Partenaire des promoteurs immobiliers à Aix-en-Provence, Marseille, Nîmes.`
- Filter: `p.category === "LOGEMENTS"`
- Canonical/URL: `${SITE_URL}/logements`

- [ ] **Step 4: Apply same pattern to `app/commerces/page.tsx`**

Use:
- Title: `Architecte commerce, boutique & showroom`
- Description: `Aménagement et design de magasins, showrooms, espaces de vente. Architecture commerciale en Provence (Aix-en-Provence, Marseille, Nîmes).`
- Filter: `p.category === "COMMERCES"`
- Canonical/URL: `${SITE_URL}/commerces`

- [ ] **Step 5: Apply same pattern to `app/equipements/page.tsx`**

Use:
- Title: `Architecte équipements publics`
- Description: `Conception d'équipements publics : gendarmeries, capitaineries, bâtiments municipaux. Architecte en Provence pour collectivités.`
- Filter: `p.category === "ÉQUIPEMENTS"` (note the accented É)
- Canonical/URL: `${SITE_URL}/equipements`

- [ ] **Step 6: Build**

Run: `npm run build`
Expected: build succeeds, all 4 category routes appear in the build output as `○ /villas`, `○ /logements`, etc.

- [ ] **Step 7: Verify metadata renders**

Start dev: `npm run dev`
Run: `curl -s http://localhost:3000/villas | grep -oE "<title>[^<]+</title>"`
Expected: `<title>Architecte villa contemporaine en Provence | Reservoir Architecture</title>`

Run: `curl -s http://localhost:3000/villas | grep -c "application/ld+json"`
Expected: `2` (one Organization from layout + one CollectionPage from page).

Stop dev (Ctrl+C).

- [ ] **Step 8: Commit**

```bash
git add app/villas/page.tsx app/logements/page.tsx app/commerces/page.tsx app/equipements/page.tsx
git commit -m "seo: add metadata + CollectionPage JSON-LD to category pages"
```

---

## Task 8: Update `components/Hero.tsx` to use `getProjectAlt`

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Add import at top of file**

Add to the imports block of `components/Hero.tsx`:

```tsx
import { getProjectAlt } from "@/lib/seo";
```

- [ ] **Step 2: Replace alt strings**

In `components/Hero.tsx`, find:

```tsx
<Image
    src={src}
    alt={`${project.title} ${index + 1}`}
    className="hero-image"
```

Replace with:

```tsx
<Image
    src={src}
    alt={getProjectAlt(project, index)}
    className="hero-image"
```

Find the lightbox image:

```tsx
<Image
    src={project.heroImages[lightboxIndex]}
    alt={`${project.title} ${lightboxIndex + 1}`}
    className="lightbox-image"
```

Replace with:

```tsx
<Image
    src={project.heroImages[lightboxIndex]}
    alt={getProjectAlt(project, lightboxIndex)}
    className="lightbox-image"
```

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 4: Verify alt rendered**

Start dev: `npm run dev`
Run: `curl -s http://localhost:3000/villas/villa-f | grep -oE 'alt="[^"]+"' | head -3`
Expected: alts like `alt="Villa contemporaine VILLA F à Caissargues (30) — projet d'architecte Reservoir Architecture, image 1"`.

Stop dev (Ctrl+C).

- [ ] **Step 5: Commit**

```bash
git add components/Hero.tsx
git commit -m "seo: enrich image alts via getProjectAlt helper"
```

---

## Task 9: Add metadata + JSON-LD to all 36 project pages

**Files:**
- Modify: 36 files under `app/{villas,logements,commerces,equipements}/<slug>/page.tsx`

This task applies the same 2-line pattern to every project page. Do them category by category to commit incrementally.

- [ ] **Step 1: Verify current pattern**

Read `app/villas/villa-f/page.tsx` to confirm the existing structure:

```tsx
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { VILLA_F_PROJECT } from "@/lib/projects";

export default function VillaFPage() {
    return (
        <main>
            <Hero project={VILLA_F_PROJECT} />
            <Content project={VILLA_F_PROJECT} />
        </main>
    );
}
```

- [ ] **Step 2: Define the standard pattern (preserving the existing wrapper)**

Most pages wrap their content in `<main>`, but a few (e.g., `app/equipements/gendarmerie/page.tsx`) use a Fragment `<>`. **Preserve the existing wrapper.** Only add (a) the two new imports, (b) the `metadata` export, (c) the `jsonLd` variable, and (d) the `<script>` as the first child inside the existing wrapper.

For a page currently wrapped in `<main>`:

```tsx
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { <PROJECT_CONST> } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(<PROJECT_CONST>);

export default function <PageName>() {
    const jsonLd = getProjectJsonLd(<PROJECT_CONST>);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={<PROJECT_CONST>} />
            <Content project={<PROJECT_CONST>} />
        </main>
    );
}
```

For a page currently using a Fragment `<>` (preserve the Fragment, do not switch to `<main>`):

```tsx
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { <PROJECT_CONST> } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(<PROJECT_CONST>);

export default function <PageName>() {
    const jsonLd = getProjectJsonLd(<PROJECT_CONST>);
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={<PROJECT_CONST>} />
            <Content project={<PROJECT_CONST>} />
        </>
    );
}
```

When applying to each file: read it first, identify the wrapper used (`<main>` or `<>`), use the matching template above.

- [ ] **Step 3: Apply pattern to all 10 villas pages**

Files (verify the const name in each by reading `lib/projects.ts`):
- `app/villas/villa-f/page.tsx` → `VILLA_F_PROJECT`
- `app/villas/villa-p1/page.tsx` → `VILLA_P1_PROJECT`
- `app/villas/villa-p2/page.tsx` → `VILLA_P2_PROJECT`
- `app/villas/villa-b/page.tsx` → `VILLA_B_PROJECT`
- `app/villas/villa-l/page.tsx` → `VILLA_L_PROJECT`
- `app/villas/villa-s/page.tsx` → `VILLA_S_PROJECT`
- `app/villas/villa-c/page.tsx` → `VILLA_C_PROJECT`
- `app/villas/villa-v/page.tsx` → `VILLA_V_PROJECT`
- `app/villas/villa-t/page.tsx` → `VILLA_T_PROJECT`
- `app/villas/maison-g/page.tsx` → `MAISON_G_PROJECT`

For each file: open it, identify the imported `*_PROJECT` constant, then rewrite the file using the standard pattern from Step 2.

Build after this batch: `npm run build` → expected to pass.

Commit:
```bash
git add app/villas/
git commit -m "seo: add metadata + JSON-LD to villa pages"
```

- [ ] **Step 4: Apply pattern to all 6 logements pages**

Files:
- `app/logements/jacou/page.tsx` → `JACOU_PROJECT`
- `app/logements/martin-pierre/page.tsx` → `MARTIN_PIERRE_PROJECT`
- `app/logements/romi/page.tsx` → `ROMI_PROJECT`
- `app/logements/samaritaine/page.tsx` → `SAMARITAINE_PROJECT`
- `app/logements/trentini/page.tsx` → `TRENTINI_PROJECT`
- `app/logements/vacquerolles/page.tsx` → `VACQUEROLLES_PROJECT`

Build: `npm run build`. Commit:
```bash
git add app/logements/
git commit -m "seo: add metadata + JSON-LD to logements pages"
```

- [ ] **Step 5: Apply pattern to all 9 commerces pages**

Files:
- `app/commerces/anha-ciudad/page.tsx` → `ANHA_CIUDAD_PROJECT`
- `app/commerces/cacharel/page.tsx` → `CACHAREL_PROJECT`
- `app/commerces/denim/page.tsx` → `DENIM_PROJECT`
- `app/commerces/food-village/page.tsx` → `FOOD_VILLAGE_PROJECT`
- `app/commerces/fournil-st-honore/page.tsx` → `FOURNIL_ST_HONORE_PROJECT`
- `app/commerces/garons/page.tsx` → `GARONS_PROJECT`
- `app/commerces/puyricard/page.tsx` → `PUYRICARD_PROJECT`
- `app/commerces/super-u/page.tsx` → `SUPER_U_PROJECT`
- `app/commerces/wauquiez/page.tsx` → `WAUQUIEZ_PROJECT`

Build: `npm run build`. Commit:
```bash
git add app/commerces/
git commit -m "seo: add metadata + JSON-LD to commerces pages"
```

- [ ] **Step 6: Apply pattern to all 11 equipements pages**

Files:
- `app/equipements/capitainerie/page.tsx` → `CAPITAINERIE_PROJECT`
- `app/equipements/clapiers/page.tsx` → `CLAPIERS_PROJECT`
- `app/equipements/cucurron/page.tsx` → `CUCURRON_PROJECT`
- `app/equipements/ferrigno/page.tsx` → `FERRIGNO_PROJECT`
- `app/equipements/gendarmerie/page.tsx` → `GENDARMERIE_PROJECT`
- `app/equipements/grans/page.tsx` → `GRANS_PROJECT`
- `app/equipements/la-tour-daigues/page.tsx` → `LA_TOUR_DAIGUES_PROJECT`
- `app/equipements/lodeve/page.tsx` → `LODEVE_PROJECT`
- `app/equipements/regie-des-eaux/page.tsx` → `REGIE_DES_EAUX_PROJECT`
- `app/equipements/salon-de-provence/page.tsx` → `SALON_PROJECT`
- `app/equipements/vitrolles/page.tsx` → `VITROLLES_PROJECT`

Build: `npm run build`. Commit:
```bash
git add app/equipements/
git commit -m "seo: add metadata + JSON-LD to equipements pages"
```

- [ ] **Step 7: Verify with curl on a sample**

Start dev: `npm run dev`
Run: `curl -s http://localhost:3000/villas/villa-f | grep -oE '"@type":"[A-Za-z]+"' | sort -u`
Expected: `"@type":"CreativeWork"`, `"@type":"Place"`, `"@type":"PostalAddress"`, `"@type":"ProfessionalService"` (the last one comes from the layout).

Run: `curl -s http://localhost:3000/villas/villa-f | grep -oE '<title>[^<]+</title>'`
Expected: `<title>VILLA F — Villa contemporaine à CAISSARGUES (30) | Reservoir Architecture</title>`

Stop dev (Ctrl+C).

---

## Task 10: Create `app/sitemap.ts`

**Files:**
- Create: `app/sitemap.ts`

- [ ] **Step 1: Create the sitemap file**

```tsx
// app/sitemap.ts
import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, categoryToPath } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticUrls: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, priority: 1.0, changeFrequency: "monthly" },
    { url: `${SITE_URL}/villas`, lastModified, priority: 0.9, changeFrequency: "monthly" },
    { url: `${SITE_URL}/logements`, lastModified, priority: 0.9, changeFrequency: "monthly" },
    { url: `${SITE_URL}/commerces`, lastModified, priority: 0.9, changeFrequency: "monthly" },
    { url: `${SITE_URL}/equipements`, lastModified, priority: 0.9, changeFrequency: "monthly" },
  ];

  const projectUrls: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${SITE_URL}/${categoryToPath(p.category)}/${p.slug}`,
    lastModified,
    priority: 0.7,
    changeFrequency: "yearly",
  }));

  return [...staticUrls, ...projectUrls];
}
```

- [ ] **Step 2: Build and verify sitemap is generated**

Run: `npm run build`
Expected: build output mentions `○ /sitemap.xml`.

- [ ] **Step 3: Verify sitemap content**

Start dev: `npm run dev`
Run: `curl -s http://localhost:3000/sitemap.xml | grep -c "<loc>"`
Expected: `41` (5 static + 36 projects).

Run: `curl -s http://localhost:3000/sitemap.xml | head -20`
Expected: valid XML starting with `<?xml version="1.0"`, with `<url><loc>https://reservoir-architecture.com</loc>...`.

Stop dev (Ctrl+C).

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts
git commit -m "seo: add dynamic sitemap with all 36 projects + 5 static routes"
```

---

## Task 11: Create `app/robots.ts`

**Files:**
- Create: `app/robots.ts`

- [ ] **Step 1: Create the robots file**

```tsx
// app/robots.ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/template", "/api/"] },
      // AI bots — explicitly allowed for AEO
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
```

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 3: Verify robots.txt content**

Start dev: `npm run dev`
Run: `curl -s http://localhost:3000/robots.txt`
Expected: contains `User-Agent: *`, `Disallow: /template`, `User-Agent: GPTBot`, and `Sitemap: https://reservoir-architecture.com/sitemap.xml`.

Stop dev (Ctrl+C).

- [ ] **Step 4: Commit**

```bash
git add app/robots.ts
git commit -m "seo: add robots.txt allowing AI crawlers (GPTBot, ClaudeBot, PerplexityBot)"
```

---

## Task 12: Final validation

**Files:** none modified.

- [ ] **Step 1: Full clean build**

Run: `rm -rf .next && npm run build`
Expected: build succeeds. Note routes in output — should include all category pages, all 36 project pages, `/sitemap.xml`, `/robots.txt`.

- [ ] **Step 2: Lint clean**

Run: `npm run lint`
Expected: no errors. Warnings acceptable if they pre-existed.

- [ ] **Step 3: Production-mode local check**

Run: `npm run start` (after `npm run build`)
In another terminal:

```bash
# Homepage
curl -s http://localhost:3000 | grep -oE '<title>[^<]+</title>'
# → Should print homepage title

# Sitemap completeness
curl -s http://localhost:3000/sitemap.xml | grep -c "<loc>"
# → Should print 41

# A project page schema validity (count JSON-LD blocks)
curl -s http://localhost:3000/commerces/wauquiez | grep -c "application/ld+json"
# → Should print 2 (Organization from layout + CreativeWork from page)

# Robots
curl -s http://localhost:3000/robots.txt | grep -c "GPTBot"
# → Should print 1
```

Stop server (Ctrl+C).

- [ ] **Step 4: Manual schema validation (post-deploy)**

Once deployed to `https://reservoir-architecture.com`:
1. Open https://validator.schema.org/ → paste the homepage URL → confirm `ProfessionalService` schema is detected and valid.
2. Open https://opengraph.xyz/ → paste a project URL → confirm Open Graph image renders.
3. Submit `https://reservoir-architecture.com/sitemap.xml` to Google Search Console.

This step is informational — no code change.

- [ ] **Step 5: Final commit (only if any cleanup was needed)**

If steps 1-3 surfaced any issues, fix them and commit. Otherwise skip.
