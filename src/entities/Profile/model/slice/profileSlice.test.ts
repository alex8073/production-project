import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { DeepPartial } from "@reduxjs/toolkit";
import { profileActions, profileReducer } from "./profileSlice";
import { IProfile, IProfileSchema, ValidateProfileError } from "../types/profile";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data: IProfile = {
    firstName: "John",
    lastName: "Miller",
    username: "Godzilla",
    country: Country.RUSSIA,
    age: 745,
    currency: Currency.RUB,
    city: "Moscow",
    avatar: "",
};

describe("profileSlice", () => {
    test("set edit mode", () => {
        const state: DeepPartial<IProfileSchema> = { readOnly: true };

        expect(profileReducer(
            state as IProfileSchema,
            profileActions.setReadOnly(false),
        )).toEqual({
            readOnly: false,
        });
    });
    test("cancel edit mode", () => {
        const state: DeepPartial<IProfileSchema> = { data, form: { username: "" } };

        expect(profileReducer(
            state as IProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readOnly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });
    test("update profile", () => {
        const state: DeepPartial<IProfileSchema> = { form: { username: "123" } };

        expect(profileReducer(
            state as IProfileSchema,
            profileActions.updateProfile({
                username: "123456",
            }),
        )).toEqual({
            form: { username: "123456" },
        });
    });
    test("update profile service pending", () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as IProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test("update profile service fulfilled", () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as IProfileSchema,
            updateProfileData.fulfilled(data, ""),
        )).toEqual({
            isLoading: false,
            readOnly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
