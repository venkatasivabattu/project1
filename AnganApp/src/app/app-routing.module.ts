import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './homepage1/aboutus/aboutus.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import { Homy1Component } from './homepage1/homy1/homy1.component';
import { SchemesComponent } from './homepage1/schemes/schemes.component';
import { LoginComponent } from './homepage1/login/login.component';
import { QueryComponent } from './homepage1/query/query.component';

import { Homepage2Component } from './homepage2/homepage2.component';
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



const routes: Routes = [
  {path:'',redirectTo:'home1',pathMatch:'full'},
  {path:'home2',component:Homepage2Component,
    children:[
      {path:'',redirectTo:'Dashboard',pathMatch:'full'},
      {path:'Dashboard',component:DashboardComponent},
      {path:'Enroll',component:EnrollComponent, 
        children:[
          {path:'',redirectTo:'p',pathMatch:'full'},
          {path:'p',component:EnrollpComponent},
          {path:'c',component:EnrollcComponent}
        ]
      },
      {path:'View',component:ViewComponent, 
        children:[
          {path:'',redirectTo:'p',pathMatch:'full'},
          {path:'p',component:ViewpComponent},
          {path:'c',component:ViewcComponent}
        ]
      },
      {path:'updatep',component:UpdatepComponent},
      {path:'updatec',component:UpdatecComponent},
      {path:'vaccines',component:VaccinationComponent},
        
      {path:'viewV',component:ViewVaccineComponent}
                ]
        
      
  },
  {path:'home1',component:Homepage1Component,
  children:[
    {path:'aboutus',component:AboutusComponent},
    {path:'query',component:QueryComponent},
    {path:'schemes',component:SchemesComponent},
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'homy1',pathMatch:'full'},
    {path:'homy1',component:Homy1Component}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
