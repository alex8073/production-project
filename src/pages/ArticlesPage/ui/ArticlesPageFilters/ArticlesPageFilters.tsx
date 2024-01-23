import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
    ArticleListView, ArticleListViewSelector, ArticleSortField, ArticleSortSelector, ArticleType, ArticleTypeTabs,
} from "@/entities/Article";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Card } from "@/shared/ui/Card";
import { Input } from "@/shared/ui/Input";
import { ISortOrder } from "@/shared/types";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { HStack, VStack } from "@/shared/ui/Stack";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort, getArticlePageType,
    getArticlePageView,
} from "../../model/selectors/articlePageSelectors";
import { articlePageActions } from "../../model/slice/articlePageSlice";

interface IArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: IArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation("articles");
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlePageView);
    const sort = useSelector(getArticlePageSort);
    const order = useSelector(getArticlePageOrder);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleListView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlePageActions.setSort(sort));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((order: ISortOrder) => {
        dispatch(articlePageActions.setOrder(order));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlePageActions.setSearch(search));
        dispatch(articlePageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlePageActions.setType(value));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <VStack gap="16" max className={classNames("", {}, [className])}>
            <HStack max justify="between">
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticleListViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </HStack>

            <Card>
                <Input
                    placeholder={t("Search")}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>

            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
            />
        </VStack>
    );
});
