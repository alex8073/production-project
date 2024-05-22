import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "@/app/providers/StoreProvider";
import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePageNum,
} from "../../selectors/articlePageSelectors";
import { articlePageActions } from "../../slice/articlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    IThunkConfig<string>
>("articlePage/fetchNextArticlesPage", async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const hasMore = getArticlePageHasMore(getState());
    const page = getArticlePageNum(getState());
    const isLoading = getArticlePageIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(articlePageActions.setPage(page + 1));
        dispatch(fetchArticlesList({}));
    }
});
