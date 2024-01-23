import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card, CardTheme } from "@/shared/ui/Card";
import { Text } from "@/shared/ui/Text";
import { INotification } from "../../model/types/notifications";
import cls from "./NotificationItem.module.scss";

interface INotificationItemProps {
    className?: string;
    item: INotification;
}

export const NotificationItem = memo((props: INotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a target="_blank" href={item.href} rel="noreferrer" className={cls.link}>
                {content}
            </a>
        );
    }

    return content;
});
