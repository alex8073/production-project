import { ICounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;

    // Асинхронные редьюсеры
    loginForm?: ILoginSchema;
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
