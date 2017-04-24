import { Injectable } from '@angular/core';

import { Headers, Http, RequestOptions,RequestOptionsArgs, Response } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { AuthService } from '../core/auth.service';

import { User, OrgUnit, OrgUnitSearch } from '../models/';

@Injectable()
export class UserService {
  orgSearchCriteria: BehaviorSubject<OrgUnitSearch>;
  constructor(private http: Http, private authService: AuthService) {}

  /**
   * Gets detailed information regarding a passed-in user, or (if none is provided), the currently logged-in user.
   *
   * @memberOf UserService
   */
  public getUser(userId: String = 'me') : Observable<User> {

    // Create a URL to call from env data.
    const endpointUrl = `${environment.externalUrls.userApi}/user/${userId}`;

    // Observables! Fun for the whole family!
    let user = this.http.get(endpointUrl, {headers: this.getHeaders()} )
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Unknown server error'));

    return user;
  }
  
  public getOrgUnits(search: OrgUnitSearch): Observable<OrgUnit[]>{
    this.orgSearchCriteria = new BehaviorSubject(search);
    return this.orgSearchCriteria.asObservable().switchMap(
        (search: OrgUnitSearch) => {
            let searchParams = new URLSearchParams();
            for(let key in search){
              if(search[key]) searchParams.set(key,search[key]);
            }
            if(searchParams.toString().length==0) searchParams.set('type','Nation');
            console.log('searchParams',searchParams.toString());
            let endpointUrl = `${environment.externalUrls.userApi}/org-unit`;
            let requestOptions:RequestOptionsArgs = new RequestOptions({headers: this.getHeaders(), params: searchParams.toString()});
            return this.http.get(endpointUrl, requestOptions )
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Unknown server error'));
        }
    );
  }
  public searchOrgUnits(search: OrgUnitSearch){
    this.orgSearchCriteria.next(search);
  }
  public getOrgUnit(id: number, limited: boolean = false): Observable<OrgUnit>{
    let searchParams = new URLSearchParams();
    if(limited){
      searchParams.set('users','0');
      searchParams.set('offices','0');
      searchParams.set('parents','0');
    }
    searchParams.set('children','-1');
    console.log('searchParams',searchParams.toString());
    let endpointUrl = `${environment.externalUrls.userApi}/org-unit/`+id;
    let requestOptions:RequestOptionsArgs = new RequestOptions({headers: this.getHeaders(), params: searchParams.toString()});
    return this.http.get(endpointUrl, requestOptions )
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Unknown server error')); 
  }


  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${this.authService.userToken}`)
    return headers;
  }

}
