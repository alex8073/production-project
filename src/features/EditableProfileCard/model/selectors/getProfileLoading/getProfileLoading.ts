import { IStateSchema } from "app/providers/StoreProvider";

export const getProfileLoading = (state: IStateSchema) => state?.profile?.isLoading;
