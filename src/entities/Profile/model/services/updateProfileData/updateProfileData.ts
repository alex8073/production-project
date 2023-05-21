import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { IProfile, ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "../../services/validateProfile/validateProfile";

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<ValidateProfileError[]>
>(
    "profile/updateProfileData",
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<IProfile>(
                `/profile/${formData?.id}`,
                formData,
            );

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
