import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { CommentCard } from "entities/Comment/ui/CommentCard/CommentCard";
import { Text } from "shared/ui/Text/Text";
import cls from "./CommentList.module.scss";
import { IComment } from "../../model/types/comment";

interface ICommentListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: ICommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />
                    ))
                    : <Text text={t("There are no comments")} />
            }
        </div>
    );
});