import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
import { TitleService } from 'app/core/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  constructor( private titleService: TitleService ) {}

  ngOnInit() {
    this.titleService.setTitle( 'MES Services UI' );
  }

}
