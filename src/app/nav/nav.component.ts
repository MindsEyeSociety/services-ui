import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.style.scss' ],
  animations: [
    trigger( 'navShow', [
      state( 'true', style({ transform: 'translateX(0)' }) ),
      transition( ':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate( '100ms ease-in' )
      ]),
      transition( ':leave', [
        animate( '100ms ease-out', style({ transform: 'translateX(-100%)' }) )
      ])
    ]),
    trigger( 'coverFade', [
      state( 'true', style({ opacity: 0.5 }) ),
      transition( ':enter', [
        style({ opacity: 0 }),
        animate( '100ms ease-in' )
      ]),
      transition( ':leave', [
        animate( '100ms ease-out', style({ opacity: 0 }) )
      ])
    ])
  ]
})
export class NavComponent implements OnInit {

  private user: Boolean;
  private showNav: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onNavClick() {
    this.showNav = ! this.showNav;
  }

}
