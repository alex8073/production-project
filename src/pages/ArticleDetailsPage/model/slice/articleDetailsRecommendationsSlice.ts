import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { IStateSchema } from "@/app/providers/StoreProvider";
import { IArticle } from "@/entities/Article";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";
import { IArticleDetailsRecommendationsSchema } from "../types/articleDetailsRecommendationsSchema";

const recommendationsAdapter = createEntityAdapter<IArticle>({
    selectId: (recommendation) => recommendation.id,
});

export const getArticleRecommendations =
    recommendationsAdapter.getSelectors<IStateSchema>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState(),
    );

const articleDetailsRecommendationsSlice = createSlice({
    name: "articleDetailsRecommendationsSlice",
    initialState:
        recommendationsAdapter.getInitialState<IArticleDetailsRecommendationsSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleRecommendations.fulfilled,
                (state, action: PayloadAction<IArticle[]>) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsRecommendationsReducer } =
    articleDetailsRecommendationsSlice;
