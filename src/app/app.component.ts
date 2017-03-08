import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { AuthService } from 'app/core/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private _location: Location,public authService: AuthService){
    var params = this.decodeQueryString(this._location.path());
    console.log(params);
    if(params['token']){
      console.log('setting token in appComponent',params['token']);
      this.authService.setToken(params['token']);
    }
  }
  decodeQueryString(path:string){
    var querystring = path.substring(path.indexOf('?')+1).split('&');
    var params = {}, pair, d = decodeURIComponent;
    // march and parse
    for (var i = querystring.length - 1; i >= 0; i--) {
      pair = querystring[i].split('=');
      params[d(pair[0])] = d(pair[1] || '');
    }
    return params;
  }
}