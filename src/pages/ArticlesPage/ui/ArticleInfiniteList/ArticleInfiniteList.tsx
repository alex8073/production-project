import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";
import { ArticleList } from "entities/Article";
import { Text } from "shared/ui/Text/Text";
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from "../../model/selectors/articlePageSelectors";
import { getArticles } from "../../model/slice/articlePageSlice";

interface IArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: IArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation("articles");

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);
    const error = useSelector(getArticlePageError);

    if (error) {
        return <Text text={t("Article list loading error")} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
