import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {VoteItemService} from './vote-item.service';
import {VoteService} from './vote.service';

@Component({
  selector: 'app-vote-item',
  templateUrl: './vote-item.component.html',
  styles: []
})
export class VoteItemComponent implements OnInit {
  private voteSubscription: Subscription;
  private voteIdSubscription: Subscription;
  public vote: any;

  constructor(private route: ActivatedRoute, private router: Router, private voteService: VoteService, private voteItemService: VoteItemService) { }

  ngOnInit() {
    this.voteSubscription = this.voteItemService.getCurrentVote().subscribe(
          (vote:any) => {
              console.log('new vote');
              console.log(vote);
              this.vote = vote;
              console.log(this.vote);
          }
      );
      this.voteIdSubscription = this.route.params.subscribe(
          params => {
              this.vote = false;
              this.voteItemService.setVoteId(params['id']);
          }
      );
  }

}
