import Image from "next/image";
import { ARCHIDVISOR_URL } from "@/lib/seo";

// Avis Archidvisor (mêmes contenus que les landing pages), réutilisés sur les pages v2.
export default function V2Reviews() {
    return (
        <div className="v2-reviews">
            <div className="v2-reviews-head">
                <Image src="/images/ui/archidvisor.webp" alt="Archidvisor" width={797} height={165} className="v2-reviews-logo" />
                <span className="v2-reviews-score">5,0<span>/5</span></span>
                <span className="v2-stars" aria-label="5 étoiles sur 5">★★★★★</span>
                <span className="v2-reviews-count">8 avis vérifiés</span>
            </div>
            <ul>
                <li><blockquote>« Très professionnel et force de proposition. Très bon contact. »</blockquote><cite>Arnaud M.</cite><span className="v2-stars" aria-label="5 étoiles sur 5">★★★★★</span></li>
                <li><blockquote>« Très disponible, rapide, de bons conseils. »</blockquote><cite>Celsio C.</cite><span className="v2-stars" aria-label="5 étoiles sur 5">★★★★★</span></li>
                <li><blockquote>« Il a été très rapide et précis. Merci pour votre professionnalisme et votre compétence. »</blockquote><cite>Hamid Y.</cite><span className="v2-stars" aria-label="5 étoiles sur 5">★★★★★</span></li>
                <li><blockquote>« Bien à l&apos;écoute, a parfaitement compris ce que j&apos;attendais. »</blockquote><cite>Axel A.</cite><span className="v2-stars" aria-label="5 étoiles sur 5">★★★★★</span></li>
            </ul>
            <a href={ARCHIDVISOR_URL} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-ghost">Voir tous les avis</a>
        </div>
    );
}
