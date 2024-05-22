import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../../const/theme";
import { LOCAL_STORAGE_THEME_KEY } from "../../../const/localStorage";

interface useThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    document.body.className = theme || Theme.LIGHT;
    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            case Theme.DARK:
                newTheme = Theme.BLUE;
                break;
            case Theme.BLUE:
                newTheme = Theme.LIGHT;
                break;
            default:
                return;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme: theme || Theme.LIGHT, toggleTheme };
}
