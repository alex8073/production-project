import { combineReducers } from "@reduxjs/toolkit";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { articleDetailsRecommendationsReducer } from "./articleDetailsRecommendationsSlice";
import { IArticleDetailsPageSchema } from "../types";

export const articleDetailsPageReducer =
    combineReducers<IArticleDetailsPageSchema>({
        comments: articleDetailsCommentsReducer,
        recommendations: articleDetailsRecommendationsReducer,
    });
