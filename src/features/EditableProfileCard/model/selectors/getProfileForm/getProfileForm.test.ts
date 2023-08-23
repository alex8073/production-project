import { IStateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm", () => {
    test("should return profile form", () => {
        const form = {
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
                form,
            },
        };
        expect(getProfileForm(state as IStateSchema)).toEqual(form);
    });
    test("should return undefined", () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileForm(state as IStateSchema)).toEqual(undefined);
    });
});
