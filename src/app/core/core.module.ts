import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule, TimepickerModule } from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
  ],
  declarations: []
})
/* For top level service providers */
export class CoreModule { }
