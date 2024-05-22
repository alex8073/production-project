import { CombinedState, Dispatch } from "redux";
import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ICounterSchema } from "@/entities/Counter";
import { IUserSchema } from "@/entities/User";
import { ILoginSchema } from "@/features/AuthByUsername";
import { IArticleDetailsSchema } from "@/entities/Article";
import { IAddCommentFormSchema } from "@/features/AddCommentForm";
import { IArticlePageSchema } from "@/pages/ArticlesPage";
import { IScrollSaverSchema } from "@/features/ScrollSaver";
import { IArticleDetailsPageSchema } from "@/pages/ArticleDetailsPage";
import { rtkApi } from "@/shared/api/rtkApi";
import { IProfileSchema } from "@/features/EditableProfileCard";

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
    scrollSaver: IScrollSaverSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // Асинхронные редьюсеры
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    articleDetails?: IArticleDetailsSchema;
    addCommentForm?: IAddCommentFormSchema;
    articlesPage?: IArticlePageSchema;
    articleDetailsPage?: IArticleDetailsPageSchema;
}

export type IStateSchemaKey = keyof IStateSchema;
export type IMountedReducers = OptionalRecord<IStateSchemaKey, boolean>;

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>;
    reduce: (
        state: IStateSchema,
        action: AnyAction,
    ) => CombinedState<IStateSchema>;
    add: (key: IStateSchemaKey, reducer: Reducer) => void;
    remove: (key: IStateSchemaKey) => void;
    // true - вмонтирован, false - демонтирован
    getMountedReducers: () => IMountedReducers;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
}

export interface IThunkConfig<T> {
    rejectValue: T;
    extra: IThunkExtraArg;
    dispatch?: Dispatch;
    state: IStateSchema;
}
