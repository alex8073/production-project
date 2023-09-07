import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/StoreProvider";
import {
    ArticleListView, ArticleSortField, ArticleType, IArticle,
} from "entities/Article";
import { ARTICLES_LIST_VIEW } from "shared/const/localStorage";
import { ISortOrder } from "shared/types";
import { IArticlePageSchema } from "../types/articlePageSchema";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";

const articlesAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<IStateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
    name: "articlePageSlice",
    initialState: articlesAdapter.getInitialState<IArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleListView.TILE,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        sort: ArticleSortField.CREATED,
        search: "",
        order: "asc",
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleListView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_LIST_VIEW, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<ISortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_LIST_VIEW) as ArticleListView;
            state.view = view;
            state.limit = view === ArticleListView.LIST ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlePageReducer, actions: articlePageActions } = articlePageSlice;
