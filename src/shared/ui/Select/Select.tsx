import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
    ChangeEvent, memo, useCallback, useMemo,
} from "react";
import cls from "./Select.module.scss";

interface ISelectOption {
    value: string;
    content: string;
}

interface ISelectProps {
    className?: string;
    label?: string;
    options?: ISelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Select = memo((props: ISelectProps) => {
    const { t } = useTranslation();
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
        onChange?.(e.target.value);
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
});
