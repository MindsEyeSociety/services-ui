import { Component, OnInit, Input } from '@angular/core';
import {Subscription} from 'rxjs/Rx';
import {BallotItemService} from '../ballot-item.service';
import {BallotService} from '../ballot.service';

@Component({
    selector: 'app-voters',
    templateUrl: './voters.component.html',
})
export class VotersComponent implements OnInit {
    @Input() ballotId: number;
    voterSubscription:Subscription;
    voters:any;
    affiliates:any;
    addVoter:any;
    constructor(private ballotService: BallotService, private ballotItemService: BallotItemService) {
        this.addVoter ={
            'ballotId' : this.ballotId,
            'orgUnitId': 0,
            'membershipNumber': '',
            'edit':false
        };
        
    }

    ngOnInit() {
        console.log('voters component init');
        this.addVoter.ballotId = this.ballotId;
        this.subVoters();
    }
    subVoters(){
        this.voterSubscription = this.ballotItemService.getVoters(this.ballotId).subscribe(
            (voters) =>{
                this.voters = voters;
                console.log(this.voters);
            }
        );
    }
    
    add(){

        this.addVoter.edit=true;
    }
    
    orgUnitIdChange(orgUnitId:number){
        console.log('new orgUnitId',orgUnitId);
        this.addVoter.orgUnitId = orgUnitId;
    }
    
    save(){
        console.log(this.addVoter);
        this.ballotService.addVoter(this.addVoter).subscribe(
            result => {
                this.addVoter = {
                    'ballotId' : this.ballotId,
                    'affiliateId': 0,
                    'membershipNumber': '',
                    'edit':false
                };
                this.subVoters();
            },
            error => {this.addVoter.error = error}
        )
    }

}
