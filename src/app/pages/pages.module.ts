import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { InvestInfoComponent } from './invest-info/invest-info.component';
import { FundedProyectsComponent } from './funded-proyects/funded-proyects.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    FaqsComponent,
    InvestDashboardComponent,
    InvestFormComponent,
    YieldsCalculatorComponent,
    ProyectsComponent,
    ProfileComponent,
    InvestInfoComponent,
    FundedProyectsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ChartsModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    PagesComponent,
    HomeComponent,
    YieldsCalculatorComponent
  ],
  entryComponents: [
    InvestFormComponent
  ]
})
export class PagesModule { }
