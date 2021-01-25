import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {FormControlsModule} from '../../form-controls/form-controls.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    FormControlsModule,
  ]
})
export class LoginModule {
}
