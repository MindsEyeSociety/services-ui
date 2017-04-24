import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
// reducer
import * as fromRoot from '../../reducers';

// models
import {
  Session
} from '../../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit, OnDestroy {
  session: Session;
  sessionS: Subscription;
  session$: Observable<Session>;
  constructor(private store: Store<fromRoot.State>) {
    this.session$ = store.let(fromRoot.getSessionState);
  }
  
  ngOnInit() {
    this.sessionS = this.session$.subscribe((session:Session) => {this.session = session; console.log(session)});
  }
  ngOnDestroy(){
    this.sessionS.unsubscribe();
  }

}
