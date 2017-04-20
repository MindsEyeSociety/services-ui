import { Component, OnInit, Input } from '@angular/core';
import {VoteItemService} from '../vote-item.service';
import {VoteService} from '../vote.service';

@Component({
    selector: 'app-vote-candidate',
    templateUrl: './vote-candidate.component.html',
})
export class VoteCandidateComponent implements OnInit {
    @Input() candidate: any;
    @Input() voteId: number;
    @Input() questionId: number;
    @Input() question: any;


    constructor(private voteService: VoteService, private voteItemService: VoteItemService) { }
    ngOnInit() {
    }

}
