import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import "./Loader.scss";

interface ILoaderProps {
  className?: string;
}

export const Loader = memo(({ className }: ILoaderProps) => (
    <div className={classNames("lds-spinner", {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
));
