import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile.component';
import { OfficersComponent } from './officers.component';
import { LocationListComponent } from './location/location-list.component';
import { LocationComponent } from './location/location.component';
import { MembersComponent } from './members.component';

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
        component: LocationListComponent
      }, 
      {
        path: 'locations/:id',
        component: LocationComponent
      },
      {
        path: 'officers',
        component: OfficersComponent
      }, 
      {
        path: 'members',
        component: MembersComponent
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
