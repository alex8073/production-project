import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfileCard } from "@/entities/Profile";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { Text, TextTheme } from "@/shared/ui/Text";
import { DynamicModuleLoader, IReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { VStack } from "@/shared/ui/Stack";
import { ValidateProfileError } from "../../model/consts/consts";
import {
    EditableProfileCardHeader,
} from "../EditableProfileCardHeader/EditableProfileCardHeader";
import { getProfileLoading } from "../../model/selectors/getProfileLoading/getProfileLoading";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileValidationErrors } from "../../model/selectors/getProfileValidationErrors/getProfileValidationErrors";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

const initialReducers: IReducersList = { profile: profileReducer };

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation("profile");

    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const validationErrors = useSelector(getProfileValidationErrors);

    const validateErrorsTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t("Server error"),
        [ValidateProfileError.NO_DATA]: t("No data"),
        [ValidateProfileError.INCORRECT_USER_DATA]: t("Data required"),
        [ValidateProfileError.INCORRECT_AGE]: t("Incorrect age"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Incorrect country"),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ firstName: value }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastName: value }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) }));
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <VStack gap="16" max className={className}>
                <EditableProfileCardHeader />

                {validationErrors?.length && validationErrors.map((error) => (
                    <Text
                        title={validateErrorsTranslate[error]}
                        theme={TextTheme.ERROR}
                        key={error}
                        data-testid="EditableProfileCard.Error"
                    />
                ))}

                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readOnly={readOnly}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
