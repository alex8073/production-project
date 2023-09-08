import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, IReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import EyeIcon from "shared/assets/icons/eye.svg";
import CalendarIcon from "shared/assets/icons/calendar.svg";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { HStack, VStack } from "shared/ui/Stack";
import { ArticleBlockType } from "../../model/const/consts";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponents } from "../ArticleImageBlockComponent/ArticleImageBlockComponents";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from "../../model/selectors/articleDetails";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import cls from "./ArticleDetails.module.scss";
import { IArticleBlock } from "../../model/types/article";

interface IArticleDetailsProps {
    className?: string;
    id: string;
}

const initialReducers: IReducersList = { articleDetails: articleDetailsReducer };

export const ArticleDetails = memo((props: IArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: IArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} block={block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponents key={block.id} block={block} />;
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} block={block} />;
        default: return null;
        }
    }, []);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchArticleById(id));
        }
    });

    let content;

    if (isLoading) {
        content = (
            <>
                <HStack max justify="center">
                    <Skeleton width={200} height={200} border="50%" />
                </HStack>
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = <Text title={t("Article loading error")} align={TextAlign.CENTER} />;
    } else {
        content = (
            <>
                <HStack max justify="center">
                    <Avatar
                        size={200}
                        src={article?.img}
                    />
                </HStack>
                <VStack gap="4" max>
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap="8">
                        <EyeIcon />
                        <Text text={`${article?.views}`} />
                    </HStack>
                    <HStack gap="8">
                        <CalendarIcon />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                <VStack max gap="16">
                    {article?.blocks.map(renderBlock)}
                </VStack>
            </>

        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <VStack max gap="16" className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>

    );
});
