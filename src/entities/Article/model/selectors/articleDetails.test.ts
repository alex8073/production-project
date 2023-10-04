import { IStateSchema } from "@/app/providers/StoreProvider";
import { getArticleDetailsData, getArticleDetailsLoading, getArticleDetailsError } from "./articleDetails";

describe("getArticleDetailsData", () => {
    test("should return data", () => {
        const data = {
            id: "1",
            title: "title",
        };
        const state: DeepPartial<IStateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as IStateSchema)).toEqual(data);
    });
    test("should return undefined", () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticleDetailsData(state as IStateSchema)).toEqual(undefined);
    });
});

describe("getArticleDetailsLoading", () => {
    test("should return loading", () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsLoading(state as IStateSchema)).toEqual(true);
    });
    test("should return undefined", () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticleDetailsLoading(state as IStateSchema)).toEqual(false);
    });
});

describe("getArticleDetailsError", () => {
    test("should return error", () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetails: {
                error: "error",
            },
        };
        expect(getArticleDetailsError(state as IStateSchema)).toEqual("error");
    });
    test("should return undefined", () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticleDetailsError(state as IStateSchema)).toEqual(undefined);
    });
});
