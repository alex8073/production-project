import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Dropdown } from "shared/ui/Popups";
import { useDispatch, useSelector } from "react-redux";
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from "entities/User";
import cls from "./AvatarDropdown.module.scss";

interface IAvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: IAvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logOut());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction="bottomLeft"
            trigger={(
                <Avatar
                    size={30}
                    src={authData.avatar}
                />
            )}
            items={[
                ...(isAdminPanelAvailable ? [{ content: t("Admin panel"), href: RoutePath.admin_panel }] : []),
                { content: t("User profile"), href: RoutePath.profile + authData.id },
                { content: t("Log out"), onClick: onLogOut },
            ]}
            className={classNames(cls.AvatarDropdown, {}, [className])}
        />
    );
});
