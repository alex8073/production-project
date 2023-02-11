import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../lib/ThemeContext";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => {
    return { theme, setTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
