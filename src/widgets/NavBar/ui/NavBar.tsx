import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entities/User";
import { useDispatch, useSelector } from "react-redux";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import cls from "./NavBar.module.scss";

interface INavBarProps {
  className?: string;
}

export const NavBar = memo(({ className }: INavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => setIsAuthModal(false), []);
    const onOpenModal = useCallback(() => setIsAuthModal(true), []);
    const onLogOut = useCallback(() => {
        dispatch(userActions.logOut());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.NavBar, {}, [className])}>
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
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogOut}
                >
                    {t("Log out")}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.NavBar, {}, [className])}>
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
