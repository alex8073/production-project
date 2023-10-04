import {
    ChangeEvent, memo, useCallback, useMemo,
} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Select.module.scss";

export interface ISelectOption<T extends string> {
    value: T;
    content: string;
}

interface ISelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: ISelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readOnly?: boolean;
}

export const Select = <T extends string>(props: ISelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readOnly,
    } = props;

    const optionList = useMemo(() => options?.map((item) => (
        <option
            className={cls.option}
            key={item.value}
            value={item.value}
        >
            {item.content}
        </option>
    )), [options]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    }, [onChange]);

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readOnly}
            >
                {optionList}
            </select>
        </div>
    );
};

// export const Select = memo(SelectComponent);
