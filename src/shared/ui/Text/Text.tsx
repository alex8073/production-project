import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    INVERTED = "inverted",
    ERROR = "error",
}

export enum TextAlign {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
}

export enum TextSize {
    S = "size_s",
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

type IHeaderTag = "h1" | "h2" | "h3";

const mapSizeToHeaderTag: Record<TextSize, IHeaderTag> = {
    [TextSize.S]: "h3",
    [TextSize.M]: "h2",
    [TextSize.L]: "h1",
};

export const Text = memo((props: ITextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const HeaderType = mapSizeToHeaderTag[size];

    const additionalClasses: Array<string | undefined> = [
        cls[theme],
        cls[align],
        cls[size],
        className,
    ];

    return (
        <div className={classNames(cls.Text, {}, additionalClasses)}>
            {title && <HeaderType className={classNames(cls.title)}>{title}</HeaderType>}
            {text && <p className={classNames(cls.text)}>{text}</p>}
        </div>
    );
});
