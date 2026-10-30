import type { Metadata } from "next";
import { SITE_ADDRESS, SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_PHONE_DISPLAY, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Mentions légales",
    description: "Mentions légales du site de Reservoir Architecture : éditeur, hébergeur et informations sur les avis clients.",
    alternates: { canonical: `${SITE_URL}/mentions-legales` },
};

// Mentions légales (créées le 2026-10-30). Rubrique « Avis clients » : articles L111-7-2 et D111-17 du Code de la consommation.
export default function MentionsLegalesPage() {
    return (
        <main>
            <section className="v2-section v2-legal">
                <h1 className="v2-h2">Mentions légales</h1>

                <h2 className="v2-h3">Éditeur du site</h2>
                <p className="v2-small">
                    {SITE_NAME}, société par actions simplifiée (SAS)<br />
                    SIRET 792 144 875 00020<br />
                    Siège : {SITE_ADDRESS}<br />
                    Téléphone : <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a><br />
                    Email : <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                </p>
                <p className="v2-small">
                    Société d&apos;architecture inscrite au Tableau de l&apos;Ordre des architectes sous le numéro S16033.<br />
                    Assurance professionnelle : Mutuelle des Architectes Français (MAF).
                </p>

                <h2 className="v2-h3">Hébergeur</h2>
                <p className="v2-small">
                    Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis
                </p>

                <h2 className="v2-h3" id="avis">Avis clients</h2>
                <p className="v2-small">
                    Le site reprend des avis publiés par des clients sur Google et sur Archidvisor. Ils sont affichés du plus récent au plus ancien, avec leur date de publication.
                </p>
                <p className="v2-small">
                    Avis Google : avant d&apos;être repris sur ce site, chaque avis est rapproché des dossiers clients de l&apos;agence (contrat, facture ou permis). Seuls les avis de clients identifiés sont repris. Un avis peut être raccourci ; il reste consultable en entier sur la fiche Google de l&apos;agence.
                </p>
                <p className="v2-small">
                    Avis Archidvisor : collectés et publiés par la plateforme Archidvisor, selon ses propres règles.
                </p>
                <p className="v2-small">
                    Aucune contrepartie n&apos;est accordée en échange d&apos;un avis. Les avis restent affichés sur ce site au plus 10 ans après leur publication.
                </p>
            </section>
        </main>
    );
}
