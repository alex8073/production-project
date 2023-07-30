import { Fragment, ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "../Button/Button";
import { HStack } from "../Stack";
import cls from "./ListBox.module.scss";

export interface IListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

type IDropdownDirection = "top" | "bottom";

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
        direction = "bottom",
        label,
    } = props;

    const optionsClasses = [
        cls[direction],
    ];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}

            <HListbox
                as="div"
                className={classNames(cls.ListBox, { }, [className])}
                value={value}
                onChange={onChange}
                disabled={readOnly}
            >
                <HListbox.Button disabled={readOnly} className={cls.trigger}>
                    <Button disabled={readOnly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={
                                        classNames(
                                            cls.item,
                                            {
                                                [cls.active]: active,
                                                [cls.disabled]: item.disabled,
                                            },
                                            [],
                                        )
                                    }
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
