import { ToDoItem } from './ToDo';
import { createSelector } from '@ngrx/store';
import { SavePasswordItem } from './SavePassword';

export interface AppState {
  readonly todo: Array<ToDoItem>;
  readonly savepass: Array<SavePasswordItem>;
}

/*
const selectFeatureCounter = (state: AppState) => state.count;
const selectFeatureShoppin = (state: AppState) => state.shopping;

export const selectFeatureCounerName = () =>
  createSelector(selectFeatureCounter, (state: Counter) => state.name_);

export const selectFeatureCounterCount = () =>
  createSelector(selectFeatureCounter, (state: Counter) => state.counter_);
*/
