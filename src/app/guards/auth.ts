import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as fromRoot from '../reducers';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<fromRoot.State>
  ){}

  hasUserInStore(): Observable<boolean> {
    return this.store.select(fromRoot.getSessionUser)
      .map(user => !!user)
      .take(1);
  }

  hasUser(): Observable<boolean> {
    return this.hasUserInStore()
      .switchMap(inStore => {
        return of(inStore);
      });
  }

  canActivate(): Observable<boolean> {
    return this.hasUser();
  }
}
