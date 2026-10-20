import type { ProjectData } from "@/types/project";
import { categoryToPath } from "@/lib/seo";

// Le site v2 vit sous /v2 (non indexé) : tous ses liens internes restent dans la v2.
export const V2_HOME = "/v2";

export function v2(path: string) {
    return path === "/" ? V2_HOME : `${V2_HOME}${path}`;
}

export function v2ProjectHref(project: ProjectData) {
    return v2(`/${categoryToPath(project.category)}/${project.slug}`);
}
