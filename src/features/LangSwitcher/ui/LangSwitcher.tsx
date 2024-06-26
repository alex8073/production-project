import { useTranslation } from "react-i18next";
import React, { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";

interface ILangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={toggleLang}
            className={classNames("", {}, [className])}
        >
            {t(short ? "Short language" : "Language")}
        </Button>
    );
});
