import type { EditModeContextType } from "@/types/editModeContextType";
import { CancelEditMode, EnableEditMode, SaveEditionMode } from "@/utils/shortcuts/Shortcuts";
import { createContext, useEffect, useState, type ReactNode } from "react";

export const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => setIsEditing((prev) => !prev);
  const setEditing = (value: boolean) => setIsEditing(value);

  return (
    <EditModeContext.Provider value={{ isEditing, toggleEditing, setEditing }}>
      <div data-edit-mode-context>{children}</div>
    </EditModeContext.Provider>
  );
}