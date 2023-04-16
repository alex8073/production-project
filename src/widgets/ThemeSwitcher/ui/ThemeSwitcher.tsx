import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import ThemeSwitcherIcon from "shared/assets/icons/theme-switcher.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { memo } from "react";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: IThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames("", {}, [className])}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <ThemeSwitcherIcon color="var(--inverted-primary-color)" />
        </Button>
    );
});
