import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular Material
import { MaterialModule } from '../NgMaterial/material.module';

//Charts
import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { FaqsComponent } from './faqs/faqs.component';
import { InvestDashboardComponent } from './invest-dashboard/invest-dashboard.component';
import { InvestFormComponent } from './invest-form/invest-form.component';
import { YieldsCalculatorComponent } from './yields-calculator/yields-calculator.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    FaqsComponent,
    InvestDashboardComponent,
    InvestFormComponent,
    YieldsCalculatorComponent,
    ProyectsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ChartsModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    PagesComponent,
    HomeComponent,
    YieldsCalculatorComponent
  ]
})
export class PagesModule { }
