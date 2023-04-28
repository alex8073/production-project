import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

export enum TextAlign {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
}

export enum TextSize {
    M = "size_m",
    L = "size_l",
}

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: ITextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const additionalClasses: Array<string | undefined> = [
        cls[theme],
        cls[align],
        cls[size],
        className,
    ];

    return (
        <div className={classNames(cls.Text, {}, additionalClasses)}>
            {title && <p className={classNames(cls.title)}>{title}</p>}
            {text && <p className={classNames(cls.text)}>{text}</p>}
        </div>
    );
});
