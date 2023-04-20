import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import cls from "./ArticleDetailsPage.module.scss";

interface IArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: IArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation("article-details");

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            ArticleDetailsPage
        </div>
    );
};

export default memo(ArticleDetailsPage);
