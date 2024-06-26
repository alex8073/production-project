import { ILoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

describe("loginSlice.test", () => {
    test("test set username", () => {
        const state: DeepPartial<ILoginSchema> = {
            username: "123",
        };
        expect(
            loginReducer(
                state as ILoginSchema,
                loginActions.setUsername("new name"),
            ),
        ).toEqual({
            username: "new name",
        });
    });
    test("test set password", () => {
        const state: DeepPartial<ILoginSchema> = {
            password: "123",
        };
        expect(
            loginReducer(
                state as ILoginSchema,
                loginActions.setPassword("new password"),
            ),
        ).toEqual({
            password: "new password",
        });
    });
    test("test set isLoading", () => {
        const state: DeepPartial<ILoginSchema> = {
            isLoading: false,
        };
        expect(
            loginReducer(state as ILoginSchema, loginByUsername.pending),
        ).toEqual({
            isLoading: true,
        });
    });
});
