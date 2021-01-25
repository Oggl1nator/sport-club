import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './core/menu/menu.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RestService} from './service/rest.service';
import {LoginService} from './service/login.service';
import {LoggerService} from './service/logger.service';
import {SessionService} from './service/session.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [RestService, LoginService, LoggerService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
