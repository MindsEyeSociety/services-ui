import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
import { TitleService } from 'app/core/title.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styles: []
})
export class Error404Component implements OnInit {

  constructor( private titleService: TitleService ) {}

  ngOnInit() {
    this.titleService.setTitle( 'Page Not Found' );
  }

}
