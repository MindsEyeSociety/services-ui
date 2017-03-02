/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VoterOrgUnitComponent } from './voter-org-unit.component';

describe('VoterOrgUnitComponent', () => {
  let component: VoterOrgUnitComponent;
  let fixture: ComponentFixture<VoterOrgUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterOrgUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterOrgUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
