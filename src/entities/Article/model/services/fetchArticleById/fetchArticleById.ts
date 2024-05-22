import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "@/app/providers/StoreProvider";
import { IArticle } from "../../types/article";

export const fetchArticleById = createAsyncThunk<
    IArticle,
    string,
    IThunkConfig<string>
>("articleDetails/fetchArticleById", async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.get<IArticle>(
            `/articles/${articleId}`,
            {
                params: {
                    _expand: "user",
                },
            },
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue("error");
    }
});
