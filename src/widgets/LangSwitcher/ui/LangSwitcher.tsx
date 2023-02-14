import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import React, { FC } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = () => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLang}
      className={classNames(cls.LangSwitcher, {}, [])}
    >
      {t("Language")}
    </Button>
  );
};
