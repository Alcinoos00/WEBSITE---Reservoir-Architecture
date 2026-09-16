import { useEffect, type RefObject } from "react";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Boîte de dialogue accessible au clavier : le focus entre dans la boîte à l'ouverture,
// Tab et Maj+Tab restent à l'intérieur, et le focus revient à l'élément d'origine à la fermeture.
export function useDialogFocus(ref: RefObject<HTMLElement | null>, open: boolean) {
    useEffect(() => {
        if (!open) return;
        const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        const root = ref.current;
        root?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key !== "Tab" || !root) return;
            const items = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE));
            if (items.length === 0) return;
            const first = items[0];
            const last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            previous?.focus();
        };
    }, [open, ref]);
}
