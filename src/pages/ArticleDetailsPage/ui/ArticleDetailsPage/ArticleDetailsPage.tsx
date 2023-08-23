import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { DynamicModuleLoader, IReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "widgets/Page/ui/Page";
import { VStack } from "shared/ui/Stack";
import { ArticleRecommendationsList } from "features/ArticleRecommendationsList";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { articleDetailsPageReducer } from "../../model/slice";
import cls from "./ArticleDetailsPage.module.scss";

interface IArticleDetailsPageProps {
    className?: string;
}

const reducers: IReducersList = {
    articleDetailsPage: articleDetailsPageReducer,

};

const ArticleDetailsPage = (props: IArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation("article-details");
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t("Article not found")}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack max gap="16">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
