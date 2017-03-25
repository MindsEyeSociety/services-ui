import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { SubmenuService } from './submenu.service';
import { TitleService } from './title.service';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthService,
    SubmenuService,
    TitleService,
    UserService
  ]
})
/* For top level service providers */
export class CoreModule { }
