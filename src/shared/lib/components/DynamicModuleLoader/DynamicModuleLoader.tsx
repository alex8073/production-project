import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { IReduxStoreWithManager } from "app/providers/StoreProvider";
import { IStateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type IReducersList = {
    [name in IStateSchemaKey]?: Reducer;
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
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as IStateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
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
