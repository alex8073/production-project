import { IStateSchema } from "@/app/providers/StoreProvider";

export const getArticleDetailsData = (state: IStateSchema) =>
    state?.articleDetails?.data;
export const getArticleDetailsLoading = (state: IStateSchema) =>
    state?.articleDetails?.isLoading || false;
export const getArticleDetailsError = (state: IStateSchema) =>
    state?.articleDetails?.error;
