import { ShortCut } from "./ShortcutManager";

export function EnableEditMode(action: () => void) {
    ShortCut.register("l", action);
}

export function SaveEditionMode(action: () => void) {
    ShortCut.register("Enter", action);
}

export function CancelEditMode(action: () => void) {
    ShortCut.register("Escape", action);
    ShortCut.register("Esc", action);
}
