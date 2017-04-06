import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as fromRoot from '../reducers';
import { UserService } from '../core/user.service';
import { environment } from 'environments/environment';
import * as auth from '../actions/auth';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<fromRoot.State>,
    private userService: UserService
  ){}

  hasUserInStore(): Observable<boolean> {
    return this.store.select(fromRoot.getSessionUser)
      .map(user => !!user)
      .take(1);
  }

  hasUserInApi(): Observable<boolean> {
    return this.userService.getUser()
      .map( res => res ? new auth.GetUserSuccessAction(res) : new auth.GetUserFailAction(res) )
      .map(res => !!res)
      .catch(() => {
        window.location.href = environment.externalUrls.authLogin;
        return of(false);
      });
  }

  hasUser(): Observable<boolean> {
    return this.hasUserInStore()
      .switchMap(inStore => {
        if (inStore) {
          return of(inStore);
        }

        return this.hasUserInApi();
      });
  }

  canActivate(): Observable<boolean> {
    return this.hasUser();
  }
}
