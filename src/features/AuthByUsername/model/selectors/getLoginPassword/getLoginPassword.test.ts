import { IStateSchema } from "@/app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword.test", () => {
    test("should return value", () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                password: "123",
            },
        };
        expect(getLoginPassword(state as IStateSchema)).toEqual("123");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getLoginPassword(state as IStateSchema)).toEqual("");
    });
});
