import { IStateSchema } from "@/app/providers/StoreProvider";

export const getProfileReadOnly = (state: IStateSchema) => state?.profile?.readOnly;
