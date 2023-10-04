import { ReactNode } from "react";
import { classNames, IMods } from "@/shared/lib/classNames/classNames";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";
import cls from "./Modal.module.scss";

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: IModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const { close, isClosing, isMounted } = useModal({ animationDelay: ANIMATION_DELAY, onClose, isOpen });

    const mods: IMods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />

                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
