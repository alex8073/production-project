import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LangSwitcher } from "@/features/LangSwitcher";
import { HStack, VStack } from "@/shared/ui/Stack";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppLogo } from "@/shared/ui/AppLogo";

interface ISidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const sidebarItems = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo className={cls.appLogo} />
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.Sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <VStack role="navigation" className={cls.items} gap="16">
                        {sidebarItems}
                    </VStack>

                    <HStack
                        gap="16"
                        justify="center"
                        align="center"
                        className={cls.switchers}
                    >
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
                </aside>
            }
        />
    );
});
