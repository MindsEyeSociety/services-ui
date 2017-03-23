import { CollapseModule } from 'ng2-bootstrap/collapse';
import { UserService } from 'app/core/user.service';
import { AuthService } from 'app/core/auth.service';

import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

 @Component({
   selector: 'app-nav',
   templateUrl: './nav.component.html',
   styleUrls: [ './nav.style.scss' ],
 })
export class NavComponent implements OnInit {

  public user: Object;
  public showNav: Boolean = false;
  constructor(private authService: AuthService, private userService: UserService) { }
  
  ngOnInit() {
    this.userService.currentUser.subscribe(
      user => this.user = user,
      err => console.log(err)
    );
  }

  onNavClick() {
    this.showNav = ! this.showNav;
  }

}
