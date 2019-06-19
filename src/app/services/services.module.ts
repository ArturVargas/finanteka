import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
    AuthService,
    AuthGuardGuard
 } from './services.index';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
        AuthGuardGuard
    ],
    declarations: []
})

export class ServicesModule { }