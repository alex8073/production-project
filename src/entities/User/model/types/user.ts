import { UserRole } from "../consts/consts";
import { IFeatureFlags } from "@/shared/types/featureFlags";
import { IJsonSettings } from "./jsonSettings";

export interface IUser {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: IFeatureFlags;
    jsonSettings?: IJsonSettings;
}

export interface IUserSchema {
    authData?: IUser;

    _initialized: boolean;
}
