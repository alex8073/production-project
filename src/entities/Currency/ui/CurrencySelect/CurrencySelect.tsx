import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "entities/Currency";
import { memo, useCallback } from "react";

interface ICurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (currency: Currency) => void;
    readOnly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: ICurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readOnly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames("", { }, [className])}
            label={t("Select currency")}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
