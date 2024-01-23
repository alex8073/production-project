import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text";
import { VStack } from "@/shared/ui/Stack";
import { CommentCard } from "../CommentCard/CommentCard";
import { IComment } from "../../model/types/comment";

interface ICommentListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: ICommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames("", {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames("", {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />
                    ))
                    : <Text text={t("There are no comments")} />
            }
        </VStack>
    );
});
