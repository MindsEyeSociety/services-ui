import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TitleService } from '../../services/title.service';

@NgModule({
  imports: [CommonModule, UserRoutingModule],
  declarations: [UserComponent],
  providers: []
})

export class UserModule {
  /**
   * Creates an instance of UserModule.
   *
   * @param {TitleService} titleService The Title Service to be injected into this Module.
   *
   * @memberOf UserModule
   */
  constructor( private titleService: TitleService ) {
    this.titleService.setTitle( 'Users' );
  }
}
