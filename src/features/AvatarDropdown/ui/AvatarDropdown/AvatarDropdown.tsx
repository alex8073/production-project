import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Dropdown } from "@/shared/ui/Popups";
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from "@/entities/User";
import cls from "./AvatarDropdown.module.scss";
import { getRouteAdmin, getRouteProfile } from "@/shared/const/router";

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
            trigger={<Avatar size={30} src={authData.avatar} />}
            items={[
                ...(isAdminPanelAvailable
                    ? [{ content: t("Admin panel"), href: getRouteAdmin() }]
                    : []),
                {
                    content: t("User profile"),
                    href: getRouteProfile(authData.id),
                },
                { content: t("Log out"), onClick: onLogOut },
            ]}
            className={classNames(cls.AvatarDropdown, {}, [className])}
        />
    );
});
