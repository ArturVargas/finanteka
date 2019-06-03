import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular Material
import { MaterialModule } from '../NgMaterial/material.module';

import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home/home.component';
import { FaqsComponent } from './faqs/faqs.component';
import { InvestDashboardComponent } from './invest-dashboard/invest-dashboard.component';
import { InvestFormComponent } from './invest-form/invest-form.component';
import { YieldsCalculatorComponent } from './yields-calculator/yields-calculator.component';

@NgModule({
  declarations: [
    HomeComponent,
    FaqsComponent,
    InvestDashboardComponent,
    InvestFormComponent,
    YieldsCalculatorComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    PagesRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
