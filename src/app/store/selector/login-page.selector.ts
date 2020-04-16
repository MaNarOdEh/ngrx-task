import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LoginState } from '../reducer/login-page.reducer';
export interface App {
  featureLogin: LoginState;
}

export const selectFeatureLogin = (state: App) => state.featureLogin;

export const selectFeatureUserName = () =>
  createSelector(selectFeatureLogin, (state: LoginState) => state.username_);
export const selectFeatureUserpassword = () =>
  createSelector(selectFeatureLogin, (state: LoginState) => state.password_);
