import { IStateSchema } from "app/providers/StoreProvider";
import { ValidateProfileError } from "../../consts/consts";
import { getProfileValidationErrors } from "./getProfileValidationErrors";

describe("getProfileValidationErrors", () => {
    test("should return errors", () => {
        const errors = [
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_COUNTRY,
        ];
        const state: DeepPartial<IStateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };
        expect(getProfileValidationErrors(state as IStateSchema)).toEqual(errors);
    });
    test("should return undefined", () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileValidationErrors(state as IStateSchema)).toEqual(undefined);
    });
});
