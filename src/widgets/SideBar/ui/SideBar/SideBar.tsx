/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { memo, useMemo, useState } from "react";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { SideBarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./SideBar.module.scss";

interface ISideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }: ISideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const sidebarItems = useMemo(() => (
        SideBarItemsList.map((item) => (
            <SidebarItem
                item={item}
                collapsed={collapsed}
                key={item.path}
            />
        ))
    ), [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.items}>
                {sidebarItems}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher className="changePosition" />
                <LangSwitcher short={collapsed} />
            </div>

            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggle}
                className={cls.collapseBtn}
                square
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>
        </div>
    );
});
