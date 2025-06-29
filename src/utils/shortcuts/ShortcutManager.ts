type ShortcurCallback = () => void;

class ShortcutManager {
    private shortcuts: Map<string, ShortcurCallback> = new Map();

    constructor() {
        this.handleKeyDown = this.handleKeyDown.bind(this);
        document.addEventListener("keydown", this.handleKeyDown);
    }

    private handleKeyDown(event: KeyboardEvent) {
        const key = event.key.toLowerCase();
        const callback = this.shortcuts.get(key);

        if (callback) {
            event.preventDefault();
            callback();
        }

    }

    register(key: string, action: ShortcurCallback){
        this.shortcuts.set(key.toLowerCase(), action);
    }

    unregister(key: string){
        this.shortcuts.delete(key.toLowerCase());
    }

    clean(){
        this.shortcuts.clear();
    }
}

export const ShortCut = new ShortcutManager();