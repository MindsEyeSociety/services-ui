import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { UserService} from 'app/core/user.service';
import { OrgUnit} from 'app/models/';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styles: []
})
export class LocationComponent implements OnInit, OnDestroy {
  orgSubscription: Subscription;
  orgUnit: OrgUnit;
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.orgSubscription = this.route.params
      .switchMap((params: Params) => {
        return this.userService.getOrgUnit(params['id'],false);
      }).subscribe(
        (orgUnit) => {this.orgUnit = orgUnit; console.log(this.orgUnit);}
      );
  }
  ngOnDestroy(){
    this.orgSubscription.unsubscribe();
  }
}
