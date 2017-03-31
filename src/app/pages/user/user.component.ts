import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
import { SubmenuService } from 'app/core/submenu.service';
import { SubmenuItem } from 'app/core/submenu-item.model';
import { TitleService } from 'app/core/title.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  constructor(
    private titleService: TitleService,
    private authService: AuthService,
    private submenuService : SubmenuService
  )
  { }

  ngOnInit() {
    this.titleService.setTitle( 'MES Services UI' );
    this.submenuService.setItems(
      [
        {'title': 'Profile', 'path': '/user/profile'},
        {'title': 'Locations', 'path': '/user/locations'},
      ]
    );
  }

}
