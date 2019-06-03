import { NgModule } from "@angular/core";

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
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