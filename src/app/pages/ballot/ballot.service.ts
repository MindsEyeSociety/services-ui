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
export class BallotService {
	apiUrl: string;
	currentUser: Observable<any>;
	ballots: Observable<any>;
	ballotsRefresh:BehaviorSubject<boolean> = new BehaviorSubject(false);
	//private headers = new Headers();
	constructor(private http: Http, private authService:AuthService){
		this.apiUrl = environment.externalUrls.apiBallot;

		this.ballots = this.ballotsRefresh.asObservable().switchMap(
            ()=>
            {
                console.log('ballots switchmap called');
                let headers = this.baseHeaders();
				let options = new RequestOptions({ headers: headers });
				console.log(options);
                return this.http.get(this.apiUrl+'ballots',options).map(response => response.json()).first().catch(this.handleError);
            }
        );
	}
	
	getBallots(){
	    return this.ballots;
	}
	
	refreshBallots(){
		this.ballotsRefresh.next(false);
	}
	
	getBallot(id:number){
		let headers = this.baseHeaders();
		let options = new RequestOptions({ headers: headers });
	    return this.http.get(this.apiUrl+'ballots/'+id,options).map(response => response.json()).first().catch(this.handleError);
	}
	
	saveBallot(ballot:any){
		let headers = this.baseHeaders();
		headers.append('Content-Type', 'application/json');
	    let options = new RequestOptions({ headers: headers });
	    let ballotPost = {'id':0,'name':ballot.name,'startFormat': ballot.startFormat, 'endFormat':ballot.endFormat,'timezone': ballot.timezone};
	    var url = '';
	    if(ballot.id){ ballotPost.id = ballot.id; url = 'ballots/'+ballot.id}
	    else{ url = 'ballots';}
	    return this.http.post(this.apiUrl+url, ballotPost, options)
	    	.map(response => response.json())
	    	.first()
			.catch(this.handleError);
		//return this.http.post(this.apiUrl+'ballots/'+ballot.id,)
	}
	
	saveQuestion(question:any){
		let headers = this.baseHeaders();
		headers.append('Content-Type', 'application/json');
	    let options = new RequestOptions({ headers: headers });
	    let questionPost = {
	    	'ballotId':question.ballotId,
            'name': question.name,
            'type': question.type,
            'count': question.count,
            'description': question.description,
            'readmore': question.readmore,
            'discussion': question.discussion
        }
	    var url = '';
	    if(question.id){ url = 'ballots/'+question.ballotId+'/question/'+question.id}
	    else{ url = 'ballots/'+question.ballotId+'/question';}
	    return this.http.post(this.apiUrl+url, questionPost, options)
	    	.map(response => response.json())
	    	.first()
			.catch(this.handleError);
	}
	
	saveCandidate(candidate: any){
		let headers = this.baseHeaders();
		headers.append('Content-Type','application/json');
	    let options = new RequestOptions({ headers: headers });
	    let candidatePost = {
	    	'ballotId':candidate.ballotId,
	    	'questionId':candidate.questionId,
            'membershipNumber': candidate.membershipNumber,
            'application': candidate.application
        }
	    var url = '';
	    if(candidate.id){ url = 'ballots/'+candidate.ballotId+'/question/'+candidate.questionId+'/candidate/'+candidate.id}
	    else{ url = 'ballots/'+candidate.ballotId+'/question/'+candidate.questionId+'/candidate';}
	    return this.http.post(this.apiUrl+url, candidatePost, options)
	    	.map(response => response.json())
	    	.first()
			.catch(this.handleError);
	}
	
	private baseHeaders(){
		let headers = new Headers();
        headers.append('Authorization','BEARER '+this.authService.userToken);
        return headers;
	}
	
	public getVoters(ballotId:number){
		let headers = this.baseHeaders();
		let options = new RequestOptions({ headers: headers });
		return this.http.get(this.apiUrl+'ballots/'+ballotId+'/voter',options).map(response => response.json()).first().catch(this.handleError);
	}
	
	addVoter(voter: any){
		console.log(voter);
		let headers = this.baseHeaders();
		headers.append('Content-Type','application/json');
	    let options = new RequestOptions({ headers: headers });
	    let voterPost = {
	    	'ballotId':voter.ballotId,
            'membershipNumber': voter.membershipNumber,
            'orgUnitId': voter.orgUnitId
        }
        console.log(voterPost)
	    var url = '';
	    url = 'ballots/'+voter.ballotId+'/voter';
	    console.log(url);
	    return this.http.post(this.apiUrl+url, voterPost, options)
	    	.map(response => response.json())
	    	.first()
			.catch(this.handleError);
	}
	
	public getAffiliates(){
		let headers = this.baseHeaders();
		let options = new RequestOptions({ headers: headers });
		return this.http.get(this.apiUrl+'affiliate',options).map(response => response.json()).first().catch(this.handleError);
	}
	
	public getNations(){
		let headers = this.baseHeaders();
		let options = new RequestOptions({ headers: headers });
		return this.http.get(this.apiUrl+'orgUnit?type=nation&users=0&offices=0&children=1&parents=0',options).map(response => response.json()).first().catch(this.handleError);
	}
	public getOrgUnit(id:number){
		let headers = this.baseHeaders();
		let options = new RequestOptions({ headers: headers });
		return this.http.get(this.apiUrl+'orgUnit/'+id+'?users=0&offices=0&children=1&parents=0',options).map(response => response.json()).first().catch(this.handleError);
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