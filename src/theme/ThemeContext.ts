import {createContext} from "react";
import {Theme} from "./ThemeProvider";

interface IThemeContext {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext>({})

export const LOCAL_STORAGE_THEME_KEY = "theme;"


