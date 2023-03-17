import { createSelector } from 'reselect';
import { getCounter } from '../getCounter/getCounter';
import { ICounterSchema } from '../../types/CounterSchema';

export const getCounterValue = createSelector(getCounter, (counter: ICounterSchema) => counter.value);
