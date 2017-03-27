import { Component, OnInit } from '@angular/core';
import { BallotService } from './ballot.service';
import { SubmenuService } from 'app/core/submenu.service';
import { SubmenuItem } from 'app/core/submenu-item.model';
import { TitleService } from 'app/core/title.service';

@Component({
    selector: 'app-ballot',
    templateUrl: './ballot-list.component.html',
})
export class BallotListComponent implements OnInit {
    
    constructor(private ballotService: BallotService, 
        private titleService: TitleService, 
        private submenuService: SubmenuService) { }
    ballots:any;
    ballotsSubscription:any;
    ngOnInit() {
        this.titleService.setTitle( 'Manage Ballots' );
        this.submenuService.setItems(
          [
            {'title': 'Manage Ballots', 'path': '/ballot/ballot'},
            {'title': 'Vote', 'path': '/ballot/vote'},
          ]
        );
        this.ballotsSubscription = this.ballotService.getBallots().subscribe(response => {this.ballots = response; console.log(this.ballots);});

    }

}
