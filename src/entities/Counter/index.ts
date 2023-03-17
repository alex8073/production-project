import { counterReducer } from './model/slice/counterSlice';
import type { ICounterSchema } from './model/types/CounterSchema';
import { Counter } from './ui/Counter';

export {
    ICounterSchema,
    counterReducer,
    Counter,
};
