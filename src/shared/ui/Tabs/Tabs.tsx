import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, ReactNode, useCallback } from "react";
import { Card, CardTheme } from "shared/ui/Card/Card";
import cls from "./Tabs.module.scss";

export interface ITabItem {
    value: string;
    content: ReactNode;
}

interface ITabsProps {
    className?: string;
    tabs: ITabItem[];
    value: string;
    onTabClick: (tab: ITabItem)=>void;
}

export const Tabs = memo((props: ITabsProps) => {
    const {
        className, tabs, value, onTabClick,
    } = props;
    const { t } = useTranslation();

    const clickHandler = useCallback((tab: ITabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {
                tabs.map((tab) => (
                    <Card
                        theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                        className={cls.tab}
                        onClick={clickHandler(tab)}
                        key={tab.value}
                    >
                        {tab.content}
                    </Card>
                ))
            }
        </div>
    );
});
