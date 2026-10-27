import type { ProjectData } from "@/types/project";
import { categoryToPath } from "@/lib/seo";

// Le site v2 est à la racine depuis le 2026-10-27 (la v1 vit sous /v1).
// Helper gardé pour ne pas toucher à tous les liens des composants v2.
export function v2(path: string) {
    return path;
}

export function v2ProjectHref(project: ProjectData) {
    return v2(`/${categoryToPath(project.category)}/${project.slug}`);
}
