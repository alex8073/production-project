import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className, children, theme, ...rest
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [cls[theme], className])}
            {...rest}
        >
            {children}
        </button>
    );
};
