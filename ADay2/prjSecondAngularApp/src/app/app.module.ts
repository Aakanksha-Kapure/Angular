import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { EmployeecrudComponent } from './employeecrud/employeecrud.component';
import { FormsModule } from '@angular/forms';
import { DepartmentcrudComponent } from './departmentcrud/departmentcrud.component';

@NgModule({
  declarations: [
    AppComponent,
    EventbindingComponent,
    EmployeecrudComponent,
    DepartmentcrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
