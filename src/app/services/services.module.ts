import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
    AuthService,
    AuthGuardGuard,
    UploadPhotoService,
    UpdateInfoService
 } from './services.index';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
        AuthGuardGuard,
        UploadPhotoService,
        UpdateInfoService
    ],
    declarations: []
})

export class ServicesModule { }