import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IScrollSaverSchema } from "../types/scrollSaverSchema";

const initialState: IScrollSaverSchema = {
    scroll: {},
};

export const scrollSaverSlice = createSlice({
    name: "scrollSaver",
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string, position: number}>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: scrollSaverActions } = scrollSaverSlice;
export const { reducer: scrollSaverReducer } = scrollSaverSlice;
