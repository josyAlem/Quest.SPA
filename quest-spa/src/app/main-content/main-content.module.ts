import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { MainContentRoutingModule } from './main-content-routing.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
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
  ],
  exports:[
    MainContentComponent
  ]
})
export class MainContentModule { }
