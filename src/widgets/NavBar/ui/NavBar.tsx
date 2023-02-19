import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface INavBarProps {
  className?: string;
}

export const NavBar: FC<INavBarProps> = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NavBar, {}, [])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    {t('Main page')}
                </AppLink>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink theme={AppLinkTheme.RED} to="/about">
                    {t('About us')}
                </AppLink>
            </div>
        </div>
    );
};
