import Hero from "@/components/Hero";
import Content from "@/components/Content";
import { ANHA_CIUDAD_PROJECT } from "@/lib/projects";
import { getProjectMetadata, getProjectJsonLd } from "@/lib/seo";

export const metadata = getProjectMetadata(ANHA_CIUDAD_PROJECT);

export default function AnhaCiudadPage() {
    const jsonLd = getProjectJsonLd(ANHA_CIUDAD_PROJECT);
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero project={ANHA_CIUDAD_PROJECT} />
            <Content project={ANHA_CIUDAD_PROJECT} />
        </main>
    );
}
