import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { DynamicModuleLoader, IReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "widgets/Page/ui/Page";
import { useSearchParams } from "react-router-dom";
import { VStack } from "shared/ui/Stack";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { articlePageReducer } from "../../model/slice/articlePageSlice";

interface IArticlesPageProps {
    className?: string;
}

const reducers: IReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = (props: IArticlesPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames("", {}, [className])}
            >
                <VStack gap="16" max>
                    <ArticlesPageFilters />
                    <ArticleInfiniteList />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
