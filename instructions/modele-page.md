# Modele de Page Projet - Source de Verite

Composant unique: `components/Content.tsx` + `components/content.css`
Classes typographiques globales: `app/globals.css`

---

## Echelle typographique (globals.css)

| Classe      | Role       | Taille   | Poids | Letter-spacing | Autres          |
|-------------|------------|----------|-------|----------------|-----------------|
| `.subtitle` | Overline   | 0.75rem  | 400   | 0.8em          | uppercase       |
| `.title`    | H1         | 1.75rem  | 700   | 0.1em          |                 |
| `.title-1`  | H2         | 1.25rem  | 600   | 0.1em          |                 |
| `.title-2`  | H3         | 0.875rem | 600   | 0.1em          |                 |
| `.body-text`| Paragraphe | 0.875rem | 400   |                | line-height 1.6 |

---

## Structure d'une page projet

```
[Overline]          subtitle           <p>   .subtitle       (mb 30px, color #333)
[Logo optionnel]    optionalLogo       <img>                  (rare, ex: Food Village)
[H1]                title              <h1>  .title          (mb 12px si H2/H3, sinon 24px)
[H2]                optionalSubtitle   <h2>  .title-1        (mb 20px)
[H3]                descriptionHeader  <h3>  .title-2        (mb 2rem)
[Logo projet]       projectLogo        <img>                  (fond noir, inutilise actuellement)
---
[Paragraphes]       descriptionParagraphs  <p>  .body-text
[Fiche technique]   techSheet
```

---

## Utilisation des champs par categorie

| Champ                    | Villas | Logements | Commerces   | Equipements |
|--------------------------|--------|-----------|-------------|-------------|
| `subtitle` (overline)    | 10/10  | 6/6       | 9/9         | 11/11       |
| `title` (H1)             | 10/10  | 6/6       | 9/9         | 11/11       |
| `optionalSubtitle` (H2)  | 10/10  | 6/6       | 9/9         | 11/11       |
| `descriptionHeader` (H3) | 10/10  | 6/6       | 8/9         | 5/11        |
| `optionalLogo`           | 0      | 0         | 1           | 0           |
| `descriptionParagraphs`  | 10/10  | 6/6       | 9/9 (1 vide)| 11/11       |
| `techSheet`              | 10/10  | 6/6       | 9/9         | 11/11       |

Notes:
- `projectLogo` existe dans le type mais n'est utilise par aucun projet
- Super U (commerces) est un stub: pas de descriptionHeader, paragraphes vides
- 6 equipements n'ont pas de descriptionHeader (H3)
