import { createReduxStore, IAppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";
import type {
    IStateSchema, IReduxStoreWithManager, IThunkExtraArg, IThunkConfig,
} from "./config/StateSchema";

export {
    StoreProvider,
    createReduxStore,
    IStateSchema,
    IReduxStoreWithManager,
    IThunkExtraArg,
    IThunkConfig,
};
export type { IAppDispatch };
