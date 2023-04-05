import { CombinedState } from 'redux';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ICounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import { IProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;

    // Асинхронные редьюсеры
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
}

export type IStateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
    getReducerMap: ()=> ReducersMapObject<IStateSchema>;
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
    add: (key: IStateSchemaKey, reducer: Reducer) => void;
    remove: (key: IStateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema>{
    reducerManager:IReducerManager;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
    navigate: (to: To, options?: NavigateOptions) => void,
}

export interface IThunkConfig<T> {
    rejectValue: T,
    extra: IThunkExtraArg
}
