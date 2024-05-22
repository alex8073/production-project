import { IStateSchema } from "@/app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (state: IStateSchema) =>
    state.articleDetailsPage?.recommendations.isLoading || false;
export const getArticleRecommendationsError = (state: IStateSchema) =>
    state.articleDetailsPage?.recommendations.error;
