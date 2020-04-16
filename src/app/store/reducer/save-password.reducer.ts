import {
  addpassword,
  getallSaved,
  deletepassword,
} from './../actions/save-password.actions';
import { SavePasswordItem } from './../model/SavePassword';
import { createReducer, on, Action, createSelector, State } from '@ngrx/store';

export const initialState: SavePasswordItem[] = [
  {
    id: '',
    website_name: 'LinkedIn',
    user_name: 'Manar Odeh',
    user_password: '12345679',
  },
];
const _savePasswordReducer = createReducer(
  initialState,
  on(addpassword, (state, pass) => [...state, pass]),
  on(getallSaved, (state) => [...state])
);

export function savePasswordReducer(
  state: SavePasswordItem[] | undefined,
  action: Action
) {
  return _savePasswordReducer(state, action);
}
