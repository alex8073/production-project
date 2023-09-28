import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Popover } from "shared/ui/Popups";
import { NotificationList } from "entities/Notification";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import NotificationsIcon from "shared/assets/icons/notifications.svg";
import cls from "./NotificationButton.module.scss";

interface INotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: INotificationButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Popover
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <NotificationsIcon className={cls.notificationsTrigger} />
                </Button>
            )}
            direction="bottomLeft"
            className={classNames(cls.NotificationButton, {}, [className])}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
