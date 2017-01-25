import { Injectable } from '@angular/core';

import { ConfigService } from './config.service';

/**
 * Service designed to handle Authentication.
 *
 * @export
 * @class AuthService
 */
@Injectable()
export class AuthService {

  /**
   * The current user token for the logged in user.
   *
   * @private
   * @type {string}
   * @memberOf AuthService
   */
  private userToken: string;

  /**
   * Creates an instance of AuthService.
   *
   * @param {ConfigService} configService
   *
   * @memberOf AuthService
   */
  constructor(private configService: ConfigService) { }


  /**
   * Logs in the user, setting the userToken.
   *
   * @param {String} user
   * @param {String} pass
   * @returns {boolean} True if the login was successful, otherwise false.
   *
   * @memberOf AuthService
   */
  login(user: String, pass: String): boolean {
    console.log(`Faking a call to ${this.configService.getConfig()['apiHost']}/v1/auth/signin/ with username ${user} and password ${pass}.`);
    if (user == 'admin' && pass == 'test123') {
        this.userToken = 'COMPLETELY_FAKE_TOKEN';
        return true;
    }
    return false;
  }

  /**
   * Verifies if the current token is still valid.
   *
   * @returns {boolean} True if the current token is still valid. Otherwise, false.
   *
   * @memberOf AuthService
   */
  verifyToken(): boolean {
    console.log(`Faking a call to ${this.configService.getConfig()['apiHost']}/v1/auth/verify/ with token ${this.userToken}.`);
    return this.userToken == 'COMPLETELY_FAKE_TOKEN';
  }

  /**
   * Logs the user out, nullifying their current token.
   *
   * @memberOf AuthService
   */
  logout(): void {
    console.log(`Faking a call to ${this.configService.getConfig()['apiHost']}/v1/auth/signout to close token session.`);
    this.userToken = null;
  }

  /**
   * Returns a value indicating whether or not the current user is logged in.
   *
   * @returns {boolean} True if the current user has a token set, otherwise false.
   *
   * @memberOf AuthService
   */
  isLoggedIn(): boolean {
    return this.userToken != null;
  }

}
