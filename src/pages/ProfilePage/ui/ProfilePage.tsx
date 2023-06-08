import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { DynamicModuleLoader, IReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    fetchProfileData,
    getProfileError,
    getProfileLoading,
    getProfileReadOnly,
    getProfileValidationErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getProfileForm } from "entities/Profile/model/selectors/getProfileForm/getProfileForm";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country/model/types/country";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page/ui/Page";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

interface IProfilePageProps {
    className?: string;
}

const initialReducers: IReducersList = { profile: profileReducer };

const ProfilePage = memo(({ className }: IProfilePageProps) => {
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const validationErrors = useSelector(getProfileValidationErrors);
    const { id } = useParams<{id: string}>();

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
            <Page className={classNames("", {}, [className])}>
                <ProfilePageHeader />

                {validationErrors?.length && validationErrors.map((error) => (
                    <Text
                        title={validateErrorsTranslate[error]}
                        theme={TextTheme.ERROR}
                        key={error}
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
            </Page>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
