import type { Metadata } from "next";
import V2Contact from "@/app/accueil-v2/V2Contact";
import { SITE_URL, getContactPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Contact architecte Aix-en-Provence",
    description:
        "Contacter Reservoir Architecture, agence d'architecture à Aix-en-Provence : email, téléphone, adresse et demandes de projets en PACA et en Occitanie.",
    alternates: { canonical: `${SITE_URL}/contact` },
    openGraph: {
        title: "Contact - Reservoir Architecture",
        description:
            "Email, téléphone et adresse de l'agence d'architecture Reservoir Architecture à Aix-en-Provence.",
        url: `${SITE_URL}/contact`,
        type: "website",
    },
};

export default function ContactPage() {
    const jsonLd = getContactPageJsonLd();

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <V2Contact />
        </main>
    );
}
