import { CombinedState, Dispatch } from "redux";
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { ICounterSchema } from "entities/Counter";
import { IUserSchema } from "entities/User";
import { ILoginSchema } from "features/AuthByUsername";
import { IProfileSchema } from "entities/Profile";
import { AxiosInstance } from "axios";
import { IArticleDetailsSchema } from "entities/Article";
import { IArticleDetailsCommentSchema, IArticleDetailsRecommendationsSchema } from "pages/ArticleDetailsPage";
import { IAddCommentFormSchema } from "features/AddCommentForm";
import { IArticlePageSchema } from "pages/ArticlesPage";
import { IScrollSaverSchema } from "features/ScrollSaver";
import { IArticleDetailsPageSchema } from "pages/ArticleDetailsPage/model/types";

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
    scrollSaver: IScrollSaverSchema;

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
    getReducerMap: ()=> ReducersMapObject<IStateSchema>;
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
    add: (key: IStateSchemaKey, reducer: Reducer) => void;
    remove: (key: IStateSchemaKey) => void;
    // true - вмонтирован, false - демонтирован
    getMountedReducers: () => IMountedReducers;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema>{
    reducerManager:IReducerManager;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
}

export interface IThunkConfig<T> {
    rejectValue: T,
    extra: IThunkExtraArg,
    dispatch?: Dispatch,
    state: IStateSchema,
}
