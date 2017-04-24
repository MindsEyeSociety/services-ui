import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import {OrgUnit} from 'app/models/org-unit';
import { UserService} from 'app/core/user.service';


@Component({
  selector: 'app-location-list-item',
  templateUrl: './location-list-item.component.html',
  styles: []
})
export class LocationListItemComponent implements OnInit,OnDestroy {
  @Input() orgUnit: OrgUnit;
  expanded: boolean = false;
  fetchedOrgUnit: OrgUnit;
  children: OrgUnit[];
  childrenSubscription: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.orgUnit);
    if(this.orgUnit.hasOwnProperty('children')){
      this.fetchedOrgUnit=this.orgUnit;
      this.children = this.orgUnit.children;
    }
  }
  toggle(){
    if(!this.fetchedOrgUnit){
      this.childrenSubscription = this.userService.getOrgUnit(this.orgUnit.id,true).subscribe(
        (orgUnit:OrgUnit) => { this.fetchedOrgUnit = orgUnit; this.children = orgUnit.children; console.log(this.children); this.expanded = true}
      );
    }else{
      this.expanded = !this.expanded;
    }
  }
  ngOnDestroy(){
    if(this.childrenSubscription) this.childrenSubscription.unsubscribe();
  }
}
