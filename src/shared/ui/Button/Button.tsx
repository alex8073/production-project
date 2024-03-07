import { ButtonHTMLAttributes, memo } from "react";
import { classNames, IMods } from "@/shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    OUTLINE_RED = "outlineRed",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}
export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    theme?: ButtonTheme;
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean;
    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: ButtonSize;
    /**
     * Увеличивает кнопку на всю свободную ширину
     */
    fullWidth?: boolean;
}

export const Button = memo((props:IButtonProps) => {
    const {
        className = "",
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled,
        fullWidth,
        ...rest
    } = props;

    const mods: IMods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
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
