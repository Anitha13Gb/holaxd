import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { FooterComponent } from './footer/footer.component';
import { HedComponent } from './hed/hed.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    BreadcrumsComponent,
    FooterComponent,
    HedComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    BreadcrumsComponent,
    FooterComponent,
    HedComponent,
    SidebarComponent
  ]
})
export class SharedModule { }

