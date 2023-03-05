import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';
import cls from './NavBar.module.scss';

interface INavBarProps {
  className?: string;
}

export const NavBar: FC<INavBarProps> = () => (
    <div className={classNames(cls.NavBar, {}, [])} />
);
