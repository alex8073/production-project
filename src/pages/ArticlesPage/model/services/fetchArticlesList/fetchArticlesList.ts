import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "@/app/providers/StoreProvider";
import { ArticleType, IArticle } from "@/entities/Article";
import { addQueryParams } from "@/shared/lib/url/addQueryParams/addQueryParams";
import {
    getArticlePageLimit, getArticlePageNum,
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort, getArticlePageType,
} from "../../selectors/articlePageSelectors";

interface IFetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    IArticle[],
    IFetchArticlesListProps,
    IThunkConfig<string>
>(
    "articlePage/fetchArticlesList",
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const page = getArticlePageNum(getState());
        const limit = getArticlePageLimit(getState());
        const sort = getArticlePageSort(getState());
        const order = getArticlePageOrder(getState());
        const search = getArticlePageSearch(getState());
        const type = getArticlePageType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await extra.api.get<IArticle[]>("/articles", {
                params: {
                    _expand: "user",
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
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
