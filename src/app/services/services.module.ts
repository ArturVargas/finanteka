import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
    AuthService,
    AuthGuardGuard,
    UploadPhotoService,
    UpdateInfoService,
    AccountInfoService
 } from './services.index';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
        AuthGuardGuard,
        UploadPhotoService,
        UpdateInfoService,
        AccountInfoService
    ],
    declarations: []
})

export class ServicesModule { }