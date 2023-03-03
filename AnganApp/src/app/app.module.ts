import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import { Homepage2Component } from './homepage2/homepage2.component';
import { AboutusComponent } from './homepage1/aboutus/aboutus.component';
import { SchemesComponent } from './homepage1/schemes/schemes.component';
import { Homy1Component } from './homepage1/homy1/homy1.component';
import { LoginComponent } from './homepage1/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { QueryComponent } from './homepage1/query/query.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './homepage2/dashboard/dashboard.component';
import { EnrollComponent } from './homepage2/enroll/enroll.component';
import { EnrollpComponent } from './homepage2/enroll/enrollp/enrollp.component';
import { EnrollcComponent } from './homepage2/enroll/enrollc/enrollc.component';
import { ViewComponent } from './homepage2/view/view.component';
import { ViewcComponent } from './homepage2/view/viewc/viewc.component';
import { ViewpComponent } from './homepage2/view/viewp/viewp.component';
import { UpdatepComponent } from './homepage2/updatep/updatep.component';
import { UpdatecComponent } from './homepage2/updatec/updatec.component';
import { VaccinationComponent } from './homepage2/vaccination/vaccination.component';
import { ViewVaccineComponent } from './homepage2/view-vaccine/view-vaccine.component';


@NgModule({
  declarations: [
    AppComponent,
    Homepage1Component,
    Homepage2Component,
    AboutusComponent,
    SchemesComponent,
    Homy1Component,
    LoginComponent,
    QueryComponent,
    DashboardComponent,
    EnrollComponent,
    EnrollpComponent,
    EnrollcComponent,
    ViewComponent,
    ViewcComponent,
    ViewpComponent,
    UpdatepComponent,
    UpdatecComponent,
    VaccinationComponent,
    ViewVaccineComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
