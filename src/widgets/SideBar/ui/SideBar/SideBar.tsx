import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import React, { useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface ISideBarProps {
  className?: string;
}

export const SideBar = ({ className }: ISideBarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.switchers}>
        <Button theme={ThemeButton.CLEAR} onClick={onToggle}>
          Collapse
        </Button>
        <ThemeSwitcher className={"changePosition"} />
        <LangSwitcher />
      </div>
    </div>
  );
};
