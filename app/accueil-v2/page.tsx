import { permanentRedirect } from "next/navigation";

// L'ancienne page de travail « accueil v2 » est devenue l'accueil : on renvoie vers /.
export default function AccueilV2() {
    permanentRedirect("/");
}
