import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VisitsRegistrationRoutingModule } from './visitsRegistration-routing.module';
import { VisitsRegistrationComponent } from './visitsRegistration.component';


@NgModule({
  declarations: [VisitsRegistrationComponent],
  exports: [
    VisitsRegistrationComponent
  ],
  imports: [
    CommonModule,
    VisitsRegistrationRoutingModule,
    FormsModule
  ]
})
export class VisitsRegistrationModule {
}
