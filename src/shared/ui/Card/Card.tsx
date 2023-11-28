import { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Card.module.scss";

export enum CardTheme {
    NORMAL = "normal",
    OUTLINED = "outlined",
}

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = memo((props: ICardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        max,
        ...rest
    } = props;

    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme]])}
            {...rest}
        >
            {children}
        </div>
    );
});
