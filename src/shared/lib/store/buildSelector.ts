import { useSelector } from "react-redux";
import { IStateSchema } from "@/app/providers/StoreProvider";

type Selector<T, Args extends any[]> = (
    state: IStateSchema,
    ...args: Args
) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

export function buildSelector<T, Args extends any[]>(
    selector: Selector<T, Args>,
): Result<T, Args> {
    const useSelectorHook: Hook<T, Args> = (...args: Args) =>
        useSelector((state: IStateSchema) => selector(state, ...args));

    return [useSelectorHook, selector];
}
