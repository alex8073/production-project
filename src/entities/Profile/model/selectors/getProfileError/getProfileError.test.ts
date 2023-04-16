import { IStateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError", () => {
    test("should return profile error", () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                error: "123",
            },
        };
        expect(getProfileError(state as IStateSchema)).toEqual("123");
    });
    test("should return undefined", () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileError(state as IStateSchema)).toEqual(undefined);
    });
});
