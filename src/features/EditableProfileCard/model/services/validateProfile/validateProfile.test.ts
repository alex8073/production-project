import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ValidateProfileError } from "../../consts/consts";
import { validateProfileData } from "./validateProfile";

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

describe("validateProfileData.test", () => {
    test("correct data", async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test("incorrect user data and country", async () => {
        const result = validateProfileData({ ...data, firstName: undefined, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test("incorrect user age", async () => {
        const result = validateProfileData({ ...data, age: 0 });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test("incorrect all", async () => {
        const result = validateProfileData({ });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test("profile undefined", async () => {
        const result = validateProfileData(undefined);
        expect(result).toEqual([
            ValidateProfileError.NO_DATA,
        ]);
    });
});
