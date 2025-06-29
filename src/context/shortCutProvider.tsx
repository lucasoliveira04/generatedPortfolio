import { useEditMode } from "@/hook/useEdit";
import { CancelEditMode, EnableEditMode, SaveEditionMode } from "@/utils/shortcuts/Shortcuts";
import { useEffect } from "react";

export function ShortCutProvider() {
    const { isEditing, toggleEditing, setEditing } = useEditMode();

    useEffect(() => {
        SaveEditionMode(() => {
            setEditing(false);
        });

        EnableEditMode(() => {
            toggleEditing();
        });

        CancelEditMode(() => {
            setEditing(false);
        });
    }, [isEditing, toggleEditing, setEditing]);

    return null;
}