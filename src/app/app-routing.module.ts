import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Error404Component } from './pages/error404.component';

const appRoutes = [
  { path: '', redirectTo: 'user', pathMatch: 'full'},
  { path: 'user', loadChildren: 'app/pages/user/user.module#UserModule'},
  { path: 'ballot', loadChildren: 'app/pages/ballot/ballot.module#BallotModule'},
  { path: 'vote', loadChildren: 'app/pages/vote/vote.module#VoteModule'},
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
