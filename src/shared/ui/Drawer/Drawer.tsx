import { classNames, IMods } from "shared/lib/classNames/classNames";
import { memo, ReactNode } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { Overlay } from "../Overlay/Overlay";
import cls from "./Drawer.module.scss";
import { Portal } from "../Portal/Portal";

interface IDrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: IDrawerProps) => {
    const {
        className, children, onClose, isOpen,
    } = props;
    const { theme } = useTheme();

    const mods: IMods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className])}>
                <Overlay onClick={onClose} />

                <div className={cls.content}>
                    {children}
                </div>

            </div>

        </Portal>
    );
});
