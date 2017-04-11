import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './pages/error404/error404.component';

// Guards
import * as guard from './guards';

export const appRoutes: Routes = [
  { path: '', loadChildren: 'app/pages/home/home.module#HomeModule' },
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule'},
  { path: 'user', loadChildren: 'app/pages/user/user.module#UserModule', canActivate: [guard.AuthGuard]},
  { path: 'ballot', canActivate: [guard.AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'ballot',
        pathMatch: 'full'
      },
      {
        path: 'ballot',
        loadChildren: 'app/pages/ballot/ballot.module#BallotModule',
      },
      {
        path: 'vote',
        loadChildren: 'app/pages/vote/vote.module#VoteModule',
      }
    ]
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot( appRoutes )],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
