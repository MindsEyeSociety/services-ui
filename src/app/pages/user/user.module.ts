import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile.component';
import { TitleService } from 'app/core/title.service';
import { LocationComponent } from './location/location.component';
import { LocationListComponent } from './location/location-list.component';
import { OfficersComponent } from './officers.component';
import { MembersComponent } from './members.component';
import { LocationListItemComponent } from './location/location-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserComponent, ProfileComponent, LocationComponent, OfficersComponent, MembersComponent, LocationListComponent, LocationListItemComponent],
  providers: []
})

export class UserModule {
}
