import { NgModule } from "@angular/core";
import { MaterialModule } from '../NgMaterial/material.module';

import { PagesRoutingModule } from '../pages/pages-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        MaterialModule,
        PagesRoutingModule
    ],
    declarations: [
        NavbarComponent,
        SidebarComponent,
        FooterComponent
    ],
    exports: [
        NavbarComponent,
        SidebarComponent,
        FooterComponent
    ]
})

export class SharedModule { }