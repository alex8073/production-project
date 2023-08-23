import { IStateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileData } from "./getProfileData";

describe("getProfileData", () => {
    test("should return profile data", () => {
        const data = {
            firstName: "John",
            lastName: "Miller",
            username: "Godzilla",
            country: Country.RUSSIA,
            age: 745,
            currency: Currency.RUB,
            city: "Moscow",
            avatar: "",
        };
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as IStateSchema)).toEqual(data);
    });
    test("should return undefined", () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileData(state as IStateSchema)).toEqual(undefined);
    });
});
