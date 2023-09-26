import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { LoginModal } from "features/AuthByUsername";
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from "entities/User";
import { useDispatch, useSelector } from "react-redux";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Avatar } from "shared/ui/Avatar/Avatar";
import cls from "./Navbar.module.scss";

interface INavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: INavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => setIsAuthModal(false), []);
    const onOpenModal = useCallback(() => setIsAuthModal(true), []);
    const onLogOut = useCallback(() => {
        dispatch(userActions.logOut());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t("Ulbi TV App")}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t("Create article")}
                </AppLink>
                <Dropdown
                    direction="bottomLeft"
                    className={cls.dropdown}
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
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onOpenModal}
            >
                {t("Log in")}
            </Button>

            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
