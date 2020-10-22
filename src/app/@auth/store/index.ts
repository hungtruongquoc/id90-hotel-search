import {Action, createAction, createReducer, on, props} from '@ngrx/store';

export const LOG_USER_IN = '[Authentication Feature] Log User In';
export const UPDATE_USER_AUTHENTICATED = '[Authentication Feature] Update the authentication status of a user';

export interface LoginAction extends Action {
  type: string;
  username: string;
  password: string;
  remember: boolean;
  airline?: string;
}

export interface State {
  isLoggedIn: boolean;
}

export const initialState: State = {
  isLoggedIn: false
};

export const logUserIn = createAction(
  LOG_USER_IN,
  props<{username: string, password: string, airline: string}>()
);

export const updateUserAuthentication = createAction(
  UPDATE_USER_AUTHENTICATED,
  props<{isLoggedIn: boolean}>()
);

export const authenticationReducer = createReducer(initialState,
  on(updateUserAuthentication, (state, action: any) => {
    return {...state, isLoggedIn: !!action.isLoggedIn};
  }),
);

export const selectIsLoggedIn = (state: any) => {
  return state.authentication.isLoggedIn;
};

export function reducer(state: State | undefined, action: Action) {
  return authenticationReducer(state, action);
}
