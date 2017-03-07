import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
import { TitleService } from 'app/core/title.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {

  constructor(
    private titleService: TitleService,
    private authService: AuthService
  )
  { }

  ngOnInit() {
    this.authService.checkLogin();
    this.titleService.setTitle( 'MES Services UI' );
  }

}
