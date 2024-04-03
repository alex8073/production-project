import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";
import { IReduxStoreWithManager, IStateSchema, IStateSchemaKey } from "@/app/providers/StoreProvider";

export type IReducersList = {
    [name in IStateSchemaKey]?: Reducer<NonNullable<IStateSchema[name]>>;
}

interface IDynamicModuleLoaderProps {
    reducers: IReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode
}

export const DynamicModuleLoader = (props: IDynamicModuleLoaderProps) => {
    const {
        reducers,
        children,
        removeAfterUnmount = true,
    } = props;

    const store = useStore() as IReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as IStateSchemaKey];
            // Добавляем редюсер только если его нет
            if (!mounted) {
                store.reducerManager.add(name as IStateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.keys(reducers).forEach((name) => {
                    store.reducerManager.remove(name as IStateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
