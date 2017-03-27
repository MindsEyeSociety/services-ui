import { Inject, Injectable } from '@angular/core';
import {Subscription} from 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';
import { VoteService } from './vote.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class VoteItemService {
    vote: Observable<any>;
    voteId: Subject<any> = new Subject();
    
    constructor(private voteService: VoteService){
        console.log('vote item service constructed');
        this.vote = this.voteId.asObservable().switchMap(
            (voteId: any)=>
            {
                console.log('switchmap called '+voteId);
                return this.voteService.getVote(voteId);
            }
        )
    }
    setVoteId(voteId:number){
        this.voteId.next(voteId);
    }
    getCurrentVote():Observable<any>{
        return this.vote;
    }

}