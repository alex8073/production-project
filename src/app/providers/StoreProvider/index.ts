import { createReduxStore, IAppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";
import type {
    IStateSchema,
    IReduxStoreWithManager,
    IThunkExtraArg,
    IThunkConfig,
    IStateSchemaKey,
} from "./config/StateSchema";

export {
    StoreProvider,
    createReduxStore,
    IStateSchema,
    IReduxStoreWithManager,
    IThunkExtraArg,
    IThunkConfig,
    IStateSchemaKey,
};

export type { IAppDispatch };
