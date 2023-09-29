import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { Popover } from "shared/ui/Popups";
import { NotificationList } from "entities/Notification";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import NotificationsIcon from "shared/assets/icons/notifications.svg";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { BrowserView, MobileView } from "react-device-detect";
import cls from "./NotificationButton.module.scss";

interface INotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: INotificationButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const onOpen = useCallback(() => setIsOpen(true), []);
    const onClose = useCallback(() => setIsOpen(false), []);

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpen}>
            <NotificationsIcon className={cls.notificationsTrigger} />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    trigger={trigger}
                    direction="bottomLeft"
                    className={classNames(cls.NotificationButton, {}, [className])}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>

            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onClose}>
                    <NotificationList className={cls.notifications} />
                </Drawer>
            </MobileView>
        </div>
    );
});
