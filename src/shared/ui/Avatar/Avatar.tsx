import { CSSProperties, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { AppImage } from "../AppImage";
import UserIcon from "../../assets/icons/user-filled.svg";
import { Skeleton } from "../Skeleton";

interface IAvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props: IAvatarProps) => {
    const { className, src, alt = "", size = 100 } = props;

    const styles: CSSProperties = useMemo(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <UserIcon />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
            style={styles}
        />
    );
};
