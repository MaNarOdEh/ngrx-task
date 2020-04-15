import { SavePasswordItem } from './../model/SavePassword';
import { createAction, props } from '@ngrx/store';

export const addpassword = createAction(
  '[savePassword Page] savePassword',
  props<{ pass: SavePasswordItem }>()
);

export const getallSaved = createAction('[savePassword Page] addPassword');

export const deletepassword = createAction(
  '[savePassword Page] deletePassword',
  props<{ passid: string }>()
);
