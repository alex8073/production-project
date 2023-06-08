import {
    memo, MutableRefObject, ReactNode, useRef,
} from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStateSchema } from "app/providers/StoreProvider";
import { getScrollPositionByPath, scrollSaverActions } from "features/ScrollSaver";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Page.module.scss";

interface IPageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: IPageProps) => {
    const { className, children, onScrollEnd } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: IStateSchema) => getScrollPositionByPath(state, pathname));

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((event: any) => {
        dispatch(scrollSaverActions.setScrollPosition({
            position: event?.currentTarget?.scrollTop,
            path: pathname,
        }));
    }, 200);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
