// Contenus des pages catégories, repris des pages en ligne (app/<catégorie>/page.tsx) pour la v2.
export type V2Category = {
    path: string;
    category: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    metaTitle: string;
    description: string;
    links: { href: string; label: string }[];
    paragraphs: string[];
};

export const V2_CATEGORIES: V2Category[] = [
    {
        "path": "villas",
        "category": "VILLAS",
        "eyebrow": "Villas et maisons d'architecte",
        "title": "Architecte villa contemporaine en PACA",
        "subtitle": "Depuis Aix-en-Provence, Reservoir Architecture accompagne la conception, la rénovation et l'extension de villas contemporaines dans des contextes méditerranéens variés.",
        "metaTitle": "Architecte villa contemporaine en PACA",
        "description": "Conception, rénovation et extension de villas contemporaines en PACA. Reservoir Architecture accompagne les maisons d'architecte depuis Aix-en-Provence.",
        "links": [
            {
                "href": "/etude-terrain",
                "label": "Étude de terrain avant achat"
            },
            {
                "href": "/villas-aix-en-provence",
                "label": "Architecte villa à Aix-en-Provence"
            },
            {
                "href": "/villas-marseille",
                "label": "Architecte villa à Marseille"
            },
            {
                "href": "/villas-nimes",
                "label": "Architecte villa à Nîmes"
            },
            {
                "href": "/villas-nice",
                "label": "Architecte villa à Nice"
            },
            {
                "href": "/contact",
                "label": "Parler d'un projet"
            }
        ],
        "paragraphs": [
            "Une villa contemporaine ne se limite pas à une image. Elle doit répondre au terrain, à l'orientation, aux vues, à la lumière, aux règles d'urbanisme et aux usages quotidiens. L'agence travaille ces paramètres pour construire une maison cohérente avec son site et durable dans le temps.",
            "Les projets présentés regroupent des constructions neuves, rénovations, extensions et transformations de maisons existantes. Les réponses architecturales varient selon les contraintes : maison de ville à Aix-en-Provence, terrain en pente, site inondable, relation au jardin, cadrage des vues ou recherche d'intimité.",
            "Reservoir Architecture intervient auprès de particuliers qui cherchent une maison précise, fonctionnelle et située, avec une attention portée à la matérialité, aux proportions, aux transitions intérieur-extérieur et à la maîtrise du projet.",
            "Cette page rassemble les références de villas et maisons d'architecte de l'agence. Chaque fiche projet détaille le lieu, la mission, la surface, le calendrier et la démarche architecturale."
        ]
    },
    {
        "path": "logements",
        "category": "LOGEMENTS",
        "eyebrow": "Logements collectifs et résidences",
        "title": "Architecte logements collectifs en PACA",
        "subtitle": "Reservoir Architecture conçoit résidences et opérations de logements collectifs pour promoteurs, bailleurs et maîtres d'ouvrage, de l'étude de faisabilité à la livraison, en PACA et dans le Gard.",
        "metaTitle": "Architecte logements collectifs en PACA",
        "description": "Architecte pour vos opérations de logements collectifs et résidences en PACA. Promoteurs, bailleurs et maîtres d'ouvrage, de l'étude de faisabilité au permis et à la livraison.",
        "links": [
            {
                "href": "/etude-de-faisabilite",
                "label": "Étude de faisabilité et capacitaire"
            },
            {
                "href": "/contact",
                "label": "Parler d'une opération"
            },
            {
                "href": "/equipements",
                "label": "Équipements"
            }
        ],
        "paragraphs": [
            "Concevoir une opération de logement collectif, c'est arbitrer en permanence entre densité, qualité d'usage, insertion urbaine, équilibre économique et confort des habitants. L'agence aborde chaque programme comme une situation spécifique, de la petite résidence à l'opération de 30 logements et plus, plutôt qu'un modèle à dupliquer.",
            "Nous travaillons aux côtés des promoteurs, bailleurs, investisseurs et maîtres d'ouvrage privés. Pour chaque opération, l'objectif est double : un projet qui se commercialise et se vit bien, et un projet qui tient son bilan, son planning et ses contraintes réglementaires.",
            "En amont, l'agence réalise les études de faisabilité et le capacitaire : analyse du foncier, lecture du PLU(i), potentiel constructible, nombre de logements et typologies envisageables du T2 au T5, stationnement et gabarits. Ce cadrage sécurise votre opération avant tout engagement.",
            "En phase projet, nous menons l'opération de l'esquisse au dépôt du permis de construire, puis jusqu'au suivi de chantier. Compacité, lumière, accès, intimité, prolongements extérieurs, lisibilité des espaces communs et conformité RE2020 sont traités dès la conception, pas ajoutés après coup.",
            "Basée à Aix-en-Provence, l'agence intervient sur toute la région PACA, d'Aix à Marseille et au-delà, ainsi que dans le Gard voisin où elle a conçu de nombreuses résidences. Cette implantation facilite l'analyse du foncier, les échanges avec les services instructeurs et le suivi rapproché des opérations.",
            "Les références présentées couvrent une résidence de 30 logements collectifs organisée autour d'un jardin patio, des petits collectifs insérés en tissu urbain dense, ainsi que des extensions et réhabilitations de résidences existantes. Chaque fiche projet précise le programme, la surface, la mission et le parti pris architectural de l'opération."
        ]
    },
    {
        "path": "commerces",
        "category": "COMMERCES",
        "eyebrow": "Commerces et lieux de marque",
        "title": "Architecte commerce et showroom en PACA",
        "subtitle": "L'agence conçoit des espaces commerciaux, boutiques, showrooms et lieux de marque où l'architecture sert autant l'usage que la perception.",
        "metaTitle": "Architecte commerce et showroom en PACA",
        "description": "Architecture commerciale, boutiques, showrooms et espaces de vente en PACA. Reservoir Architecture conçoit des lieux de marque et de parcours client.",
        "links": [
            {
                "href": "/etude-de-faisabilite",
                "label": "Étude de faisabilité et capacitaire"
            },
            {
                "href": "/contact",
                "label": "Présenter un projet"
            },
            {
                "href": "/villas",
                "label": "Villas"
            }
        ],
        "paragraphs": [
            "Un commerce ou un showroom doit être lisible, identifiable et efficace sans devenir un décor jetable. Reservoir Architecture travaille les parcours, la lumière, les matériaux, la visibilité des produits et la cohérence entre l'espace et l'identité de marque.",
            "L'expérience de l'agence dans l'univers retail et scénographique nourrit une approche précise des espaces de vente : boutiques, boulangeries, restaurants, showrooms nautiques, programmes mixtes et lieux de services.",
            "Les projets commerciaux présentés montrent des réponses adaptées à des contextes très différents, de l'aménagement intérieur à la création d'un ensemble de commerces. Chaque opération combine contraintes techniques, flux clients, image, budget et durabilité.",
            "Depuis Aix-en-Provence, l'agence accompagne des maîtres d'ouvrage en PACA et dans le sud de la France pour transformer un programme commercial en lieu clair, mémorable et exploitable."
        ]
    },
    {
        "path": "equipements",
        "category": "ÉQUIPEMENTS",
        "eyebrow": "Équipements publics",
        "title": "Architecte équipements publics en PACA",
        "subtitle": "Reservoir Architecture accompagne des collectivités et maîtres d'ouvrage publics sur des projets de réhabilitation, extension, transformation et construction d'équipements.",
        "metaTitle": "Architecte équipements publics en PACA",
        "description": "Conception, réhabilitation et extension d'équipements publics en PACA : bâtiments municipaux, gendarmerie, capitainerie, archives et services techniques.",
        "links": [
            {
                "href": "/contact",
                "label": "Contacter l'agence"
            },
            {
                "href": "/logements",
                "label": "Logements"
            }
        ],
        "paragraphs": [
            "Les équipements publics demandent une architecture robuste, lisible et attentive aux usages quotidiens. Les contraintes techniques, réglementaires et budgétaires y sont fortes, mais elles peuvent devenir le cadre d'une réponse claire et durable.",
            "Les références de l'agence comprennent des bâtiments municipaux, gendarmeries, capitaineries, archives, centres techniques, équipements jeunesse et services publics. Les interventions portent autant sur la réhabilitation que sur l'extension, la surélévation ou la transformation de bâtiments existants.",
            "Depuis Aix-en-Provence, Reservoir Architecture intervient en PACA auprès des collectivités avec une attention portée à la pérennité constructive, à l'intégration urbaine, à la qualité des parcours et à la maintenance future des ouvrages.",
            "Cette sélection de projets présente les programmes, missions, surfaces, calendriers et intentions architecturales des équipements publics réalisés ou étudiés par l'agence."
        ]
    }
];
