export type EditModeContextType = {
    isEditing: boolean;
    toggleEditing: () => void;
    setEditing: (value: boolean) => void;
};