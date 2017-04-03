import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import {
  Session
} from '../models';

import * as auth from '../actions/auth';

export interface State extends Session {}

const initialState: State = {
  userToken: '',
  fooBar: 'example of a variable that does not change'
}


export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    case auth.ActionTypes.LOGIN_SUCCESS: {
      const userToken = action.payload.userToken;

      return {
        userToken: userToken,
        fooBar: state.fooBar
      };
    }

    case auth.ActionTypes.LOGOUT_SUCCESS: {
      return {
        userToken: '',
        fooBar: state.fooBar
      };
    }

    default: {
      return state;
    }
  }
}
