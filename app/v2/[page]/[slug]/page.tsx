import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/projects";
import { categoryToPath } from "@/lib/seo";
import V2ProjectPage from "../../../accueil-v2/V2ProjectPage";

export const dynamicParams = false;

export function generateStaticParams() {
    return PROJECTS.map((p) => ({ page: categoryToPath(p.category), slug: p.slug }));
}

function find(page: string, slug: string) {
    return PROJECTS.find((p) => p.slug === slug && categoryToPath(p.category) === page);
}

export async function generateMetadata({ params }: { params: Promise<{ page: string; slug: string }> }): Promise<Metadata> {
    const { page, slug } = await params;
    const p = find(page, slug);
    return p ? { title: `${p.title}, ${p.subtitle}` } : {};
}

export default async function V2Project({ params }: { params: Promise<{ page: string; slug: string }> }) {
    const { page, slug } = await params;
    const p = find(page, slug);
    if (!p) notFound();
    return <V2ProjectPage project={p} />;
}
