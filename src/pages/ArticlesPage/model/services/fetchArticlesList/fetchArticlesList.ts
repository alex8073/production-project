import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider";
import { IArticle } from "entities/Article";
import { getArticlePageLimit } from "../../selectors/articlePageSelectors";

interface IFetchArticlesListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<
    IArticle[],
    IFetchArticlesListProps,
    IThunkConfig<string>
>(
    "articlePage/fetchArticlesList",
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const { page = 1 } = props;
        const limit = getArticlePageLimit(getState());

        try {
            const response = await extra.api.get<IArticle[]>("/articles", {
                params: {
                    _expand: "user",
                    _page: page,
                    _limit: limit,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue("error");
        }
    },
);
