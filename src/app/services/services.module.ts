import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
    AuthService
 } from './services.index';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService
    ],
    declarations: []
})

export class ServicesModule { }