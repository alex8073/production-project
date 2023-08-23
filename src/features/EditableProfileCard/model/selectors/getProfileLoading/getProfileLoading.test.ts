import { IStateSchema } from "app/providers/StoreProvider";
import { getProfileLoading } from "./getProfileLoading";

describe("getProfileLoading", () => {
    test("should return isLoading value", () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileLoading(state as IStateSchema)).toEqual(true);
    });
    test("should return undefined", () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileLoading(state as IStateSchema)).toEqual(undefined);
    });
});
