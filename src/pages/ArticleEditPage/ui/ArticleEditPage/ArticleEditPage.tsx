import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Page } from "widgets/Page";
import { useParams } from "react-router-dom";
import cls from "./ArticleEditPage.module.scss";

interface IArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: IArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation("article-details");
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t("Edit article with ID = ") + id
                : t("Create new article")}
        </Page>
    );
});

export default ArticleEditPage;
