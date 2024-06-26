import { useTranslation } from "react-i18next";
import { CSSProperties, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Skeleton.module.scss";

interface ISkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: ISkeletonProps) => {
    const { className, height, width, border } = props;
    const { t } = useTranslation();

    const styles: CSSProperties = {
        height,
        width,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});
