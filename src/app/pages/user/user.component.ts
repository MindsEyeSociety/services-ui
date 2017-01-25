import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

/**
 * Component designed to display a User.
 *
 * @export
 * @class UserComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
  providers: [AuthService]
})
export class UserComponent implements OnInit {

  /**
   * The currently logged in User.
   *
   * @type {Object}
   * @memberOf UserComponent
   */
  currentUser : Object;
  /**
   * Whether or not this user is logged in.
   *
   * @type {Boolean}
   * @memberOf UserComponent
   */
  isLoggedIn : Boolean;

  /**
   * Creates an instance of UserComponent.
   *
   * @param {AuthService} authService
   *
   * @memberOf UserComponent
   */
  constructor(private authService: AuthService) {}

  /**
   * On Init method, which is run during component initialization.
   * Logs in a user, and sets local vars based on login info.
   *
   * @memberOf UserComponent
   */
  ngOnInit() {
      this.authService.login('admin', 'pass123');
      this.currentUser = this.authService.userToken;
      this.isLoggedIn = this.authService.verifyToken();
  }

}
