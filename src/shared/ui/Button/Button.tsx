import { classNames, IMods } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button = memo((props:IButtonProps) => {
    const {
        className = '',
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled,
        ...rest
    } = props;

    const mods: IMods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };
    const additionalClasses: string[] = [cls[theme], cls[size], className];

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, additionalClasses)}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
});
