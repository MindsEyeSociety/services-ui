import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import {Location} from '@angular/common';
import { Observable, AsyncSubject } from 'rxjs/Rx';


@Injectable()
export class AuthService {

  public userToken: string;
  public userTokenSubject: AsyncSubject<any> = new AsyncSubject();
  constructor(private _location: Location) {
    // Attempt to pull from storage upon instantiation.
    var params = this.decodeQueryString(this._location.path());
    console.log(params);
    if(params['token']){
      console.log('setting token in auth Constructor',params['token']);
      this.setToken(params['token']);
    }
    else if(localStorage.getItem('user-token')){
      this.userToken = localStorage.getItem('user-token');
      this.userTokenSubject.next(this.userToken);
      this.userTokenSubject.complete();
    }
    else{
      this.userTokenSubject.next(false);
      this.userTokenSubject.complete();
    }
  }

  public setToken(token: string): void {
    this.userToken = token;
    localStorage.setItem('user-token', token);
    this.userTokenSubject.next(this.userToken);
    this.userTokenSubject.complete();
  }

  // Redirects to login if user is not logged in.
  public checkLogin(): void {
    if (this.userToken === null) {
      this.login();
    }
  }
  
  public login(): void {
    window.location.href = environment.externalUrls.authLogin;

  }

  // Destroys local token, removes from storage, and redirects to porta logout.
  public logout(): void {
    this.userToken = null;
    localStorage.removeItem('user-token');
    window.location.href = environment.externalUrls.authLogout;
  }
  decodeQueryString(path:string){
    var querystring = path.substring(path.indexOf('?')+1).split('&');
    var params = {}, pair, d = decodeURIComponent;
    // march and parse
    for (var i = querystring.length - 1; i >= 0; i--) {
      pair = querystring[i].split('=');
      params[d(pair[0])] = d(pair[1] || '');
    }
    return params;
  }

}
