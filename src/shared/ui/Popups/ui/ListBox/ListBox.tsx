import { Fragment, ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { IDropdownDirection } from "@/shared/types/ui";
import { Button } from "../../../Button/Button";
import { HStack } from "../../../Stack";
import cls from "./ListBox.module.scss";
import popupCls from "../../styles/popup.module.scss";

export interface IListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

export interface IListBoxProps<T extends string> {
    items?: IListBoxItem<T>[];
    value?: T;
    defaultValue?: T;
    onChange: (value: T) => void;
    className?: string;
    readOnly?: boolean;
    direction?: IDropdownDirection;
    label?: string;
}

export function ListBox<T extends string>(props: IListBoxProps<T>) {
    const {
        items,
        value,
        defaultValue,
        onChange,
        className,
        readOnly,
        direction = "bottomRight",
        label,
    } = props;

    const optionsClasses = [popupCls[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}

            <HListbox
                as="div"
                className={classNames(popupCls.popup, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readOnly}
            >
                <HListbox.Button
                    disabled={readOnly}
                    className={popupCls.trigger}
                >
                    <Button disabled={readOnly}>{value ?? defaultValue}</Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                        [],
                                    )}
                                >
                                    {selected && "!!!"}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
}
