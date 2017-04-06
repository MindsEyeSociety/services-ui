// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ngrx
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//
import { DatepickerModule, TimepickerModule } from 'ng2-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Error404Component } from './pages/error404/error404.component';
import { UserModule } from './pages/user/user.module';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';

//
//import { appRoutes } from './app.routing';
import { reducer } from './reducers';
import { State } from './reducers';
import { appState } from '../hmr';

// effects
import { AuthEffects } from './effects/auth';

// guards
import * as guard from './guards';


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
    StoreModule.provideStore(reducer, appState),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(AuthEffects),
    //EffectsModule.runAfterBootstrap(AuthEffects),
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    SidebarModule
  ],
  providers: [
    guard.AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
