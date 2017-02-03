import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent }     from './user.component';
import { TitleService } from '../../services/title.service';

@NgModule({
  imports: [CommonModule, UserRoutingModule],
  declarations: [UserComponent],
  providers: []
})

export class UserModule {
  
  constructor( private titleService: TitleService ) {
    this.titleService.setTitle( 'Users' );
  }

  

}
