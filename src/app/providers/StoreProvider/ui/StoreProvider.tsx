import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { IStateSchema } from "../config/StateSchema";

interface IStoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<IStateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider = (props: IStoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    // const navigate = useNavigate();

    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>,
        // navigate,
    );

    console.log("Render");

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
