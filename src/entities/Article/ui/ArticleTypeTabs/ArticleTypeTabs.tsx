import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ITabItem, Tabs } from "@/shared/ui/Tabs";
import { ArticleType } from "../../model/const/consts";

interface IArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: IArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation("articles");

    const typeTabs = useMemo<ITabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t("All"),
        },
        {
            value: ArticleType.IT,
            content: t("IT"),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t("Economics"),
        },
        {
            value: ArticleType.SCIENCE,
            content: t("Science"),
        },
    ], [t]);

    const onTabClick = useCallback((tab: ITabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames("", {}, [className])}
        />
    );
});
