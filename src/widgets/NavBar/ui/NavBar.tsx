import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import cls from './NavBar.module.scss';

interface INavBarProps {
  className?: string;
}

export const NavBar: FC<INavBarProps> = ({ className }) => {
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
            <div className={classNames(cls.NavBar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogOut}
                >
                    {t('Log out')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onOpenModal}
            >
                {t('Log in')}
            </Button>

            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
};
