import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import ThemeSwitcherIcon from "@/shared/assets/icons/theme-switcher.svg";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { saveJsonSettings } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: IThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onToggleHandler}
            className={classNames("", {}, [className])}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <ThemeSwitcherIcon color="var(--inverted-primary-color)" />
        </Button>
    );
});
