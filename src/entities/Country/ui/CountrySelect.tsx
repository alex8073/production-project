import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { Country } from "../model/types/country";

interface ICountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (country: Country) => void;
    readOnly?: boolean;
}

const options = [
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.UKRAINE, content: Country.UKRAINE },
    { value: Country.ARMENIA, content: Country.ARMENIA },
    { value: Country.RUSSIA, content: Country.RUSSIA },
];

export const CountrySelect = memo((props: ICountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readOnly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames("", { }, [className])}
            label={t("Select country")}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
