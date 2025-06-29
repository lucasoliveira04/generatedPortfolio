import { EditModeContext } from "@/context/editComponentContext";
import { useContext } from "react";

export function useEditMode() {
    const context = useContext(EditModeContext)
    if (!context) {
        throw new Error("useEditMode must be used within an EditModeProvider");
    }
    return context;
}