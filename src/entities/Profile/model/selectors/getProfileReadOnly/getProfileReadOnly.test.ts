import { IStateSchema } from "app/providers/StoreProvider";
import { getProfileReadOnly } from "./getProfileReadOnly";

describe("getProfileReadOnly", () => {
    test("should return readOnly value", () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                readOnly: true,
            },
        };
        expect(getProfileReadOnly(state as IStateSchema)).toEqual(true);
    });
    test("should return undefined", () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileReadOnly(state as IStateSchema)).toEqual(undefined);
    });
});
