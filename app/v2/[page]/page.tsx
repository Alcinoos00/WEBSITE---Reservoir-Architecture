import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { LandingData } from "@/components/LandingPage";
import { data as villasAix } from "@/lib/landings/villas-aix-en-provence";
import { data as commercesAix } from "@/lib/landings/commerces-aix-en-provence";
import { data as logementsAix } from "@/lib/landings/logements-aix-en-provence";
import { data as equipementsAix } from "@/lib/landings/equipements-aix-en-provence";
import { data as villasMarseille } from "@/lib/landings/villas-marseille";
import { data as villasNice } from "@/lib/landings/villas-nice";
import { data as villasNimes } from "@/lib/landings/villas-nimes";
import { V2_CATEGORIES } from "../../accueil-v2/v2Categories";
import V2CategoryPage from "../../accueil-v2/V2CategoryPage";
import V2LandingPage from "../../accueil-v2/V2LandingPage";

// Une seule route pour les 4 catégories et les 7 landings de la v2.
const LANDINGS: Record<string, LandingData> = {
    "villas-aix-en-provence": villasAix,
    "commerces-aix-en-provence": commercesAix,
    "logements-aix-en-provence": logementsAix,
    "equipements-aix-en-provence": equipementsAix,
    "villas-marseille": villasMarseille,
    "villas-nice": villasNice,
    "villas-nimes": villasNimes,
};

export const dynamicParams = false;

export function generateStaticParams() {
    return [...V2_CATEGORIES.map((c) => ({ page: c.path })), ...Object.keys(LANDINGS).map((page) => ({ page }))];
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
    const { page } = await params;
    const c = V2_CATEGORIES.find((x) => x.path === page);
    if (c) return { title: c.metaTitle, description: c.description };
    const l = LANDINGS[page];
    return l ? { title: l.hero.h1 } : {};
}

export default async function V2Page({ params }: { params: Promise<{ page: string }> }) {
    const { page } = await params;
    const c = V2_CATEGORIES.find((x) => x.path === page);
    if (c) return <V2CategoryPage c={c} />;
    const l = LANDINGS[page];
    if (l) return <V2LandingPage data={l} />;
    notFound();
}
