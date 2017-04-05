import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import {
  Session,
  makeUserModel
} from '../models';

import * as auth from '../actions/auth';

export interface State extends Session {}

const initialState: State = {
  userToken: '',
  user: null,
  fooBar: 'example of a variable that does not change'
}


export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    case auth.ActionTypes.LOGIN_SUCCESS: {
      const userToken = action.payload.userToken;

      return {
        userToken: userToken,
        user: state.user,
        fooBar: state.fooBar
      };
    }

    case auth.ActionTypes.LOGOUT_SUCCESS: {
      return {
        userToken: '',
        user: null,
        fooBar: state.fooBar
      };
    }

    case auth.ActionTypes.GET_USER_SUCCESS: {
      console.log("GET_USER_SUCCESS", action.payload);

      return {
        userToken: state.userToken,
        user: makeUserModel(action.payload),
        fooBar: state.fooBar
      };
    }

    default: {
      return state;
    }
  }
}
