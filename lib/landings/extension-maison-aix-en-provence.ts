// Contenu de la landing /extension-maison-aix-en-provence : extension, surélévation et annexes de maisons existantes.
// Créée le 20/11/2026 après le test de visibilité dans les IA : sans page dédiée, l'agence n'était pas citée
// sur « agrandir une maison près d'Aix ». Uniquement des faits publiés ailleurs sur le site.
import type { LandingData } from "@/components/LandingPage";

export const data: LandingData = {
    hero: {
        eyebrow: "Architecte à Aix-en-Provence",
        h1: "Agrandir votre maison à Aix-en-Provence",
        sub: "Extension, surélévation, annexe ou transformation complète : Serge Ettore, architecte DPLG, conçoit l’agrandissement de votre maison existante, de l’analyse du PLU(i) au permis de construire et jusqu’au suivi du chantier.",
        trust: "Architecte DPLG depuis 1999 · Agence fondée en 2013 à Aix-en-Provence · Estimation sous 48h",
        img: "/images/projects/1-villas/villa T/villaT_1.jpg",
        alt: "Extension vitrée d’une maison de ville à Aix-en-Provence, Villa T, par Reservoir Architecture",
        ctaPrimary: "Parler de mon extension",
        ctaEmail: "Email",
    },
    realisations: {
        eyebrow: "Nos projets d’extension et de transformation",
        lead: "Agrandir une maison, c’est d’abord tirer parti de ce qui existe : la lumière, le jardin, les vues, la structure. Nous concevons des extensions qui prolongent la maison au lieu de s’y ajouter.",
        projects: [
            {
                title: "Villa T",
                img: "/images/projects/1-villas/villa T/villaT_3.jpg",
                alt: "Pavillon annexe en enduit beige au bord de la piscine, Villa T à Aix-en-Provence, par Reservoir Architecture",
                desc: "Maison de ville aixoise réhabilitée et prolongée d’extensions contemporaines largement ouvertes sur les terrasses et le jardin, avec un pavillon annexe au bord de la piscine. Mission complète, livrée en 2024.",
                specs: [
                    { icon: "surface", label: "202 m²" },
                    { icon: "mission", label: "Réhabilitation et extension" },
                    { icon: "pin", label: "Aix-en-Provence (13)" },
                ],
                cta: "Agrandir ma maison",
                loc: "ext_card_villa_t",
            },
            {
                title: "Villa F",
                img: "/images/projects/1-villas/villa F/villaF_2.jpg",
                alt: "Villa F, perspective aérienne d’une maison de lotissement réhabilitée et agrandie, par Reservoir Architecture",
                desc: "Projet de transformation d’une maison de lotissement en villa contemporaine de 401 m², agrandie autour d’une cour-piscine. Conception et permis de construire ; images en perspective.",
                specs: [
                    { icon: "surface", label: "401 m²" },
                    { icon: "mission", label: "Extension (conception et permis)" },
                    { icon: "pin", label: "Caissargues (30)" },
                ],
                cta: "Étudier mon projet",
                loc: "ext_card_villa_f",
            },
            {
                title: "Maison G",
                img: "/images/projects/1-villas/maison G/maisonG_1.jpg",
                alt: "Maison G, façade sur rue en enduit ocre avec volet bois coulissant, à Aimargues, par Reservoir Architecture",
                desc: "Une grange en pierre de centre ancien démolie et remplacée par une maison de ville contemporaine sur trois niveaux, éclairée par un puits de lumière jusqu’à une terrasse en toiture. Mission complète.",
                specs: [
                    { icon: "surface", label: "140,5 m²" },
                    { icon: "mission", label: "Transformation d’un bâti existant" },
                    { icon: "pin", label: "Aimargues (30)" },
                ],
                cta: "Transformer ma maison",
                loc: "ext_card_maison_g",
            },
        ],
    },
    reassurance: {
        reasonsEyebrow: "Pourquoi un architecte pour votre extension",
        reasons: [
            {
                icon: "shield",
                title: "Obligatoire au-delà de 150 m² avec permis.",
                text: "Si l’agrandissement exige un permis de construire et que votre maison dépasse 150 m² de surface de plancher après travaux, ce permis doit être établi par un architecte. Sinon, il reste le meilleur moyen de réussir le raccord avec l’existant.",
            },
            {
                icon: "pin",
                title: "Les règles du Pays d’Aix.",
                text: "Emprise au sol, hauteur, reculs, aspect des toitures, secteurs protégés : nous vérifions ce que le PLU(i) permet d’ajouter avant de dessiner.",
            },
            {
                icon: "building",
                title: "De l’analyse au chantier.",
                text: "Un seul interlocuteur : faisabilité, conception, autorisation d’urbanisme, consultation des entreprises et suivi des travaux, maison habitée ou non.",
            },
        ],
        stepsEyebrow: "Comment se passe votre agrandissement",
        steps: [
            { title: "Échange et visite.", text: "Vous nous présentez votre maison, vos besoins et votre budget. Estimation sous 48h." },
            { title: "Analyse de constructibilité.", text: "Surface encore constructible selon le PLU(i), reculs, hauteur, contraintes de la structure existante." },
            { title: "Conception et autorisation.", text: "Esquisse, plans, puis déclaration préalable ou permis de construire selon la surface créée." },
            { title: "Travaux.", text: "Consultation des entreprises, suivi de chantier et réception." },
        ],
        cta: "Échanger avec l’architecte",
        ctaLoc: "ext_reassurance",
        secondaryCta: { label: "Vous achetez une maison ? L’étude avant achat vérifie si elle est agrandissable", href: "/etude-terrain" },
    },
    local: {
        img: "/images/projects/1-villas/maison G/maisonG_2.jpg",
        alt: "Terrasse en bois et verrière de toiture de la Maison G, par Reservoir Architecture",
        eyebrow: "Un architecte installé à",
        city: "Aix-en-Provence",
        paragraphs: [
            "Notre agence est basée à Aix-en-Provence. Nous concevons l’extension, la surélévation et la transformation de maisons à Aix et dans le Pays d’Aix, dans les Bouches-du-Rhône et dans l’ensemble de la région PACA.",
            "Extension de plain-pied, étage supplémentaire, véranda, pool house, garage transformé en pièce de vie, ouverture d’une maison de ville sur son jardin : chaque projet part de la maison telle qu’elle est, de sa structure et de son terrain.",
            "Avant de dessiner, nous faisons l’analyse de constructibilité de votre parcelle : ce que le PLU(i) autorise encore, et si le projet relève d’une déclaration préalable ou d’un permis de construire.",
        ],
        cta: "Parler de mon projet",
        ctaLoc: "ext_local",
    },
    faq: {
        eyebrow: "Questions fréquentes sur l’extension de maison",
        items: [
            { q: "Faut-il un architecte pour agrandir sa maison ?", a: "Oui dès que l’agrandissement exige un permis de construire et que la maison dépasse 150 m² de surface de plancher après travaux : on compte la surface totale, existant compris. Une maison de 120 m² agrandie de 40 m² habitables nécessite donc un architecte. Un garage n’entre pas dans la surface de plancher. Si la maison appartient à une société, comme une SCI, l’architecte est obligatoire pour tout permis de construire, quelle que soit la surface. Un projet soumis à simple déclaration préalable n’exige jamais d’architecte." },
            { q: "Extension de maison : permis de construire ou déclaration préalable ?", a: "Une déclaration préalable suffit jusqu’à 20 m² de surface de plancher ou d’emprise au sol créés. En zone urbaine d’un PLU(i), ce seuil passe à 40 m², sauf si la maison dépasse alors 150 m² au total : il faut dans ce cas un permis de construire et un architecte. Au-delà de 40 m², le permis de construire est obligatoire." },
            { q: "Peut-on surélever sa maison à Aix-en-Provence ?", a: "Souvent, mais tout dépend du PLU(i) : hauteur maximale, aspect des toitures, distances aux limites. La structure existante doit aussi pouvoir porter un étage. Dans le centre historique et près des monuments protégés, l’avis de l’architecte des Bâtiments de France s’ajoute. Une surélévation crée de la surface : les mêmes seuils de déclaration préalable ou de permis de construire s’appliquent." },
            { q: "Comment savoir si ma maison peut être agrandie ?", a: "C’est l’objet de l’analyse de constructibilité : surface encore constructible selon le PLU(i), emprise au sol, hauteur, reculs, servitudes et risques. Nous la faisons au début de chaque projet. Si vous êtes en train d’acheter, notre étude de terrain avant achat répond à cette question avant la signature." },
            { q: "Pouvez-vous ajouter un garage, un pool house ou une véranda ?", a: "Oui. Ces annexes comptent dans l’emprise au sol, que le PLU(i) limite souvent. Un pool house ou une véranda close et couverte ajoute aussi de la surface de plancher ; un garage, non, car les surfaces de stationnement en sont exclues. Nous vérifions d’abord ce que le PLU(i) autorise." },
            { q: "Avez-vous déjà agrandi une maison à Aix-en-Provence ?", a: "Oui : la Villa T, une maison de ville aixoise de 202 m² réhabilitée et prolongée d’extensions contemporaines, avec un pavillon annexe, en mission complète, livrée en 2024." },
            { q: "Combien coûte un architecte pour une extension ?", a: "Les honoraires dépendent de la surface, de la complexité et de l’étendue de la mission (permis seul ou mission complète jusqu’au chantier). Nous vous adressons une proposition claire après un premier échange, et une estimation du budget de travaux sous 48h." },
            { q: "Peut-on rester dans la maison pendant les travaux ?", a: "Souvent, pour une extension de plain-pied qui se raccorde à la maison en fin de chantier. Pour une surélévation ou une transformation lourde, c’est plus difficile. Nous en parlons dès la conception pour organiser le chantier en conséquence." },
        ],
        cta: "Poser une question",
        ctaLoc: "ext_faq",
    },
    finalCta: {
        img: "/images/projects/1-villas/villa T/villaT_4.jpg",
        h2: "Agrandir ma maison à Aix",
        p: "Un premier échange pour comprendre votre maison, vos besoins et votre budget. Estimation sous 48h, sans engagement.",
        ctaPrimary: "Appeler l’agence",
        ctaEmail: "Écrire un email",
    },
};
