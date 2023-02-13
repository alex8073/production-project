import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import React from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface INavBarProps {
  className?: string;
}

export const NavBar = (props: INavBarProps) => {
  return (
    <div className={classNames(cls.NavBar, {}, [])}>
      <ThemeSwitcher className={"changePosition"} />
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
          MainPage
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={"/about"}>
          AboutPage
        </AppLink>
      </div>
    </div>
  );
};
