import { classNames } from "shared/lib/classNames/classNames";
import {
    HTMLAttributeAnchorTarget, memo, useCallback, useEffect, useMemo, useRef, useState,
} from "react";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from "react-virtuoso";
import { ARTICLE_LIST_ITEM_ID } from "shared/const/localStorage";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { ArticleListView, IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import cls from "./ArticleList.module.scss";

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: ArticleListView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
    onLoadNextPart?: () => void;
}

const getSkeletons = () => new Array(3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton key={index} view={ArticleListView.LIST} className={cls.card} />);

export const ArticleList = memo((props: IArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleListView.TILE,
        isLoading,
        target,
        virtualized = true,
        onLoadNextPart,
    } = props;
    const { t } = useTranslation("articles");

    const renderArticle = useCallback((index: number, article: IArticle) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
            index={index}
        />
    ), [target, view]);

    const [selectedArticleId, setSelectedArticleId] = useState(0);
    const virtuosoFridRef = useRef<VirtuosoGridHandle>(null);

    useEffect(() => {
        const currentArticleID = sessionStorage.getItem(ARTICLE_LIST_ITEM_ID) || 0;
        setSelectedArticleId(+currentArticleID);
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (view === ArticleListView.TILE) {
            timeoutId = setTimeout(() => {
                if (virtuosoFridRef.current) {
                    virtuosoFridRef.current.scrollToIndex(selectedArticleId);
                }
            }, 100);
        }

        return () => clearTimeout(timeoutId);
    }, [selectedArticleId, view]);

    const virtualizedList = useMemo(() => {
        // eslint-disable-next-line react/no-unstable-nested-components
        const Footer = () => {
            if (isLoading) {
                return (
                    <div className={cls.skeleton}>
                        {getSkeletons()}
                    </div>
                );
            }
            return null;
        };
        // eslint-disable-next-line react/no-unstable-nested-components
        const ItemContainerComp = ({ index }: { index: number }) => (
            <div className={cls.ItemContainer}>
                <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
            </div>
        );

        if (view === ArticleListView.LIST) {
            return (
                <Virtuoso
                    style={{ height: "100%", width: "100%" }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    initialTopMostItemIndex={selectedArticleId}
                    components={{
                        Footer,
                    }}
                />
            );
        }

        return (
            <VirtuosoGrid
                style={{ height: "100%", width: "100%" }}
                ref={virtuosoFridRef}
                data={articles}
                itemContent={renderArticle}
                totalCount={articles.length}
                endReached={onLoadNextPart}
                components={{
                    ScrollSeekPlaceholder: ItemContainerComp,
                }}
                listClassName={cls.itemsWrapper}
                scrollSeekConfiguration={{
                    enter: (velocity) => Math.abs(velocity) > 200,
                    exit: (velocity) => Math.abs(velocity) < 30,

                }}
            />
        );
    }, [articles, isLoading, onLoadNextPart, renderArticle, selectedArticleId, view]);

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t("Articles not found")} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                virtualized
                    ? virtualizedList
                    : articles.map((item, index) => (
                        <ArticleListItem
                            article={item}
                            view={view}
                            target={target}
                            key={item.id}
                            className={cls.card}
                            index={index}
                        />
                    ))
            }
        </div>
    );
});
