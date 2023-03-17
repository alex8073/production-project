import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './NavBar.module.scss';

interface INavBarProps {
  className?: string;
}

export const NavBar: FC<INavBarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onCloseModal = useCallback(() => setIsAuthModal(false), []);
    const onOpenModal = useCallback(() => setIsAuthModal(true), []);

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onOpenModal}
            >
                {t('Log in')}
            </Button>

            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};
