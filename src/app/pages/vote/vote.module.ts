import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleService } from 'app/core/title.service';
import { VoteRoutingModule }       from './vote-routing.module';
import { VoteListComponent } from './vote-list.component';
import { VoteItemComponent } from './vote-item.component';
import { VoteHomeComponent } from './vote-home.component';
import { VoteQuestionComponent } from './vote-question/vote-question.component';
import { VoteCandidateComponent } from './vote-candidate/vote-candidate.component';

import { VoteService } from './vote.service';
import { VoteItemService } from './vote-item.service';


@NgModule({
  imports: [
    CommonModule,
    VoteRoutingModule
  ],
  declarations: [VoteListComponent, VoteItemComponent, VoteHomeComponent, VoteQuestionComponent, VoteCandidateComponent],
  providers: [VoteService, VoteItemService]
})
export class VoteModule { 
  constructor( private titleService: TitleService ) {
    this.titleService.setTitle( 'Vote' );
  }
}
