import { Currency } from "entities/Currency/model/types/currency";
import { Country } from "entities/Country/model/types/country";

export interface IProfile {
    firstName?: string;
    lastName?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface IProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readOnly: boolean;
}