import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import { Card } from "@/shared/ui/Card";
import { Avatar } from "@/shared/ui/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { AppLink } from "@/shared/ui/AppLink";
import { ARTICLE_LIST_ITEM_ID } from "@/shared/const/localStorage";
import { ArticleListView, ArticleBlockType } from "../../model/const/consts";
import {
    IArticle, IArticleBlockText,
} from "../../model/types/article";
import cls from "./ArticleListItem.module.scss";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { getRouteArticleDetails } from "@/shared/const/router";

interface IArticleListItemProps {
    className?: string;
    article: IArticle;
    view: ArticleListView;
    target?: HTMLAttributeAnchorTarget;
    index: number;
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
    const {
        className, article, view, target, index,
    } = props;
    const { t } = useTranslation("articles");

    const types = <Text text={article.type.join(", ")} className={cls.types} />;
    const views = (
        <>
            <Text text={`${article.views}`} className={cls.views} />
            <EyeIcon />
        </>
    );

    const handleButtonClick = () => {
        sessionStorage.setItem(ARTICLE_LIST_ITEM_ID, JSON.stringify(index));
    };

    if (view === ArticleListView.LIST) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as IArticleBlockText;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user?.avatar} />
                        <Text text={article.user?.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>

                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}

                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button theme={ButtonTheme.OUTLINE} onClick={handleButtonClick}>
                                {t("Read more...")}
                            </Button>
                        </AppLink>

                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            onClick={handleButtonClick}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt="" />
                    <Text text={article.createdAt} className={cls.date} />
                </div>

                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>

                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
