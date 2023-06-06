import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleListItemSkeleton } from "entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";
import { ArticleListView, IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import cls from "./ArticleList.module.scss";

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view: ArticleListView;
}

const getSkeletons = (view: ArticleListView) => new Array(view === ArticleListView.TILE ? 9 : 3)
    .fill(0)
    .map((item, i) => <ArticleListItemSkeleton key={i} view={view} />);

export const ArticleList = memo((props: IArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleListView.TILE,
        isLoading,
    } = props;

    const renderArticles = (article: IArticle) => (
        <ArticleListItem key={article.id} article={article} view={view} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticles)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
