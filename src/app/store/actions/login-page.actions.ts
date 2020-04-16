import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ user: User }>()
);

export const signout = createAction('[Login Page] Sigout');
