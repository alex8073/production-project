/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './SideBar.module.scss';

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
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.switchers}>
                <Button
                    data-testid="sidebar-toggle"
                    theme={ThemeButton.CLEAR}
                    onClick={onToggle}
                >
                    Collapse
                </Button>
                <ThemeSwitcher className="changePosition" />
                <LangSwitcher />
            </div>
        </div>
    );
};
