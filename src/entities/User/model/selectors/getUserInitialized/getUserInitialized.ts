import { IStateSchema } from "app/providers/StoreProvider";

export const getUserInitialized = (state: IStateSchema) => state.user._initialized;
