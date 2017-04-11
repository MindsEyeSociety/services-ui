import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// reducer
import * as fromRoot from './reducers';

// models
import {
  Session
} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  session$: Observable<Session>;

  constructor(
    private store: Store<fromRoot.State>
  ){
    this.session$ = store.let(fromRoot.getSessionState);
  }
}
