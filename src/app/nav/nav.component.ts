import { CollapseModule } from 'ng2-bootstrap/collapse';
//import { UserService } from 'app/core/user.service';
import { AuthService } from 'app/core/auth.service';
import { SubmenuService } from 'app/core/submenu.service';
import { SubmenuItem } from 'app/core/submenu-item.model';

import {
  Component,
  OnInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// reducer and actions
import * as fromRoot from '../reducers';
import * as auth from '../actions/auth';

// models
import {
  Session
} from '../models';

 @Component({
   selector: 'app-nav',
   templateUrl: './nav.component.html',
   styleUrls: [ './nav.style.scss' ],
 })
export class NavComponent implements OnInit {
  @Input() session: Session;

  public user: Object;
  public showNav: Boolean = false;
  public submenuItems:SubmenuItem[];
  constructor(
    private store: Store<fromRoot.State>,
    private authService: AuthService,
    //private userService: UserService,
    private submenuService: SubmenuService
  ) { }

  ngOnInit() {
    /*this.userService.currentUser.subscribe(
      user => this.user = user,
      err => console.log(err)
    );*/

    this.submenuService.getItems().subscribe(
      (items) => { this.submenuItems = items; console.log('submenu items', this.submenuItems);}
    );
  }

  onNavClick() {
    this.showNav = ! this.showNav;
  }

  logout(): void {
    this.store.dispatch(new auth.LogoutAction({}));
  }

}
