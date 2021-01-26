import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitsRegistrationComponent } from './visitsRegistration.component';

const routes: Routes = [{ path: '', component: VisitsRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitsRegistrationRoutingModule { }
