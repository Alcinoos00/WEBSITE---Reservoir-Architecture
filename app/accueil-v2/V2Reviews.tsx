import Image from "next/image";
import { ARCHIDVISOR_URL, GOOGLE_REVIEWS_URL } from "@/lib/seo";

// Avis clients : Archidvisor (avis vérifiés) et Google (avis non vérifiés par Google),
// réutilisés sur l'accueil et les landing pages v2.
// Avis Google recopiés à la main le 2026-10-30 : extraits courts, prénom et initiale, lien vers la fiche.
// À mettre à jour quand la note ou le nombre d'avis change sur la fiche Google.
const GOOGLE_RATING = "5,0";
const GOOGLE_COUNT = 3;

// Classés du plus récent au plus ancien (date de publication de l'avis, au mois près).
const REVIEWS = [
    { text: "Serge a été un très bon architecte pour notre projet de rénovation lourde : force de proposition, challenge de nos idées […]", author: "Pierre-Alain L.", source: "Google", date: "octobre 2026" },
    { text: "Notre maison a dix ans cette année et nous en sommes toujours ravis !", author: "David P.", source: "Google", date: "octobre 2026" },
    { text: "Nous avons été très bien orientés et conseillés tout au long de notre projet de construction. Un architecte à l'écoute, qui a su comprendre nos besoins […]", author: "Emeric", source: "Google", date: "octobre 2026" },
    { text: "Très professionnel et force de proposition. Très bon contact.", author: "Arnaud M.", source: "Archidvisor", date: "août 2026" },
    { text: "Il a été très rapide et précis. Merci pour votre professionnalisme et votre compétence.", author: "Hamid Y.", source: "Archidvisor", date: "décembre 2025" },
    { text: "Très disponible, rapide, de bons conseils.", author: "Celsio C.", source: "Archidvisor", date: "novembre 2024" },
    { text: "Bien à l'écoute, a parfaitement compris ce que j'attendais.", author: "Axel A.", source: "Archidvisor", date: "mars 2023" },
];

export default function V2Reviews() {
    return (
        <div className="v2-reviews">
            <div className="v2-reviews-sources">
                <div className="v2-reviews-head">
                    <Image src="/images/ui/archidvisor.webp" alt="Archidvisor" width={797} height={165} className="v2-reviews-logo" />
                    <span className="v2-reviews-score">5,0<span>/5</span></span>
                    <span className="v2-stars" aria-label="5 étoiles sur 5">★★★★★</span>
                    <span className="v2-reviews-count">8 avis vérifiés</span>
                </div>
                <div className="v2-reviews-head">
                    <span className="v2-reviews-google">Google</span>
                    <span className="v2-reviews-score">{GOOGLE_RATING}<span>/5</span></span>
                    <span className="v2-stars" aria-label="5 étoiles sur 5">★★★★★</span>
                    <span className="v2-reviews-count">{GOOGLE_COUNT} avis non vérifiés</span>
                </div>
            </div>
            <ul>
                {REVIEWS.map((r) => (
                    <li key={r.author}>
                        <blockquote>« {r.text} »</blockquote>
                        <cite>{r.author} · {r.source} · {r.date}</cite>
                        <span className="v2-stars" aria-label="5 étoiles sur 5">★★★★★</span>
                    </li>
                ))}
            </ul>
            <p className="v2-reviews-note">Avis classés du plus récent au plus ancien. Google indique que ses avis ne sont pas vérifiés ; l&apos;agence ne les contrôle pas non plus.</p>
            <div className="v2-reviews-links">
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-ghost">Avis Google</a>
                <a href={ARCHIDVISOR_URL} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-ghost">Avis Archidvisor</a>
            </div>
        </div>
    );
}
