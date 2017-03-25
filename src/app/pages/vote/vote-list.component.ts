import { Component, OnInit } from '@angular/core';
import { SubmenuService } from 'app/core/submenu.service';
import { SubmenuItem } from 'app/core/submenu-item.model';
import { TitleService } from 'app/core/title.service';
import { VoteService } from './vote.service';


@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styles: []
})
export class VoteListComponent implements OnInit {

	constructor(private voteService: VoteService,
		private titleService: TitleService, 
        private submenuService: SubmenuService) { }
	votes:any;
	votesSubscription:any;
	ngOnInit() {
		this.titleService.setTitle( 'Vote!' );
        this.submenuService.setItems(
          [
            {'title': 'Manage Ballots', 'path': '/ballot/ballot'},
            {'title': 'Vote', 'path': '/ballot/vote'},
          ]
        );
		this.votesSubscription = this.voteService.getVotes().subscribe(response => {this.votes = response; console.log(this.votes);});
	}

}
