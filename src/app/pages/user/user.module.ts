import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile.component';
import { TitleService } from 'app/core/title.service';
import { LocationComponent } from './location.component';
import { OfficersComponent } from './officers.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserComponent, ProfileComponent, LocationComponent, OfficersComponent],
  providers: []
})

export class UserModule {
}
