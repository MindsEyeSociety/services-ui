import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Location } from '@angular/common';
import { Observable, AsyncSubject } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';


@Injectable()
export class AuthService {

  public userToken: string;
  constructor(private _location: Location) {}

  public setToken(token: string): void {
    this.userToken = token;
    localStorage.setItem('user-token', token);
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
  loginNew(): Observable<any> {
    var params = this.decodeQueryString(this._location.path());

    if(params['token']){
      this.setToken(params['token']);
      return of({ 'success': true, 'userToken': params['token'] });
    }
    else if(localStorage.getItem('user-token')){
      this.userToken = localStorage.getItem('user-token');
      this.setToken(this.userToken);
      return of({ 'success': true, 'userToken': this.userToken });
    }
    else{
      return of({ 'success': false });
    }
  }

  public clearToken():void{
    this.userToken = null;
    localStorage.removeItem('user-token');
  }

  // Destroys local token, removes from storage, and redirects to porta logout.
  logout(): Observable<any> {
    this.clearToken();
    return of({ 'success': true });
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
