import { Component,EventEmitter, OnInit, OnChanges, Input, Output, SimpleChanges } from '@angular/core';
import { BallotService } from '../ballot.service';

@Component({
	selector: 'app-voter-org-unit',
	templateUrl: './voter-org-unit.component.html',
	styles: []
})
export class VoterOrgUnitComponent implements OnInit,OnChanges {

	constructor(private ballotService: BallotService) { }
	@Input() orgUnitId: any;
	@Output() onOrgUnitIdChange = new EventEmitter<number>();
	subOrgUnitId: number;
	orgUnit:any;
	orgUnits: any;
	ngOnInit() {
		if(!this.orgUnitId) this.populateOrgs();
	}
	ngOnChanges(changes: SimpleChanges){
		if(changes['orgUnitId'].previousValue != changes['orgUnitId'].currentValue){
			this.populateOrgs();
		}
	}
	changeSubOrgUnitId(){
		this.onOrgUnitIdChange.emit(this.subOrgUnitId);
	}
	childOrgUnitIdChange(orgUnitId:number){ //called when child component emits a new orgUnitId
        if(orgUnitId>0) this.onOrgUnitIdChange.emit(orgUnitId); //Our child emitted a new orgUnitId!
        else this.onOrgUnitIdChange.emit(this.subOrgUnitId); //Child is set to "All of X", so return this component's selection
    }
	populateOrgs(){
		this.subOrgUnitId = 0;
		if(!this.orgUnitId){
			this.ballotService.getNations().subscribe(response => {this.orgUnits = response; console.log(this.orgUnits);});
		}
		else{
			console.log('have orgUnit', this.orgUnitId);
			this.ballotService.getOrgUnit(this.orgUnitId).subscribe(response => {
				if(response.children) {
					this.orgUnit = response.unit;
					this.orgUnits = [];
					//this.orgUnits = response.children;
					for(var i = 0; i < response.children.length; i++){
						var child = response.children[i];
						if(child.type!='Venue') this.orgUnits.push(child);
					}
				}
				else {this.orgUnits = [];}
			});

		}
	}

}
