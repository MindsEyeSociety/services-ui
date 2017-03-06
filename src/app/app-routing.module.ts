import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './pages/error404/error404.component';

const appRoutes: Routes = [
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot( appRoutes )],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
