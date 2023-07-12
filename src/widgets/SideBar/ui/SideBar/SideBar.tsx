/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { memo, useMemo, useState } from "react";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useSelector } from "react-redux";
import { HStack, VStack } from "shared/ui/Stack";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./SideBar.module.scss";

interface ISideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }: ISideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const sidebarItems = useMemo(() => (
        sidebarItemsList.map((item) => (
            <SidebarItem
                item={item}
                collapsed={collapsed}
                key={item.path}
            />
        ))
    ), [collapsed, sidebarItemsList]);

    return (
        <menu
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <VStack className={cls.items} gap="16">
                {sidebarItems}
            </VStack>

            <HStack gap="16" justify="center" align="center" className={cls.switchers}>
                <ThemeSwitcher className="changePosition" />
                <LangSwitcher short={collapsed} />
            </HStack>

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
        </menu>
    );
});
