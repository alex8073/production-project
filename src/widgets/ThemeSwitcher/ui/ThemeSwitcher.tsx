import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { memo } from "react";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: IThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames("", {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
        </Button>
    );
});
