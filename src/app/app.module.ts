import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatepickerModule, TimepickerModule } from 'ng2-bootstrap';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Error404Component } from './pages/error404/error404.component';
import { UserModule } from './pages/user/user.module';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    HomeModule,
    AppRoutingModule,
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
