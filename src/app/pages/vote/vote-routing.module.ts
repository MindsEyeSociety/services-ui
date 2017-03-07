import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { VoteListComponent }           from './vote-list.component';
import { VoteHomeComponent } from './vote-home.component';
import { VoteItemComponent } from './vote-item.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: VoteListComponent,
        children: [
        {
          path: '',
          component: VoteHomeComponent
        },
        {
          path: ':id',
          component: VoteItemComponent,
        }]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class VoteRoutingModule {}