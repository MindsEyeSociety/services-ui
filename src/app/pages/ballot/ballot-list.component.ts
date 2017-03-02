import { Component, OnInit } from '@angular/core';
import { BallotService } from './ballot.service';

@Component({
    selector: 'app-ballot',
    templateUrl: './ballot-list.component.html',
})
export class BallotListComponent implements OnInit {
    
    constructor(private ballotService: BallotService) { }
    ballots:any;
    ballotsSubscription:any;
    ngOnInit() {
        this.ballotsSubscription = this.ballotService.getBallots().subscribe(response => {this.ballots = response; console.log(this.ballots);});
    }

}
