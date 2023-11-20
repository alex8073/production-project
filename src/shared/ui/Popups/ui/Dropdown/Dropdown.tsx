import { Menu } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { IDropdownDirection } from "@/shared/types/ui";
import { AppLink } from "../../../AppLink/AppLink";
import cls from "./Dropdown.module.scss";
import popupCls from "../../styles/popup.module.scss";

export interface IDropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface IDropdownProps {
    className?: string;
    trigger: ReactNode;
    items: IDropdownItem[];
    direction?: IDropdownDirection;

}

export function Dropdown(props: IDropdownProps) {
    const {
        className,
        trigger,
        items,
        direction = "bottomRight",
    } = props;

    return (
        <Menu as="div" className={classNames(popupCls.popup, {}, [className])}>
            <Menu.Button className={cls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [popupCls[direction]])}>
                {items.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            className={classNames(cls.item, { [popupCls.active]: active }, [className])}
                            onClick={item.onClick}
                            disabled={item.disabled}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={`dropdown-key-${index}`}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled} key={`dropdown-key-${index}`}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
