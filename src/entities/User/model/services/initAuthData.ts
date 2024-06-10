import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "@/app/providers/StoreProvider";
import { getUserDataByIdQuery } from "../../api/userApi";
import { IUser } from "../types/user";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";

export const initAuthData = createAsyncThunk<IUser, void, IThunkConfig<string>>(
    "user/initAuthData",
    async (newJsonSettings, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue("");
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue("");
        }
    },
);
