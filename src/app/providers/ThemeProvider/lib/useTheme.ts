import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "app/providers/ThemeProvider/lib/ThemeContext";

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    document.body.className = theme || Theme.LIGHT;
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme: theme || Theme.LIGHT, toggleTheme };
}
