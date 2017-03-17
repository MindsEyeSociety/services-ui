import { Component, OnInit } from '@angular/core';
import { VoteService } from './vote.service';


@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styles: []
})
export class VoteListComponent implements OnInit {

	constructor(private voteService: VoteService) { }
	votes:any;
	votesSubscription:any;
	ngOnInit() {
		this.votesSubscription = this.voteService.getVotes().subscribe(response => {this.votes = response; console.log(this.votes);});
	}

}
