import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">;

interface IInputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readOnly?: boolean;
}

export const Input = memo((props: IInputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        autoFocus,
        readOnly,
        ...rest
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, { [cls.readOnly]: readOnly }, [className])}>
            {placeholder && (
                <div>
                    {`${placeholder}>`}
                </div>
            )}
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                ref={inputRef}
                readOnly={readOnly}
                {...rest}
            />
        </div>
    );
});
