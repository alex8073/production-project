import { UserRole } from "../consts/consts";
import { IFeatureFlags } from "@/shared/types/featureFlags";

export interface IUser {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: IFeatureFlags;
}

export interface IUserSchema {
    authData?: IUser;

    _initialized: boolean;
}
