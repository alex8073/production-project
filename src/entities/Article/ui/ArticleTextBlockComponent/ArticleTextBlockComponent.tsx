import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ArticleTextBlockComponent.module.scss";

interface IArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent = (props: IArticleTextBlockComponentProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            ArticleTextBlockComponent
        </div>
    );
};
