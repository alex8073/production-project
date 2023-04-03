import { createSlice } from '@reduxjs/toolkit';
import { IProfileSchema } from '../types/profile';

const initialState: IProfileSchema = {
    readOnly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: { },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;