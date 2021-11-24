import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from '../ng-material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    RouterModule
  ],
  exports: [HeaderComponent,
    FooterComponent,
    SideNavComponent]
})
export class LayoutModule { }
