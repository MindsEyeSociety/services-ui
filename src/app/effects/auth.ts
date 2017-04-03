import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/combineLatest';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { go } from '@ngrx/router-store';
import { Router, RouterStateSnapshot } from '@angular/router';

import { environment } from '../../environments/environment';
import * as fromRoot from '../reducers';
import { AuthService } from '../core/auth.service';
import * as auth from '../actions/auth';



@Injectable()
export class AuthEffects {
  constructor(
    private store: Store<fromRoot.State>,
    private actions$: Actions,
    private authService: AuthService
  ) { }

  @Effect()
  loginAction$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGIN)
      .startWith(new auth.LoginAction())
      .switchMap(payload => {
        return this.authService.loginNew()
          .map( res => true === res.success ? new auth.LoginSuccessAction(res) : new auth.LoginFailAction(res) )
          .catch(error => of(new auth.LoginFailAction(error)))
      });

  @Effect()
  logoutAction$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGOUT)
      .map((action: auth.LogoutAction) => action.payload)
      .switchMap(payload => {
        return this.authService.logout()
          .map( res => true === res.success ? new auth.LogoutSuccessAction(res) : new auth.LogoutFailAction(res) )
          .catch(error => of(new auth.LogoutFailAction(error)))
    });

    @Effect({ dispatch: false })
    logoutSuccessAction$: Observable<Action> = this.actions$
      .ofType(auth.ActionTypes.LOGOUT_SUCCESS)
        .do(() => window.location.href = environment.externalUrls.authLogout );
}
