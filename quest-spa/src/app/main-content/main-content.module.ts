import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { NgMaterialModule } from '../ng-material.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { MainContentRoutingModule } from './main-content-routing.module';
import { MainContentComponent } from './main-content.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    MainContentComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MainContentRoutingModule,
    LayoutModule,
    AdminModule,
    HomeModule,
    NgMaterialModule
  ],
  exports: [
    MainContentComponent
  ]
})
export class MainContentModule { }
