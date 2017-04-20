import { Component, OnInit, Input } from '@angular/core';
import {VoteItemService} from '../vote-item.service';
import {VoteService} from '../vote.service';

@Component({
    selector: 'app-vote-question',
    templateUrl: './vote-question.component.html',
})
export class VoteQuestionComponent implements OnInit {
    @Input() question: any;
    @Input() voteId: number;
    constructor(private voteService: VoteService, private voteItemService: VoteItemService) { }
    
    ngOnInit() {
    }
  
  

}
