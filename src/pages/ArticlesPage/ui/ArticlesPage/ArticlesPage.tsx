import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { ArticleList } from "entities/Article";
import { DynamicModuleLoader, IReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { Page } from "widgets/Page/ui/Page";
import { ArticlesPageFilters } from "pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from "react-router-dom";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { articlePageReducer, getArticles } from "../../model/slice/articlePageSlice";
import cls from "./ArticlesPage.module.scss";
import { getArticlePageIsLoading, getArticlePageView } from "../../model/selectors/articlePageSelectors";

interface IArticlesPageProps {
    className?: string;
}

const reducers: IReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = (props: IArticlesPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
