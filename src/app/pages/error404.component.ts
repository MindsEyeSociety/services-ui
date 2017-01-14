import { Component } from '@angular/core';

import { TitleService } from '../title.service';

@Component({
  selector: 'app-404',
  template: `
    <h1>Page not found!</h1>
    <p>Looks like something went wrong here. Try going back to fix the issue?</p>
  `
})
export class Error404Component {
  constructor( private titleService: TitleService ) {
    this.titleService.setTitle( 'Page Not Found' );
  }
}
