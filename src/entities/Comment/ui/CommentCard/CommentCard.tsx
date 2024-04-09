import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Text } from "@/shared/ui/Text";
import { Skeleton } from "@/shared/ui/Skeleton";
import { AppLink } from "@/shared/ui/AppLink";
import { VStack } from "@/shared/ui/Stack";
import { IComment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";
import { getRouteProfile } from "@/shared/const/router";

interface ICommentCardProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: ICommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack max gap="8" className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} />
                </div>
                <Skeleton width="100%" height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack max gap="8" className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={getRouteProfile(comment?.user.id)} className={cls.header}>
                {comment?.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text title={comment?.user.username} />
            </AppLink>
            <Text text={comment?.text} />
        </VStack>
    );
});
