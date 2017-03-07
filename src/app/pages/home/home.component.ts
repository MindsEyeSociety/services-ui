import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
import { TitleService } from 'app/core/title.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  constructor( private titleService: TitleService, public authService: AuthService, private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    this.titleService.setTitle( 'MES Services UI' );


    // Check query parameters for a passed Token.
    this.activatedRoute.queryParams.subscribe((params: Params) => {

        console.log(`Setting Token to ${params['token']}`);

        if (params['token']) {
          this.authService.setToken(params['token']);
        }



      });

  }

}
