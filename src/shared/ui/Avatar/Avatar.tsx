import { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface IAvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props: IAvatarProps) => {
    const {
        className,
        src,
        alt = '',
        size = 100,
    } = props;

    const styles: CSSProperties = useMemo(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
            style={styles}
        />
    );
};
