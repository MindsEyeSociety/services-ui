import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
  providers: [AuthService]
})
export class UserComponent implements OnInit {

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Check query parameters for a passed Token.
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        console.log(`Setting Token to ${params['token']}`);
        if (params['token']) {
          this.authService.setToken(params['token']);
        }
      });
    // Check for login, redirect if not logged in. 
    // This step will need to be added to the ngOnInit for 
    // any component that requires Login.
    this.authService.checkLogin();

  }

}
