import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { VStack } from "shared/ui/Stack";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { useNotifications } from "../../api/notificationApi";
import cls from "./NotificationList.module.scss";

interface INotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: INotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotifications(null, { pollingInterval: 5000 });

    if (isLoading) {
        return (
            <VStack
                gap="16"
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width="100%" height="80px" border="8px" />
                <Skeleton width="100%" height="80px" border="8px" />
                <Skeleton width="100%" height="80px" border="8px" />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => <NotificationItem item={item} />)}
        </VStack>
    );
});
