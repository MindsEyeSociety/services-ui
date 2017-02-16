import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public userToken: string;

  constructor() {
    // Attempt to pull from storage upon instantiation.
    this.userToken = localStorage.getItem('user-token');
  }

  public setToken(token: string): void {
    this.userToken = token;
    localStorage.setItem('user-token', token);
  }

  // Redirects to login if user is not logged in.
  public checkLogin(): void {
    if (this.userToken === null) {
      window.location.href = 'http://api-stage.mindseyesociety.org/users/v1/auth/signin/ux-dev';
    }
  }

  // Destroys local token, removes from storage, and redirects to porta logout.
  public logout(): void {
    this.userToken = null;
    localStorage.removeItem('user-token');
    window.location.href = 'https://portal.mindseyesociety.org/logout';
  }

}
