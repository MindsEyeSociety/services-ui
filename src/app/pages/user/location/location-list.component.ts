import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { UserService} from 'app/core/user.service';
import { OrgUnitSearch, OrgUnit} from 'app/models/';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styles: []
})
export class LocationListComponent implements OnInit, OnDestroy {
  searchParams: OrgUnitSearch = new OrgUnitSearch();
  searchSubscription: Subscription;
  orgUnits: OrgUnit[];
  constructor( private userService: UserService) {
  }

  ngOnInit() {
    this.searchSubscription = this.userService.getOrgUnits(this.searchParams).subscribe(
      (orgUnits:OrgUnit[]) => { this.orgUnits = orgUnits}  
    );
  }
  
  ngOnDestroy(){
    this.searchSubscription.unsubscribe();
  }

}
