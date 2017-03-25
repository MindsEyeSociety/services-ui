import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {BallotItemService} from './ballot-item.service';
import {BallotService} from './ballot.service';
@Component({
    selector: 'app-ballot-item',
    templateUrl: './ballot-item.component.html',
})
export class BallotItemComponent implements OnInit {
    private timezones:any = [{value: 1, name: 'Eastern'},{value: 2, name:'Central'},{value: 3, name:'Mountain'},{value: 4, name:'West'},{value:5, name:'Alaska'},{value:6, name:'Hawaii'}];
    private ballotSubscription: Subscription;
    private ballotIdSubscription: Subscription;
    private ballot: any;
    private ballotChanges: any;
    private ballotEdit:boolean = false;
    constructor(private route: ActivatedRoute, private router: Router, private ballotService: BallotService, private ballotItemService: BallotItemService) { }

    ngOnInit() {
        this.ballotSubscription = this.ballotItemService.getCurrentBallot().subscribe(
            (ballot:any) => {
                console.log('new ballot');
                console.log(ballot);
                this.ballot = ballot;
                this.ballot.edit = false;
                this.ballot.isNew = false;
                console.log(this.ballot);
            }
        );
        this.ballotIdSubscription = this.route.params.subscribe(
            params => {
                this.ballot = false;
                if(params['id'] == 'new'){
                    this.newBallot();
                }
                else{
                    this.ballotItemService.setBallotId(params['id']);
                }
            }
        );
    }
    populateBallotDate(){
    }

    newBallot(){
        this.ballot = { 'isNew': true, 'name':'', 'timezone':1};
        let start = new Date();
        //why is dealing with dates such a pain?
        start.setDate(start.getDate()+1);
        start.setHours(0);
        start.setMinutes(0);
        let end = new Date();
        end.setDate(end.getDate()+7);
        end.setHours(23);
        end.setMinutes(59);
        this.ballot.startFormat=start.getFullYear()+'-'+(this.pad(start.getMonth()+1))+'-'+this.pad(start.getDate())+'T'+(start.toTimeString().substring(0,5));
        this.ballot.endFormat=end.getFullYear()+'-'+(this.pad(end.getMonth()+1))+'-'+this.pad(end.getDate())+'T'+(end.toTimeString().substring(0,5));
        console.log(this.ballot);
        this.startEdit();
    }
    private pad(num){
        var str = "" + num;
        var pad = "00"
        var ans = pad.substring(0, pad.length - str.length) + str;
        return ans;
    }
    startEdit(){
        this.ballotChanges = {
            'id': this.ballot.id,
            'name': this.ballot.name,
            'startFormat': this.ballot.startFormat,
            'endFormat': this.ballot.endFormat,
            'timezone':this.ballot.timezone
        };

        this.ballot.edit = true;
    }
    save(){
        console.log(this.ballotChanges);
        this.ballotService.saveBallot(this.ballotChanges).subscribe(
            ballot => {
                if(this.ballot.isNew){
                    this.ballotService.refreshBallots();
                    this.router.navigate(['/ballot/ballot',ballot.id]);
                }else{
                    this.ballotItemService.setBallotId(this.ballot.id);
                    this.ballot.edit=false;
                }
            },
            error => {this.ballotChanges.error = error}
        )
    }
}
