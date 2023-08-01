import { Menu } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { Fragment, ReactNode } from "react";
import { IDropdownDirection } from "shared/types/ui";
import { AppLink } from "../AppLink/AppLink";
import cls from "./Dropdown.module.scss";

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
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [cls[direction]])}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            className={classNames(cls.item, { [cls.active]: active }, [className])}
                            onClick={item.onClick}
                            disabled={item.disabled}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
