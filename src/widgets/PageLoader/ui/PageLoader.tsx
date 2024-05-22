import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Loader } from "@/shared/ui/Loader";
import cls from "./PageLoader.module.scss";

interface IPageLoaderProps {
    className?: string;
}

export const PageLoader = memo(({ className }: IPageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
));
