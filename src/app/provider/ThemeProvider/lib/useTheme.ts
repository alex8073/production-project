import { useContext } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from "app/provider/ThemeProvider/lib/ThemeContext";
import { Theme } from "../ui/ThemeProvider";

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
