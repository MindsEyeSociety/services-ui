import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AuthService } from 'app/core/auth.service';
import { TitleService } from 'app/core/title.service';
import { ActivatedRoute, Params } from '@angular/router';

// reducer and action
import * as fromRoot from '../../reducers';
import * as auth from '../../actions/auth';

// models
import {
  Session
} from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {
  session$: Observable<Session>;

  constructor(
    private store: Store<fromRoot.State>,
    public titleService: TitleService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute
  ){
    this.session$ = store.let(fromRoot.getSessionState);
  }

  logout(): void {
    this.store.dispatch(new auth.LogoutAction({}));
  }

}
