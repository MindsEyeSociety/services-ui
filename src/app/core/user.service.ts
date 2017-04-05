import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import { Observable, AsyncSubject } from 'rxjs/Rx';
import { CanActivate } from '@angular/router';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from 'environments/environment';
import { AuthService } from 'app/core/auth.service';


@Injectable()
export class UserService implements CanActivate {

  public currentUser: AsyncSubject<Object> = new AsyncSubject();

  constructor(private http: Http, private authService: AuthService) {
    /*var userTokenSub = this.authService.userTokenSubject.subscribe(
      (userToken:string)=>{
        console.log('user token subscription called',userToken);
        if(!userToken || userToken.length == 0){
          console.log('No user');
          this.currentUser.next(false);
          this.currentUser.complete();
        }
        else{
          console.log('calling for me user');
          this.getUser('me').subscribe(
            (user:Object)=>{
              this.currentUser.next(user);
              this.currentUser.complete();
            },
            error =>  {
              console.log("Error getting user, clear token");
              this.authService.clearToken();
              this.currentUser.next(false);
              this.currentUser.complete();
            }
          )
        }
      }
    );*/

  }

  canActivate() {
    return this.currentUser.asObservable().map(
      (user:any)=>
      {
        if(user) return true;
        else {
          this.authService.login();
          return false;
        }
      }
    );
  }

  /**
   * Gets detailed information regarding a passed-in user, or (if none is provided), the currently logged-in user.
   *
   * @memberOf UserService
   */
  public getUser(userId?: String) : Observable<Object> {

    // If no user ID is presented, use the 'me' endpoint.
    if (!userId) { userId = "me"; }

    // Create a URL to call from env data.
    const endpointUrl = `${environment.externalUrls.userApi}/user/${userId}`;

    // Observables! Fun for the whole family!
    let user = this.http.get(endpointUrl, {headers: this.getHeaders()} )
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Unknown server error'));

    return user;
  }


  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${this.authService.userToken}`)
    return headers;
  }

}
