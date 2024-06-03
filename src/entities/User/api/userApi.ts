import { rtkApi } from "@/shared/api/rtkApi";
import { IUser } from "../model/types/user";
import { IJsonSettings } from "../model/types/jsonSettings";

interface ISetJsonSettingsArg {
    userId: string;
    jsonSettings: IJsonSettings;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<IUser, ISetJsonSettingsArg>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: "PATCH",
                body: {
                    jsonSettings,
                },
            }),
        }),
    }),
});

export const setJsonSettingsMutation =
    userApi.endpoints.setJsonSettings.initiate;
