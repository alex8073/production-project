import { Popover as HPopover } from "@headlessui/react";
import { ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { IDropdownDirection } from "@/shared/types/ui";
import popupCls from "../../styles/popup.module.scss";
import cls from "./Popover.module.scss";

interface IPopoverProps {
    className?: string;
    direction?: IDropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export function Popover(props: IPopoverProps) {
    const { className, direction = "bottomRight", trigger, children } = props;

    return (
        <HPopover className={classNames(popupCls.popup, {}, [className])}>
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.panel, {}, [popupCls[direction]])}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
