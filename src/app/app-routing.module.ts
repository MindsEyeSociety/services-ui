import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Error404Component } from './pages/error404.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'user', pathMatch: 'full'},
      { path: 'user', loadChildren: 'app/pages/user/user.module#UserModule'},
      { path: '**', component: Error404Component }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {}
