import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TitleService } from 'app/core/title.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserComponent],
  providers: []
})

export class UserModule {}
