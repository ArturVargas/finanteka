
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../login/register.component';
import { InvestDashboardComponent } from './invest-dashboard/invest-dashboard.component';
import { InvestInfoComponent } from './invest-info/invest-info.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: InvestDashboardComponent, children: [
    { path: '', component: InvestInfoComponent },
    { path: 'proyects', component: ProyectsComponent },
    { path: 'profile', component: ProfileComponent }
  ] },
  
  { path:'', pathMatch:'full', redirectTo:'/home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
