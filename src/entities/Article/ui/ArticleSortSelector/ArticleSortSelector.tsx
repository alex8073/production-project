import { useTranslation } from "react-i18next";
import { memo, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ISelectOption, Select } from "@/shared/ui/Select";
import { ISortOrder } from "@/shared/types";
import { ArticleSortField } from "../../model/const/consts";
import cls from "./ArticleSortSelector.module.scss";

interface IArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: ISortOrder;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeOrder: (newOrder: ISortOrder) => void;
}

export const ArticleSortSelector = memo((props: IArticleSortSelectorProps) => {
    const {
        className, order, sort, onChangeOrder, onChangeSort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<ISelectOption<ISortOrder>[]>(() => [{
        value: "asc",
        content: t("ascending"),
    }, {
        value: "desc",
        content: t("descending"),
    }], [t]);

    const sortFieldOptions = useMemo<ISelectOption<ArticleSortField>[]>(() => [{
        value: ArticleSortField.CREATED,
        content: t("creation date"),
    }, {
        value: ArticleSortField.TITLE,
        content: t("title"),
    }, {
        value: ArticleSortField.VIEWS,
        content: t("views"),
    }], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                label={t("Sort by")}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t("by")}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
