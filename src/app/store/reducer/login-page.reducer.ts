import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { login, signout } from '../actions/login-page.actions';
export interface LoginState {
  username_: string;
  password_: string;
  isLoggedIn: boolean;
  isLoggedOut: boolean;
}

export const initialState: LoginState = {
  username_: '',
  password_: '',
  isLoggedIn: false,
  isLoggedOut: true,
};
const _loginReducer = createReducer(
  initialState,
  on(signout, (state) => ({
    username_: '',
    password_: '',
    isLoggedIn: false,
    isLoggedOut: true,
  })),
  on(login, (state, { user }) => ({
    username_: user.username,
    password_: user.password,
    isLoggedIn: false,
    isLoggedOut: true,
  }))
);

export function loginReducer(state: LoginState | undefined, action: Action) {
  return _loginReducer(state, action);
}
