import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile.component';
import { OfficersComponent } from './officers.component';
import { LocationComponent } from './location.component';

const routes: Routes =  [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'locations',
        component: LocationComponent
      }, 
      {
        path: 'officers',
        component: OfficersComponent
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserRoutingModule {}
