import { Inject, Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions, Response} from '@angular/http';
import {Subscription} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { AuthService } from 'app/core/auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class VoteService {
	apiUrl: string;
	currentUser: Observable<any>;
	votes: Observable<any>;
	votesRefresh:BehaviorSubject<boolean> = new BehaviorSubject(false);
	//private headers = new Headers();
	constructor(private http: Http, private authService:AuthService){
		this.apiUrl = environment.externalUrls.apiBallot;

		this.votes = this.votesRefresh.asObservable().switchMap(
            ()=>
            {
                console.log('votes switchmap called');
                let headers = this.baseHeaders();
				let options = new RequestOptions({ headers: headers });
				console.log(options);
                return this.http.get(this.apiUrl+'votes/',options).map(response => response.json()).first().catch(this.handleError);
            }
        );
	}
	
	getVotes(){
	    return this.votes;
	}
	
	refreshVotes(){
		this.votesRefresh.next(false);
	}
	
	getVote(id:number){
		let headers = this.baseHeaders();
		let options = new RequestOptions({ headers: headers });
	    return this.http.get(this.apiUrl+'votes/'+id,options).map(response => response.json()).first().catch(this.handleError);
	}
	private baseHeaders(){
		let headers = new Headers();
        headers.append('Authorization','BEARER '+this.authService.userToken);
        return headers;
	}
	
	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
	
}