import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
import { TitleService } from 'app/core/title.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(
    public titleService: TitleService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute
  )
  {
    
  }

  ngOnInit() {
  }

}
