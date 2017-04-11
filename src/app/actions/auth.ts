import { Action } from '@ngrx/store';
import { label } from '../utils';


/**
 * For each action type in an action group, we make a simple
 * enum object for all of our action types.
 *
 * The 'label' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * actions in the application are unique.
 */


export const ActionTypes = {
  LOGIN: label('[AUTH] Login'),
  LOGIN_SUCCESS: label('[AUTH] Login Success'),
  LOGIN_FAIL: label('[AUTH] Login Fail'),
  LOGOUT: label('[AUTH] Logout'),
  LOGOUT_SUCCESS: label('[AUTH] Logout Success'),
  LOGOUT_FAIL: label('[AUTH] Logout Fail'),
  GET_USER: label('[AUTH] Get User'),
  GET_USER_SUCCESS: label('[AUTH] Get User Success'),
  GET_USER_FAIL: label('[AUTH] Get User Fail')
}


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in our reducer functions.
 */


export class LoginAction implements Action {
  type = ActionTypes.LOGIN;
  constructor() { }
}
export class LoginSuccessAction implements Action {
  type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: Object) { }
}
export class LoginFailAction implements Action {
  type = ActionTypes.LOGIN_FAIL;
  constructor(public payload: Object) { }
}

export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT;
  constructor(public payload: Object) { }
}
export class LogoutSuccessAction implements Action {
  type = ActionTypes.LOGOUT_SUCCESS;
  constructor(public payload: Object) { }
}
export class LogoutFailAction implements Action {
  type = ActionTypes.LOGOUT_FAIL;
  constructor(public payload: Object) { }
}

export class GetUserAction implements Action {
  type = ActionTypes.GET_USER;
  constructor(public payload: Object) { }
}
export class GetUserSuccessAction implements Action {
  type = ActionTypes.GET_USER_SUCCESS;
  constructor(public payload: Object) { }
}
export class GetUserFailAction implements Action {
  type = ActionTypes.GET_USER_FAIL;
  constructor(public payload: Object) { }
}


/**
 * We export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
 export type Actions =
     LoginAction
   | LoginSuccessAction
   | LoginFailAction
   | LogoutAction
   | LogoutSuccessAction
   | LogoutFailAction
   | GetUserAction
   | GetUserSuccessAction
   | GetUserFailAction
