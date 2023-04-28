import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Code } from "shared/ui/Code/Code";
import { IArticleBlockCode } from "../../model/types/article";
import cls from "./ArticleCodeBlockComponent.module.scss";

interface IArticleCodeBlockComponentProps {
    className?: string;
    block: IArticleBlockCode;
}

export const ArticleCodeBlockComponent = memo((props: IArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
