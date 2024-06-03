import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../../const/theme";

interface useThemeResult {
    theme: Theme;
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    document.body.className = theme || Theme.LIGHT;
    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
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

        saveAction?.(newTheme);
    };

    return { theme: theme || Theme.LIGHT, toggleTheme };
}
