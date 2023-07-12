import { classNames, IMods } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency } from "entities/Currency/model/types/currency";
import { CurrencySelect } from "entities/Currency";
import { Country } from "entities/Country/model/types/country";
import { CountrySelect } from "entities/Country";
import { VStack, HStack } from "shared/ui/Stack";
import { IProfile } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";

interface IProfileCardProps {
    className?: string;
    data?: IProfile;
    isLoading?: boolean;
    readOnly?: boolean;
    error?: string;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: IProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        readOnly,
        error,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <HStack max justify="center" className={classNames(cls.ProfileCard, { }, [cls.loading, className])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack max justify="center" className={classNames(cls.ProfileCard, { }, [cls.error, className])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Profile loading error")}
                    text={t("Try to reload page")}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: IMods = {
        [cls.editing]: !readOnly,
    };

    return (
        <VStack max gap="16" className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar
                && (
                    <HStack max justify="center">
                        <Avatar src={data?.avatar} alt="" />
                    </HStack>
                )}
            <Input
                value={data?.firstName}
                placeholder={t("Name")}
                className={cls.input}
                onChange={onChangeFirstName}
                readOnly={readOnly}
            />
            <Input
                value={data?.lastName}
                placeholder={t("Surname")}
                className={cls.input}
                onChange={onChangeLastName}
                readOnly={readOnly}
            />
            <Input
                value={data?.age}
                placeholder={t("Age")}
                className={cls.input}
                onChange={onChangeAge}
                readOnly={readOnly}
                onKeyDown={(e) => {
                    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                    }
                }}
            />
            <Input
                value={data?.city}
                placeholder={t("City")}
                className={cls.input}
                onChange={onChangeCity}
                readOnly={readOnly}
            />
            <Input
                value={data?.username}
                placeholder={t("Username")}
                className={cls.input}
                onChange={onChangeUsername}
                readOnly={readOnly}
            />
            <Input
                value={data?.avatar}
                placeholder={t("Avatar")}
                className={cls.input}
                onChange={onChangeAvatar}
                readOnly={readOnly}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                className={cls.input}
                readOnly={readOnly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                className={cls.input}
                readOnly={readOnly}
            />
        </VStack>
    );
};
