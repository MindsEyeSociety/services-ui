import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { TitleService } from './title.service';
import { AppComponent } from './app.component';
import { Error404Component } from './pages/error404.component'

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ TitleService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
