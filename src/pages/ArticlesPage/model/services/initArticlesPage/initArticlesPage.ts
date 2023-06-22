import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider";
import { ISortOrder } from "shared/types";
import { ArticleSortField, ArticleType } from "entities/Article";
import { getArticlePageInited } from "../../selectors/articlePageSelectors";
import { articlePageActions } from "../../slice/articlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    IThunkConfig<string>
>(
    "articlePage/initArticlesPage",
    async (searchParams, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const inited = getArticlePageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get("order") as ISortOrder;
            const sortFromUrl = searchParams.get("sort") as ArticleSortField;
            const searchFromUrl = searchParams.get("search");
            const typeFromUrl = searchParams.get("type") as ArticleType;

            if (orderFromUrl) {
                dispatch(articlePageActions.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(articlePageActions.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(articlePageActions.setSearch(searchFromUrl));
            }
            if (typeFromUrl) {
                dispatch(articlePageActions.setType(typeFromUrl));
            }
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
