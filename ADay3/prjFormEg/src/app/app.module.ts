import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatedformsComponent } from './templatedforms/templatedforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Reactiveforms1Component } from './reactiveforms1/reactiveforms1.component';
import { RegisterreactiveComponent } from './registerreactive/registerreactive.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedformsComponent,
    Reactiveforms1Component,
    RegisterreactiveComponent,
    NotfoundComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
