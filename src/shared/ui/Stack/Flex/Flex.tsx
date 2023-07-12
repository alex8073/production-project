import { classNames, IMods } from "shared/lib/classNames/classNames";
import { memo, ReactNode } from "react";
import cls from "./Flex.module.scss";

export type IFlexJustify = "start" | "center" | "end" | "between";
export type IFlexAlign = "start" | "center" | "end";
export type IFlexDirection = "row" | "column";
export type IFlexGap = "4" | "8" | "16" | "32";

const justifyClasses: Record<IFlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyStart,
    between: cls.justifyBetween,
};

const alignClasses: Record<IFlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<IFlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<IFlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

export interface IFlexProps {
    className?: string;
    children: ReactNode;
    justify?: IFlexJustify;
    align?: IFlexAlign;
    direction?: IFlexDirection;
    gap?: IFlexGap;
    max?: boolean;
}

export const Flex = memo((props: IFlexProps) => {
    const {
        className,
        children,
        justify = "start",
        align = "center",
        direction = "row",
        gap,
        max,
    } = props;

    const classes = [
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
        className,
    ];

    const mods: IMods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.Flex, mods, classes)}>
            {children}
        </div>
    );
});
