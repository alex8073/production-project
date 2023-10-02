import {
    useCallback, useEffect, useRef, useState,
} from "react";

interface IUseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    lazy?: boolean;
    animationDelay: number;

}

export function useModal(props: IUseModalProps) {
    const {
        onClose,
        lazy,
        isOpen,
        animationDelay,
    } = props;
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            close();
        }
    }, [close]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        isClosing,
        isMounted,
        close,
    };
}
