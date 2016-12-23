import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    RouterModule.forRoot([
    	{ path: '', redirectTo: 'user', pathMatch: 'full'},
    	{ path: 'user', loadChildren: 'app/pages/user/user.module#UserModule'},
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class AppRoutingModule {}