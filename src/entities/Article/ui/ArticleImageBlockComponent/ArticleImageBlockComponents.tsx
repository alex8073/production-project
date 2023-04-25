import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ArticleImageBlockComponents.module.scss";

interface IArticleImageBlockComponentsProps {
    className?: string;
}

export const ArticleImageBlockComponents = (props: IArticleImageBlockComponentsProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleImageBlockComponents, {}, [className])}>
            ArticleImageBlockComponents
        </div>
    );
};
