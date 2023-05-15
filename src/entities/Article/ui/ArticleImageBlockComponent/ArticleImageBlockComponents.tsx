import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Text, TextAlign } from "shared/ui/Text/Text";
import cls from "./ArticleImageBlockComponents.module.scss";
import { IArticleBlockImage } from "../../model/types/article";

interface IArticleImageBlockComponentsProps {
    className?: string;
    block: IArticleBlockImage;
}

export const ArticleImageBlockComponents = memo((props: IArticleImageBlockComponentsProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleImageBlockComponents, {}, [className])}>
            <img src={block.src} className={cls.img} alt={block.title} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />)}
        </div>
    );
});