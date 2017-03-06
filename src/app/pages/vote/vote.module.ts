import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleService } from '../../services/title.service';
import { VoteRoutingModule }       from './vote-routing.module';
import { VoteListComponent } from './vote-list.component';
import { VoteItemComponent } from './vote-item.component';
import { VoteHomeComponent } from './vote-home.component';
import { VoteService } from './vote.service';

@NgModule({
  imports: [
    CommonModule,
    VoteRoutingModule
  ],
  declarations: [VoteListComponent, VoteItemComponent, VoteHomeComponent],
  providers: [VoteService]
})
export class VoteModule { 
  constructor( private titleService: TitleService ) {
    this.titleService.setTitle( 'Vote' );
  }
}
