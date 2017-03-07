import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from 'environments/environment';
import { AuthService } from 'app/core/auth.service';


@Injectable()
export class UserService {

  public currentUser: Object;

  constructor(private http: Http, private authService: AuthService) {
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

    if (userId == 'me') {
      this.currentUser = user;
    }

    return user;
  }


  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${this.authService.userToken}`)
    return headers;
  }

}
