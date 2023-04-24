import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ArticleCodeBlockComponent.module.scss";

interface IArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = (props: IArticleCodeBlockComponentProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            ArticleCodeBlockComponent
        </div>
    );
};
